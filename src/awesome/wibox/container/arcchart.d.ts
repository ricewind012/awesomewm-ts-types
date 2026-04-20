interface WiboxContainerArcchartProps {
	/**
	 * The padding between the outline and the progressbar.
	 */
	paddings: AwesomeClientStrut | number;

	/**
	 * The border background color.
	 */
	border_color: AwesomeColor | undefined;

	/**
	 * The arcchart values foreground colors.
	 */
	colors: AwesomeColor[];

	/**
	 * The border width.
	 */
	border_width: number | undefined;

	/**
	 * The minimum value.
	 */
	min_value: number;

	/**
	 * The maximum value.
	 */
	max_value: number;

	/**
	 * The radial background.
	 */
	bg: string | undefined;

	/**
	 * The value.
	 */
	value: number;

	/**
	 * The values.
	 */
	values: number[];

	/**
	 * If the chart has rounded edges.
	 */
	rounded_edge: boolean | undefined;

	/**
	 * The arc thickness.
	 */
	thickness: number | undefined;

	/**
	 * The (radiant) angle where the first value start.
	 */
	start_angle: number;
}

interface WiboxContainerArcchart extends BaseWidget {
	/**
	 * Reset this layout. The widget will be removed and the rotation reset.
	 */
	reset(): void;
}

/**
 * @noSelf
 */
interface WiboxContainerArcchartConstructor {
	(props: Partial<WiboxContainerArcchartProps>): WiboxContainerArcchart;
}
