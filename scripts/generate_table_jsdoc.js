[...$0.children]
	.map((e) => {
		const TYPE_REPLACEMENTS = {
			client: "AwesomeClient",
			function: "(...args: unknown[]) => any",
			integer: "number",
			nil: "null",
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
