import type { WiboxLayoutBaseWidget } from "~/awesome/wibox/layout/base";
import type { BaseWidget } from "~/awesome/wibox/widget/base";

/**
 * How to use unused space.
 */
declare enum WiboxLayoutAlignExpandMode {
	/**
	 * The widgets in slot one and three are set to their minimal required size.
	 * The widget in slot two is then given the remaining space. This is the
	 * default behaviour.
	 */
	INSIDE = "inside",

	/**
	 * The widget in slot two is set to its minimal required size and placed in
	 * the center of the space available to the layout. The other widgets are
	 * then given the remaining space on either side. If the center widget
	 * requires all available space, the outer widgets are not drawn at all.
	 */
	OUTSIDE = "outside",

	/**
	 * All widgets are given their minimal required size or the remaining space,
	 * whichever is smaller. The center widget gets priority.
	 */
	NONE = "none",
}

interface WiboxLayoutAlignWidget
	extends Omit<WiboxLayoutBaseWidget, "remove" | "remove_widgets"> {
	/**
	 * The widget in slot 1.
	 *
	 * This is the widget that is at the left/top.
	 */
	first: BaseWidget | undefined;

	/**
	 * The widget in slot 2.
	 *
	 * This is the centered one.
	 */
	second: BaseWidget | undefined;

	/**
	 * The widget in slot 3.
	 *
	 * This is the widget that is at the right/bottom.
	 */
	third: BaseWidget | undefined;

	/**
	 * Set the expand mode, which determines how child widgets expand to take up
	 * unused space.
	 */
	expand: WiboxLayoutAlignExpandMode;
}

/**
 * @noSelf
 */
export interface WiboxLayoutAlign {
	/**
	 * Returns a new horizontal align layout.
	 *
	 * The three widget slots are aligned left, center and right.
	 */
	horizontal(
		left?: BaseWidget,
		middle?: BaseWidget,
		right?: BaseWidget,
	): WiboxLayoutAlignWidget;

	/**
	 * Returns a new vertical align layout.
	 *
	 * The three widget slots are aligned top, center and bottom.
	 */
	vertical(
		top?: BaseWidget,
		center?: BaseWidget,
		bottom?: BaseWidget,
	): WiboxLayoutAlignWidget;
}
