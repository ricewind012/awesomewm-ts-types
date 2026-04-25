import * as awful from "awful";
import * as gears from "gears";
import * as wibox from "wibox";

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

const WIBOX_WIDGETS = [
	wibox.layout.align.horizontal,
	wibox.layout.align.vertical,
	wibox.layout.fixed.horizontal,
	wibox.layout.fixed.vertical,
	wibox.layout.flex.horizontal,
	wibox.layout.flex.vertical,
	wibox.layout.grid.horizontal,
	wibox.layout.grid.vertical,
	wibox.layout.manual,
	wibox.layout.ratio.horizontal,
	wibox.layout.ratio.vertical,
	wibox.layout.stack,
] as unknown as BaseWidget[];

export default function make_widget(
	widget: BaseWidget,
	props: object,
	...children: BaseWidget[]
) {
	// Function components
	const widget_type = type(widget);
	const is_wibox_widget = WIBOX_WIDGETS.some((e) => widget === e);
	if (widget_type === "function" && !is_wibox_widget) {
		widget = (widget as unknown as (props: object) => BaseWidget)(props);
	}

	// awful.widget.*
	const is_awful_widget = AWFUL_WIDGETS.some((e) => widget === e);
	if (is_awful_widget) {
		return (widget as unknown as (props: object) => BaseWidget)(props);
	}

	// Normal widgets
	// In Lua, widgets are objects, but it doesn't have a "children" prop, and
	// instead accepts widget tables with an automatically assigned index.
	const child_widgets = children.map((e, i) => ({ [i + 1]: e }));
	return gears.table.join({ widget }, props, ...child_widgets);
}
