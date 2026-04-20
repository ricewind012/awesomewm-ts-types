/// <reference types="./container" />
/// <reference types="./hierarchy.d.ts" />
/// <reference types="./layout" />
/// <reference types="./widget" />

interface Wibox {
	/**
	 * Get or set wibox geometry. That's the same as accessing or setting
	 * the x, y, width or height properties of a wibox.
	 *
	 * @param geo A table with coordinates to modify. If nothing is
	 * specified, it only returns the current geometry.
	 *
	 * @returns A table with wibox coordinates and geometry.
	 */
	geometry(geo?: Rectangle): Rectangle;

	/**
	 * Get or set wibox struts. Struts are the area which should be reserved
	 * on each side of the screen for this wibox. This is used to make bars
	 * and docked displays. Note that
	 * [awful.wibar](https://awesomewm.org/apidoc/popups_and_bars/awful.wibar.html#)
	 * implements all the required boilerplate code to make bar. Only use
	 * this if you want special type of bars (like bars not fully attached
	 * to the side of the screen).
	 *
	 * @param struts A table with new strut, or nothing.
	 */
	struts(struts: AwesomeClientStrut[]): AwesomeClientStrut;

	/**
	 * Set a declarative widget hierarchy description. See [The declarative
	 * layout
	 * system](https://awesomewm.org/apidoc/documentation/03-declarative-layout.md.html)
	 *
	 * @param args An array containing the widgets disposition
	 */
	setup(args: any): any;

	/**
	 * Find a widget by a point. The wibox must have drawn itself at least once for this to work.
	 *
	 * @param x X coordinate of the point
	 * @param y Y coordinate of the point
	 *
	 * @returns A sorted table of widgets positions. The first element is
	 * the biggest container while the last is the topmost widget.
	 */
	find_widgets(x: number, y: number): Rectangle & { widget: widget };

	/**
	 * Create a widget that reflects the current state of this wibox.
	 *
	 * @returns A new widget.
	 */
	to_widget(): widget;

	/**
	 * Save a screenshot of the wibox to `path`.
	 *
	 * @param path The path.
	 * @param context A widget context.
	 */
	save_to_svg(path: string, context?: table): void;

	/**
	 * Redraw a wibox. You should never have to call this explicitely
	 * because it is automatically called when needed.
	 *
	 * @param wibox
	 */
	draw(wibox: Wibox): void;

	/**
	 * The X window id.
	 */
	window: string;

	/**
	 * Get or set mouse buttons bindings to a wibox.
	 */
	buttons: AwfulButtonInstance[];
}

interface WiboxSharedProps {
	/**
	 * Border width.
	 */
	border_width: number;

	/**
	 * Border color.
	 */
	border_color: string;

	/**
	 * On top of other windows.
	 */
	ontop?: boolean;

	/**
	 * The mouse cursor.
	 */
	cursor: string;

	/**
	 * Visibility.
	 */
	visible: boolean;

	/**
	 * The opacity, between 0 and 1.
	 */
	opacity?: number;

	/**
	 * The window type (desktop, normal, dock, …).
	 */
	type: string;

	/**
	 * The x coordinates.
	 */
	x: number;

	/**
	 * The y coordinates.
	 */
	y: number;

	/**
	 * The width.
	 */
	width: number;

	/**
	 * The height.
	 */
	height: number;

	/**
	 * The wibox screen.
	 */
	screen: AwesomeScreen;

	/**
	 * The widget that the wibox displays.
	 */
	widget: BaseWidget;

	/**
	 * The wibox’s bounding shape as a (native) cairo surface.
	 */
	shape_bounding: cairo_surface;

	/**
	 * The wibox’s clip shape as a (native) cairo surface.
	 */
	shape_clip: cairo_surface;

	/**
	 * The wibox’s input shape as a (native) cairo surface.
	 */
	shape_input: cairo_surface;

	/**
	 * The background.
	 */
	bg: string;

	/**
	 * The background image of the drawable.
	 */
	bgimage: cairo_surface;

	/**
	 * The foreground (text) color.
	 */
	fg: string;

	/**
	 * The shape.
	 */
	shape: ((cr: any, width: number, height: number) => void) | shape;

	/**
	 * If the inputs are forward to the element below.
	 */
	input_passthrough?: boolean;
}

/**
 * @noResolution
 */
declare module "wibox" {
	export const container: WiboxContainer;
	export const hierarchy: WiboxHierarchy;
	export const layout: WiboxLayout;
	export const wibox: (args?: WiboxSharedProps) => Wibox;
	export const widget: {
		base: WiboxWidgetBase;
	};
}
