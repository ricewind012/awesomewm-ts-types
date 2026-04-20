all_text = [];
// Ones that *do* have theme vars:
// 5 10 13 17 25 26 27 28 30 31 32 35 36 37 39 40 41 42 43 48 55 66 67 69 70 71 72 73 74 75 88 93 94 96 110
links = [...document.querySelectorAll("#navigation a")].map((e) => e.href);
for (let i = 0; i < links.length; i++) {
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

  const parser = new DOMParser();
  const link_text = await (await fetch(links[i])).text();
  const document = parser.parseFromString(link_text, "text/html");

  const sel_el = [...document.querySelectorAll("h2")].find(
    (e) => e.innerText === "Theme variables",
  );
  if (!sel_el) {
    continue;
  }

  const text = [...sel_el.nextElementSibling.children[0].children]
    .map((e) => {
      const [name, type, desc] = [...e.children].map((e) => e.innerText);
      const ts_type = type
        .split(/\b\s+or\s+\b/g)
        .map((e) => TYPE_REPLACEMENTS[e] ?? e)
        .join("|");

      return [
        `/** ${desc.trim()} */`,
        `"${name.replace(/^beautiful\./, "")}": ${ts_type}`,
      ].join("\n");
    })
    .join("\n\n");
  const region = [
    `// #region ${document.querySelector("h1 code").innerText}`,
    text,
    `// #endregion`,
  ].join("\n");

  all_text.push(region);
  console.log(i);
}
