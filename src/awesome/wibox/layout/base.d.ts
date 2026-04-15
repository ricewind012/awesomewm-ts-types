/// <reference types="../widget/base.d.ts" />

interface WiboxLayoutBaseWidget extends BaseWidget {
	/**
	 * Add some widgets to the given layout.
	 *
	 * @param args Widgets that should be added (must at least be one).
	 */
	add(...args: BaseWidget[]): void;

	/**
	 * Insert a new widget in the layout at position `index`.
	 *
	 * @returns If the operation is successful.
	 */
	insert(index: number, widget: BaseWidget): boolean;

	/**
	 * Remove a widget from the layout.
	 *
	 * @param index The widget index to remove
	 *
	 * @returns If the operation is successful
	 */
	remove(index: number): boolean;

	/**
	 * Remove one or more widgets from the layout.
	 * The last parameter can be a boolean, forcing a recursive seach of the
	 * widget(s) to remove.
	 *
	 * @param args Widgets that should be removed (must at least be one)
	 *
	 * @returns If the operation is successful
	 */
	remove_widgets(...args: BaseWidget[]): boolean;

	/**
	 * Replace the first instance of `widget` in the layout with `widget2`.
	 *
	 * @param widget The widget to replace
	 * @param widget2 The widget to replace widget with
	 * @param recursive Recurse into all compatible layouts to find the widget.
	 *
	 * @returns True if the widget was replaced successfully, false
	 * otherwise.
	 */
	replace_widget(
		widget: BaseWidget,
		widget2: BaseWidget,
		recursive?: boolean,
	): boolean;

	/**
	 * Set a widget at a specific index, replacing the current one.
	 *
	 * @param index A widget or a widget index
	 * @param widget2 The widget to replace the previous one with
	 *
	 * @returns True if the widget was replaced successfully, false otherwise.
	 */
	set(index: number, widget2: BaseWidget): boolean;

	/**
	 * Swap 2 widgets in a layout.
	 *
	 * @param index1 The first widget index
	 * @param index2 The second widget index
	 *
	 * @returns True if the widget was replaced successfully, false
	 * otherwise.
	 */
	swap(index1: number, index2: number): boolean;

	/**
	 * Swap 2 widgets in a layout. If `widget1` is present multiple time, only
	 * the first instance is swapped.
	 *
	 * Calls
	 * [set](https://awesomewm.org/apidoc/widget_layouts/wibox.layout.align.html#set)
	 * internally, so the signal `widget::replaced` is emitted for both widgets
	 * as well.
	 *
	 * @param widget1 The first widget
	 * @param widget2 The second widget
	 * @param recursive Recurse into all compatible layouts to find the widget.
	 *
	 * @returns True if the widget was replaced successfully, false otherwise.
	 */
	swap_widgets(
		widget1: BaseWidget,
		widget2: BaseWidget,
		recursive?: boolean,
	): boolean;

	/**
	 * Reset the layout. This removes all widgets from the layout.
	 */
	reset(): void;
}
