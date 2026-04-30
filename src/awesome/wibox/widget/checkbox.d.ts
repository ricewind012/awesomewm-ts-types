interface WiboxWidgetCheckboxProps {
	/**
	 * The outer (unchecked area) border width.
	 */
	border_width: number;

	/**
	 * The outer (unchecked area) background color, pattern or gradient.
	 */
	bg?: AwesomeColor;

	/**
	 * The outer (unchecked area) border color.
	 */
	border_color?: AwesomeColor;

	/**
	 * The checked part border color.
	 */
	check_border_color?: AwesomeColor;

	/**
	 * The checked part border width.
	 */
	check_border_width?: number;

	/**
	 * The checked part filling color.
	 */
	check_color?: AwesomeColor;

	/**
	 * The outer (unchecked area) shape.
	 */
	shape?: shape;

	/**
	 * The checked part shape.
	 */
	check_shape?: shape;

	/**
	 * The padding between the outline and the progressbar.
	 */
	paddings?: table | number;

	/**
	 * The checkbox color.
	 */
	color?: AwesomeColor;

	/**
	 * If the checkbox is checked.
	 */
	checked: boolean;
}

interface WiboxWidgetCheckbox extends BaseWidget {}

/**
 * @noSelf
 */
interface WiboxWidgetCheckboxConstructor {
	(props: WiboxWidgetCheckboxProps): WiboxWidgetCheckbox;
}
