import * as awful from "awful";
import * as gears from "gears";

const AWFUL_WIDGETS = [
	awful.wibar,
	awful.widget.button,
	awful.widget.clienticon,
	awful.widget.keyboardlayout,
	awful.widget.launcher,
	awful.widget.layoutbox,
	awful.widget.layoutlist,
	awful.widget.prompt,
	awful.widget.taglist,
	awful.widget.tasklist,
	awful.widget.watch,
];

export default function make_widget(
	widget: JSX.ElementType,
	props: object,
	...children: BaseWidget[]
) {
	// awful.widget.*, they most likely have no children anyway
	const widget_type = type(widget);
	const is_awful_widget = AWFUL_WIDGETS.some((e) => widget === e);
	if (is_awful_widget) {
		return (widget as (this: void, props: object) => BaseWidget)(props);
	}

	// Function components
	if (widget_type === "function") {
		widget = (widget as (this: void, props: object) => BaseWidget)(props);
	}

	// Normal widgets
	const child_widgets =
		children.length === 0
			? undefined
			: children
					.map((e, i) => ({ [i + 1]: e }))
					.reduce((a, b) => Object.assign(a, b));
	const what = widget_type === "table" ? "widget" : "layout";

	return gears.table.join({ [what]: widget }, props, child_widgets);
}
