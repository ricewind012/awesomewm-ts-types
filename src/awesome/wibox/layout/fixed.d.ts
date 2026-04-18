import type { WiboxLayoutBaseWidget } from "~/awesome/wibox/layout/base";
import type { BaseWidget } from "~/awesome/wibox/widget/base";

interface WiboxLayoutFixedWidget extends WiboxLayoutBaseWidget {
	/**
	 * A widget to insert as a separator between child widgets.
	 *
	 * If this property is a valid widget and {@link spacing} is greater than 0,
	 * a copy of this widget is inserted between each child widget, with its
	 * size in the layout's main direction determined by {@link spacing}.
	 *
	 * By default no widget is used and any {@link spacing} is applied as an
	 * empty offset.
	 */
	spacing_widget: BaseWidget;

	/**
	 * Set the layout's `fill_space` property. If this property is true, the
	 * last widget will get all the space that is left. If this is false, the
	 * last widget won't be handled specially and there can be space left
	 * unused.
	 */
	fill_space: boolean;

	/**
	 * The amount of space inserted between the child widgets.
	 *
	 * If a {@link spacing_widget} is defined, this value is used for its size.
	 */
	spacing: number;
}

/**
 * @noSelf
 */
export interface WiboxLayoutFixed {
	/**
	 * Returns a new horizontal fixed layout.
	 */
	horizontal(
		left?: BaseWidget,
		middle?: BaseWidget,
		right?: BaseWidget,
	): WiboxLayoutFixedWidget;

	/**
	 * Returns a new vertical fixed layout.
	 */
	vertical(
		top?: BaseWidget,
		center?: BaseWidget,
		bottom?: BaseWidget,
	): WiboxLayoutFixedWidget;
}
