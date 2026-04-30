interface WiboxWidgetGraphProps {
	/**
	 * Set the graph border_width.
	 */
	border_width: number;

	/**
	 * Set the graph border color.
	 */
	border_color: AwesomeColor | undefined;

	/**
	 * Set the graph foreground color.
	 */
	color: AwesomeColor;

	/**
	 * Set the graph background color.
	 */
	background_color: AwesomeColor;

	/**
	 * Set the colors for data groups.
	 */
	group_colors: (AwesomeColor | undefined)[];

	/**
	 * The maximum value the graph should handle.
	 */
	max_value: number;

	/**
	 * The minimum value the graph should handle.
	 */
	min_value: number;

	/**
	 * Set the graph to automatically scale its values.
	 */
	scale: boolean;

	/**
	 * Clamp graph bars to keep them inside the widget for out-of-range values.
	 */
	clamp_bars: boolean;

	/**
	 * The value corresponding to the starting point of graph bars.
	 */
	baseline_value: number;

	/**
	 * Set the width or the individual steps.
	 */
	step_width: number;

	/**
	 * Set the spacing between the steps.
	 */
	step_spacing: number;

	/**
	 * The step shape.
	 */
	step_shape: shape;

	/**
	 * Set the graph to draw stacks.
	 */
	stack: boolean;

	/**
	 * Display NaN indication.
	 */
	nan_indication: boolean;

	/**
	 * The color of NaN indication.
	 */
	nan_color: AwesomeColor;

	/**
	 * Set the graph capacity.
	 */
	capacity: number | undefined;
}

interface WiboxWidgetGraph extends BaseWidget {
	/**
	 * Determine the color to paint a data group with. The graph uses this
	 * method to choose a color for a given data group. The default
	 * implementation uses a color from the
	 * {@link WiboxWidgetGraphProps.group_colors} table, if present, otherwise
	 * it falls back to {@link WiboxWidgetGraphProps.color}, then
	 * `beautiful.graph_fg` and finally to color red (#ff0000).
	 *
	 * @param group_idx The index of the data group.
	 *
	 * @returns The color to paint the data group's values with.
	 */
	pick_data_group_color(group_idx: number): AwesomeColor;

	/**
	 * Determine how many values should be drawn for a given widget width.The
	 * graph uses this method to determine the upper bound on the number of
	 * values that will be drawn from each data group. This affects, among other
	 * things, how many values will be considered for autoscaling, when
	 * {@link WiboxWidgetGraphProps.scale} is true, and, indirectly, how many
	 * values will be kept in the backing array, when
	 * {@link WiboxWidgetGraphProps.capacity} is unset.
	 *
	 * The default implementation computes the minimum number that is enough to
	 * completely cover the given width with
	 * {@link WiboxWidgetGraphProps.step_width} +
	 * {@link WiboxWidgetGraphProps.step_interval} intervals. The graph calls
	 * this method on every redraw and the width passed is the width of the
	 * value drawing area, i.e the graph borders are subtracted (2 *
	 * {@link WiboxWidgetGraphProps.border_width}).
	 *
	 * @param usable_width
	 *
	 * @returns The number of values.
	 */
	compute_drawn_values_num(usable_width: number): number;

	/**
	 * Add a value to the graph.The graph widget keeps its values grouped indata
	 * groups. Each data group is drawn with its own set of bars, starting with
	 * the latest value in the data group at the left edge of the graph.
	 *
	 * Simply calling this method with a particular data group index is the only
	 * thing necessary and sufficient for creating a data group. Any natural
	 * integer as a group number is ok, but the user is advised to keep the
	 * group numbers low and consecutive for performance reasons.
	 *
	 * There are no constraints on the value parameter, other than it should be
	 * a number.
	 *
	 * @param value The value to be added to a graph's data group.
	 * @param group The index of the data group.
	 */
	add_value(value?: number, group?: number): void;

	/**
	 * Clear the graph. Removes all values from all data groups.
	 */
	clear(): void;
}

/**
 * @noSelf
 */
interface WiboxWidgetGraphConstructor {
	(props: WiboxWidgetGraphProps): WiboxWidgetGraph;
}
