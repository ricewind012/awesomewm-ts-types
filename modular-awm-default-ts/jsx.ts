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
					.map((e, i) => ({ [i]: e }))
					.reduce((a, b) => Object.assign(a, b));
	return gears.table.join({ widget }, props, child_widgets);
}
