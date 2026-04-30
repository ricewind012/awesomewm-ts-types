interface WiboxWidgetPieChartProps {
	/**
	 * The pie chart data list.
	 */
	data_list: [string, number][];

	/**
	 * The pie chart data.
	 */
	data: { key: string; value: number }[];

	/**
	 * The border color.
	 */
	border_color?: AwesomeColor;

	/**
	 * The pie elements border width.
	 */
	border_width?: number;

	/**
	 * The pie chart colors.
	 */
	colors?: AwesomeColor[];

	/**
	 * If the pie chart has labels.
	 */
	display_labels: boolean;
}

interface WiboxWidgetPieChart extends BaseWidget {}

/**
 * @noSelf
 */
interface WiboxWidgetPieChartConstructor {
	(props: WiboxWidgetPieChartProps): WiboxWidgetPieChart;
}
