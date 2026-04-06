connect_newlines = (text) =>
	text
		.split("\n")
		.map((e) => `* ${e}`)
		.join("\n");
get_text = (el) => el.textContent.trim();

decls = [];
for (const func_text of a.querySelectorAll("strong")) {
	const text = func_text.textContent.replace("dbus.", "");
	const args = [...text.matchAll(/(\w+)[,)]/g)];

	const next = func_text.parentElement.nextElementSibling;
	const desc = get_text(next.childNodes[0]);

	const ret = [...next.querySelectorAll(":scope > h3")].find(
		(e) => e.textContent === "Returns:",
	);

	const decl = [
		`/**`,
		`${connect_newlines(desc)}`,
		args.length !== 0 && "*",
		args.length !== 0 && args.map((e) => `* @param ${e[1]}`).join("\n"),
		ret && "*",
		ret &&
			`* @returns ${connect_newlines(get_text(ret.nextElementSibling)).replace(/^\* /, "")}`,
		"*/",
		`export function ${text}`,
	]
		.filter(Boolean)
		.join("\n");
	decls.push(decl);
}
console.log(decls.join("\n\n"));
