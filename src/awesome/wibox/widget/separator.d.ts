interface WiboxWidgetSeparatorProps {
	/**
	 * The separator's orientation.
	 */
	orientation?: "horizontal" | "vertical" | "auto";

	/**
	 * The separator's thickness.
	 */
	thickness?: number;

	/**
	 * The separator's shape.
	 */
	shape?: shape;

	/**
	 * The relative percentage covered by the bar.
	 */
	span_ratio?: number;

	/**
	 * The separator's color.
	 */
	color?: AwesomeColor;

	/**
	 * The separator's border color.
	 */
	border_color?: AwesomeColor;

	/**
	 * The separator's border width.
	 */
	border_width?: number;
}

interface WiboxWidgetSeparator extends BaseWidget {}

/**
 * @noSelf
 */
interface WiboxWidgetSeparatorConstructor {
	(props: WiboxWidgetSeparatorProps): WiboxWidgetSeparator;
}
