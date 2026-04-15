/// <reference types="../../awful/button.d.ts" />

interface FindWidgetsResult {
	/**
	 * The drawable containing the widget.
	 */
	drawable: Drawable;

	/**
	 * The widget being displayed.
	 */
	widget: BaseWidget;

	/**
	 * The hierarchy managing the widget's geometry.
	 */
	hierarchy: WidgetHierarchy;

	/**
	 * An approximation of the X position that the widget is visible at on the
	 * surface.
	 */
	x: number;

	/**
	 * An approximation of the Y position that the widget is visible at on the
	 * surface.
	 */
	y: number;

	/**
	 * An approximation of the width that the widget is visible at on the
	 * surface.
	 */
	width: number;

	/**
	 * An approximation of the height that the widget is visible at on the
	 * surface.
	 */
	height: number;

	/**
	 * The exact width of the widget in its local coordinate system.
	 */
	widget_width: number;

	/**
	 * The exact height of the widget in its local coordinate system.
	 */
	widget_height: number;
}

type BaseWidgetSignalMap = SignalMap & {
	/**
	 * When the layout (size) change. This signal is emitted when the previous
	 * results of `:layout()` and `:fit()` are no longer valid. Unless this
	 * signal is emitted, `:layout()` and `:fit()` must return the same result
	 * when called with the same arguments.
	 */
	"widget::layout_changed": () => void;

	/**
	 * When the widget content changed. This signal is emitted when the content
	 * of the widget changes. The widget will be redrawn, it is not re-layouted.
	 * Put differently, it is assumed that `:layout()` and `:fit()` would still
	 * return the same results as before.
	 */
	"widget::redraw_needed": () => void;

	/**
	 * When a mouse button is pressed over the widget.
	 *
	 * @param self The current object instance itself.
	 * @param lx The horizontal position relative to the (0, 0) position in the
	 * widget.
	 * @param ly The vertical position relative to the (0, 0) position in the
	 * widget.
	 * @param button The button number.
	 * @param mods The modifiers (mod4, mod1 (alt), Control, Shift)
	 * @param find_widgets_result The entry from the result of
	 * {@link find_widgets} for the position that the mouse hit.
	 */
	"button::press": (
		this: void,
		self: BaseWidget,
		lx: number,
		ly: number,
		button: number,
		mods: string[],
		find_widgets_result: FindWidgetsResult,
	) => void;

	/**
	 * When a mouse button is released over the widget.
	 *
	 * @param self The current object instance itself.
	 * @param lx The horizontal position relative to the (0, 0) position in the
	 * widget.
	 * @param ly The vertical position relative to the (0, 0) position in the
	 * widget.
	 * @param button The button number.
	 * @param mods The modifiers (mod4, mod1 (alt), Control, Shift)
	 * @param find_widgets_result The entry from the result of
	 * {@link find_widgets} for the position that the mouse hit.
	 */
	"button::release": (
		this: void,
		self: BaseWidget,
		lx: number,
		ly: number,
		button: number,
		mods: string[],
		find_widgets_result: FindWidgetsResult,
	) => void;

	/**
	 * When the mouse enter a widget.
	 *
	 * @param self The current object instance itself.
	 * @param find_widgets_result The entry from the result of
	 * {@link find_widgets} for the position that the mouse hit.
	 */
	"mouse::enter": (
		this: void,
		self: BaseWidget,
		find_widgets_result: FindWidgetsResult,
	) => void;

	/**
	 * When the mouse leave a widget.
	 *
	 * @param self The current object instance itself.
	 * @param find_widgets_result The entry from the result of
	 * {@link find_widgets} for the position that the mouse hit.
	 */
	"mouse::leave": (
		this: void,
		self: BaseWidget,
		find_widgets_result: FindWidgetsResult,
	) => void;
};

interface BaseWidget extends SignalObject<BaseWidgetSignalMap> {
	/**
	 * Add a new `awful.button` to this widget.
	 *
	 * @param button The button to add.
	 */
	add_button(button: AwfulButtonInstance): void;

	/**
	 * Emit a signal and ensure all parent widgets in the hierarchies also
	 * forward the signal.
	 *
	 * This is useful to track signals when there is a dynamic set of containers
	 * and layouts wrapping the widget.
	 *
	 * Note that this function has some flaws:
	 *
	 * - The signal is only forwarded once the widget tree has been built. This
	 *   happens after all currently scheduled functions have been executed.
	 *   Therefore, it will not start to work right away.
	 * - In case the widget is present multiple times in a single widget tree,
	 *   this function will also forward the signal multiple times (once per
	 *   upward tree path).
	 * - If the widget is removed from the widget tree, the signal is still
	 *   forwarded for some time, similar to the first case.
	 *
	 * @param signal_name
	 * @param args Other arguments.
	 */
	emit_signal_recursive(
		signal_name: keyof BaseWidgetSignalMap,
		...args: any[]
	): void;

	/**
	 * Get the index of a widget.
	 *
	 * @param widget The widget to look for.
	 * @param recursive Recursively check accross the sub-widgets hierarchy.
	 * @param widgets Additional widgets to add at the end of the sub-widgets
	 * hierarchy "path".
	 * @returns The widget index, the parent widget and the hierarchy path
	 * between "self" and "widget".
	 */
	index<T extends BaseWidget>(
		widget: T,
		recursive?: boolean,
		...widgets: BaseWidget[]
	): LuaMultiReturn<[number, T, table]>;

	/**
	 * Get or set the children elements.
	 */
	children: BaseWidget[];

	/**
	 * Get all direct and indirect children widgets. This will scan all
	 * containers recursively to find widgets.
	 *
	 * Warning: This method it prone to stack overflow if there is a loop in the
	 * widgets hierarchy. A hierarchy loop is when a widget, or any of its
	 * children, contain (directly or indirectly) itself.
	 */
	all_children: BaseWidget[];

	/**
	 * Force a widget height.
	 */
	forced_height: number | undefined;

	/**
	 * Force a widget width.
	 */
	forced_width: number | undefined;

	/**
	 * The widget opacity (transparency, value is from 0 to 1).
	 */
	opacity: number;

	/**
	 * The widget visibility.
	 */
	visible: boolean;

	/**
	 * The widget buttons.
	 */
	buttons: AwfulButtonInstance[];
}

/**
 * @noSelf
 */
interface WiboxWidgetBase {
	/**
	 * Create a widget from a declarative description.
	 *
	 * @param args A table containing the widgets disposition.
	 */
	make_widget_declarative(args: table): BaseWidget;

	/**
	 * Create a widget from an undetermined value.
	 *
	 * The value can be:
	 *
	 * - A widget (in which case nothing new is created)
	 * - A declarative construct
	 * - A constructor function
	 * - A metaobject
	 *
	 * @param wdg The value.
	 * @param args Arguments passed to the contructor (if any).
	 */
	make_widget_from_value<T extends BaseWidget>(
		wdg: T,
		...args: any[]
	): T | undefined;

	/**
	 * Create an empty widget skeleton.
	 *
	 * @param proxy If this is set, the returned widget will be a proxy for this
	 * widget. It will be equivalent to this widget. This means it looks the
	 * same on the screen.
	 * @param widget_name  Name of the widget. If not set, it will be set
	 * automatically via `gears.object.modulename`.
	 * @param args Widget settings
	 */
	make_widget(
		proxy: BaseWidget,
		widget_name: string,
		args?: {
			/**
			 * Enable automatic getter and setter methods.
			 */
			enable_properties?: boolean;

			/**
			 * The widget class.
			 */
			class?: table;
		},
	): BaseWidget;

	/**
	 * Generate an empty widget which takes no space and displays nothing.
	 */
	empty_widget(): BaseWidget;

	/**
	 * Figure out the geometry in the device coordinate space.
	 *
	 * This gives only tight bounds if no rotations by non-multiples of 90° are
	 * used.
	 *
	 * @param cr The cairo context.
	 * @param x
	 * @param y
	 * @param width
	 * @param height
	 *
	 * @returns number
	 *         The new x value.
	 *
	 *            number
	 *         The new y value.
	 *
	 *            number
	 *         The new width value.
	 *
	 *            number
	 *         The new height value.
	 */
	rect_to_device_geometry(
		cr: any,
		x: number,
		y: number,
		width: number,
		height: number,
	): LuaMultiReturn<[number, number, number, number]>;

	/**
	 * Fit a widget for the given available width and height.
	 *
	 * This calls the widget's `:fit` callback and caches the result for later
	 * use. Never call `:fit` directly, but always through this function!
	 *
	 * @param parent The parent widget which requests this information.
	 * @param context The context in which we are fit.
	 * @param widget The widget to fit (this uses `widget:fit(context, width,
	 * height)`).
	 * @param width The available width for the widget.
	 * @param height The available height for the widget.
	 *
	 * @returns number
	 *         The width that the widget wants to use.
	 *
	 *            number
	 *         The height that the widget wants to use.
	 */
	fit_widget(
		parent: BaseWidget,
		context: any,
		widget: BaseWidget,
		width: number,
		height: number,
	): LuaMultiReturn<[number, number]>;

	/**
	 * Lay out a widget for the given available width and height.
	 *
	 * This calls the widget's `:layout` callback and caches the result for
	 * later use. Never call `:layout` directly, but always through this
	 * function! However, normally there shouldn't be any reason why you need to
	 * use this function.
	 *
	 * @param parent The parent widget which requests this information.
	 * @param context The context in which we are laid out.
	 * @param widget The widget to fit (this uses `widget:layout(context, width,
	 * height)`).
	 * @param width The available width for the widget.
	 * @param height The available height for the widget.
	 *
	 * @returns The result from the widget's `:layout` callback.
	 */
	layout_widget(
		parent: BaseWidget,
		context: any,
		widget: BaseWidget,
		width: number,
		height: number,
	): table;

	/**
	 * Handle a button event on a widget.
	 *
	 * This is used internally and should not be called directly.
	 */
	handle_button(): void;

	/**
	 * Create widget placement information.  This should be used in a widget's
	 *
	 * @param widget The widget that should be placed.
	 * @param mat A matrix transforming from the parent widget's coordinate
	 * system. For example, use `matrix.create_translate(1, 2)` to draw a widget
	 * at position (1, 2) relative to the parent widget.
	 * @param width The width of the widget in its own coordinate system. That
	 * is, after applying the transformation matrix.
	 * @param height The height of the widget in its own coordinate system. That
	 * is, after applying the transformation matrix.
	 *
	 * @returns An opaque object that can be returned from `:layout()`.
	 */
	place_widget_via_matrix(
		widget: BaseWidget,
		mat: any,
		width: number,
		height: number,
	): table;

	/**
	 * Create widget placement information.  This should be used for a widget's
	 * `:layout()` callback.
	 *
	 * @param widget The widget that should be placed.
	 * @param x The y coordinate for the widget.
	 * @param y The y coordinate for the widget.
	 * @param width The width of the widget in its own coordinate system. That
	 * is, after applying the transformation matrix.
	 * @param height The height of the widget in its own coordinate system. That
	 * is, after applying the transformation matrix.
	 *
	 * @returns An opaque object that can be returned from `:layout()`.
	 */
	place_widget_at(
		widget: BaseWidget,
		x: number,
		y: number,
		width: number,
		height: number,
	): table;

	/**
	 * Do some sanity checking on a widget.
	 *
	 * This function raises an error if the widget is not valid.
	 */
	check_widget(): void;
}
