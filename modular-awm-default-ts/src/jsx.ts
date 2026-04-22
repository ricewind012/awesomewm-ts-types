import * as awful from "awful";
import * as gears from "gears";

const AWFUL_WIDGETS = [
	awful.hotkeys_popup,
	awful.popup,
	awful.titlebar,
	awful.wallpaper,
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
	// Doesn't use an args table
	//awful.widget.watch,
] as unknown as BaseWidget[];

// TODO (maybe) : widget?.set_widget(children)
export default function make_widget(
	widget: BaseWidget,
	props: object,
	...children: BaseWidget[]
) {
	// awful.widget.*
	const widget_type = type(widget);
	const is_awful_widget = AWFUL_WIDGETS.some((e) => widget === e);
	if (is_awful_widget) {
		return (widget as unknown as (this: void, props: object) => BaseWidget)(
			props,
		);
	}

	// Function components
	if (widget_type === "function") {
		widget = (widget as unknown as (this: void, props: object) => BaseWidget)(
			props,
		);
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
