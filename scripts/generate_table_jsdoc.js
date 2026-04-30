sel_el = $0.tagName === "TBODY" ? $0 : $0.closest("tbody");
[...sel_el.children]
	.map((e) => {
		const TYPE_REPLACEMENTS = {
			client: "AwesomeClient",
			color: "AwesomeColor",
			function: "(...args: unknown[]) => any",
			integer: "number",
			nil: "undefined",
			screen: "AwesomeScreen",
			widget: "BaseWidget",
		};

		const [name, type, desc] = [...e.children].map((e) => e.innerText);
		const ts_type = type
			.split(/\b\s+or\s+\b/g)
			.map((e) => TYPE_REPLACEMENTS[e] ?? e)
			.join("|");

		return [`/**`, ` * ${desc}`, ` */`, `"${name}": ${ts_type}`].join("\n");
	})
	.join("\n\n");
