/// <reference types="./fixed.d.ts" />

interface WiboxLayoutStackWidget
	extends Omit<WiboxLayoutFixedWidget, "max_widget_size"> {
	/**
	 * Raise a widget at `index` to the top of the stack.
	 *
	 * @param index The widget index to raise.
	 */
	raise(index: number): void;

	/**
	 * Raise the first instance of `widget`.
	 *
	 * @param widget The widget to raise.
	 * @param recursive Also look deeper in the hierarchy to find the widget
	 */
	raise_widget(widget: BaseWidget, recursive?: boolean): void;

	/**
	 * If only the first stack widget is drawn.
	 */
	top_only: boolean;

	/**
	 * Add an horizontal offset to each layers.
	 *
	 * Note that this reduces the overall size of each widgets by the sum of all
	 * layers offsets.
	 */
	horizontal_offset: number;

	/**
	 * Add an vertical offset to each layers.
	 *
	 * Note that this reduces the overall size of each widgets by the sum of all
	 * layers offsets.
	 */
	vertical_offset: number;
}

/**
 * @noSelf
 */
interface WiboxLayoutStack {
	(): WiboxLayoutStackWidget;
}
