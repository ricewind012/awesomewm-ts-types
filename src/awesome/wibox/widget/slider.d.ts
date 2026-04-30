interface WiboxWidgetSliderProps {
	/**
	 * The slider handle shape.
	 */
	handle_shape?: shape;

	/**
	 * The slider handle color.
	 */
	handle_color?: AwesomeColor;

	/**
	 * The slider handle margins.
	 */
	handle_margins?: AwesomeClientStrut | number;

	/**
	 * The slider handle width.
	 */
	handle_width?: number;

	/**
	 * The handle border_color.
	 */
	handle_border_color?: AwesomeColor;

	/**
	 * The handle border width.
	 */
	handle_border_width?: number;

	/**
	 * The cursor icon while grabbing the handle.
	 */
	handle_cursor?: Cursor;

	/**
	 * The bar (background) shape.
	 */
	bar_shape?: shape;

	/**
	 * The bar (background) height.
	 */
	bar_height?: number;

	/**
	 * The bar (background) color.
	 */
	bar_color?: AwesomeColor;

	/**
	 * The bar (active) color.
	 */
	bar_active_color?: AwesomeColor;

	/**
	 * The bar (background) margins.
	 */
	bar_margins?: AwesomeClientStrut | number;

	/**
	 * The bar (background) border width.
	 */
	bar_border_width?: number;

	/**
	 * The bar (background) border_color.
	 */
	bar_border_color?: AwesomeColor;

	/**
	 * The slider value.
	 */
	value: number;

	/**
	 * The slider minimum value.
	 */
	minimum: number;

	/**
	 * The slider maximum value.
	 */
	maximum: number;
}

interface WiboxWidgetSlider extends BaseWidget {}

/**
 * @noSelf
 */
interface WiboxWidgetSliderConstructor {
	(props: WiboxWidgetSliderProps): WiboxWidgetSlider;
}
