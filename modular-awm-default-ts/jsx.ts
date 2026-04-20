import * as gears from "gears";

export default function make_widget(
	widget: BaseWidget,
	props: object,
	...children: BaseWidget[]
) {
	const child_widgets =
		children.length === 0
			? undefined
			: children
					.map((e, i) => ({ [i + 1]: e }))
					.reduce((a, b) => Object.assign(a, b));
	const what = type(widget) === "table" ? "widget" : "layout";
	if (child_widgets) {
		print(`child_widgets: ${Object.keys(child_widgets).join(" ")}`);
	}

	return gears.table.join({ [what]: widget }, props, child_widgets);
}
