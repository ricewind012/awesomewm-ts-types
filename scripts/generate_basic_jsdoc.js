connect_newlines = (text) =>
  text
    .split("\n")
    .map((e) => `* ${e}`)
    .join("\n");
get_text = (el) =>
  el.nodeType === HTMLElement.TEXT_NODE ? el.textContent.trim() : el.innerText;
to_type = (text) => text.replace(/\bor\b/g, "|");

function text_to_md(parent, end) {
  let result = "";
  for (let i = 0; i < end; i++) {
    const kid = parent.childNodes[i];
    if (kid.textContent.trim() === "") continue;

    const kid_text = get_text(kid);
    const [text, text_end] = (() => {
      switch (kid.tagName) {
        case "A":
          return [` [${kid_text}](${kid.href}) `, ""];
        case "CODE":
          return [` \`${kid_text}\` `, ""];
        case "P":
          return [text_to_md(kid, kid.childNodes.length), "\n"];
        case "STRONG":
          return [` **${kid_text}** `, "\n"];
        case "OL":
        case "UL":
          return [
            [...kid.children].map((e) => `- ${get_text(e)}`).join("\n"),
            "\n",
          ];
        default:
          return [kid_text.replace(/\n$/, ""), "\n"];
      }
    })();

    result = `${result.replace(/([^\n])\n$/g, "$1")}${text}${text_end}`;
  }

  return result;
}

decls = [];
sel_el = $0.classList.contains("function") ? $0 : $0.closest(".function");
for (const func_text of sel_el.querySelectorAll("dt > strong")) {
  const text = func_text.innerText
    .match(/[:.](\w+)/g)
    ?.join("")
    .slice(1);
  const next =
    func_text.parentElement.nextElementSibling || func_text.parentElement;

  const first_header = [...next.childNodes].findIndex(
    (e) => e.tagName === "H3" || e.tagName === "BR",
  );
  const desc = text_to_md(next, first_header);

  const get_header_el = (text) =>
    headers.find((e) => e.innerText === text)?.nextElementSibling;
  const headers = [...next.querySelectorAll(":scope > h3")];

  const TYPE_REPLACEMENTS = {
    client: "AwesomeClient",
    color: "AwesomeColor",
    function: "((...args: unknown[]) => any)",
    int: "number",
    integer: "number",
    nil: "undefined",
    screen: "AwesomeScreen",
    widget: "BaseWidget",
  };
  const args_el = get_header_el("Parameters:");
  const args = [];
  if (args_el) {
    for (const arg of [...args_el.children[0].children].slice(1)) {
      let param = arg.querySelector(".parameter")?.innerText;
      const is_rest = param === "...";
      if (!is_rest && arg.querySelector(".chips")) {
        param += "?";
      }
      if (is_rest) {
        param = "...args";
      }

      let type = to_type(arg.querySelector(".type")?.innerText || "any");
      if (TYPE_REPLACEMENTS[type]) {
        type = TYPE_REPLACEMENTS[type];
      }

      args.push([
        param,
        type,
        arg.querySelector(".see_also_description")?.innerText,
      ]);
    }
  }

  const ret_desc_el = get_header_el("Returns:");
  const [ret, ret_desc] = (() => {
    if (!ret_desc_el) return [];

    const is_multi_return = ret_desc_el.querySelector(":scope > li");
    const ret_type_el = ret_desc_el.querySelector(":scope > .types");
    if (!ret_type_el && !is_multi_return) return [];

    const ret = ret_type_el ? get_text(ret_type_el) : "";
    const ret_desc = is_multi_return
      ? `\n${[...ret_desc_el.children].map((e) => `* - ${e.innerText.replace(/^(\w+)/, "`$1`")}`).join("\n")}`
      : to_type(get_text(ret_desc_el)).replace(`${ret} `, "");

    return [ret, ret_desc];
  })();

  if (!text) {
    console.log(func_text);
  }

  const decl = [
    `/**`,
    `${connect_newlines(desc.slice(0, -1))}`,
    args.length !== 0 && "*",
    args.length !== 0 &&
      args
        .map((e) => {
          const name = e[0].replace("?", "").replace("...", "");
          return `* @param ${name} ${e[2]}`;
        })
        .join("\n"),
    ret_desc && "*",
    ret_desc && `* @returns ${ret_desc}`,
    "*/",
    `${text}(${args.map((e) => `${e[0]}: ${e[1]}`).join(", ")})`,
    `: ${ret || "any"}`,
  ]
    .filter(Boolean)
    .join("\n");
  decls.push(decl);
}
console.log(decls.join("\n\n"));
