[...$0.children]
	.map((e) =>
		[
			`/**`,
			` * ${e.children[2].textContent.trim()}`,
			` */`,
			`"${e.children[0].textContent.trim()}": ${e.children[1].textContent.trim()}`,
		].join("\n"),
	)
	.join("\n\n");
