interface WiboxContainerArcchartProps {
	/**
	 * The padding between the outline and the progressbar.
	 */
	paddings?: AwesomeClientStrut | number;

	/**
	 * The border background color.
	 */
	border_color?: AwesomeColor;

	/**
	 * The arcchart values foreground colors.
	 */
	colors?: AwesomeColor[];

	/**
	 * The border width.
	 */
	border_width?: number;

	/**
	 * The minimum value.
	 */
	min_value?: number;

	/**
	 * The maximum value.
	 */
	max_value?: number;

	/**
	 * The radial background.
	 */
	bg?: string;

	/**
	 * The value.
	 */
	value?: number;

	/**
	 * The values.
	 */
	values?: number[];

	/**
	 * If the chart has rounded edges.
	 */
	rounded_edge?: boolean;

	/**
	 * The arc thickness.
	 */
	thickness?: number;

	/**
	 * The (radiant) angle where the first value start.
	 */
	start_angle?: number;
}

interface WiboxContainerArcchart
	extends BaseWidget,
		WiboxContainerArcchartProps {
	/**
	 * Reset this layout. The widget will be removed and the rotation reset.
	 */
	reset(): void;
}

/**
 * @noSelf
 */
interface WiboxContainerArcchartConstructor {
	(
		props: BaseWidgetProps & WiboxContainerArcchartProps,
	): WiboxContainerArcchart;
}
