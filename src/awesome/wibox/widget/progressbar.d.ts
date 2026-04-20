interface WiboxWidgetProgressBarProps {
	/**
	 * The progressbar border color.
	 */
	border_color?: AwesomeColor;

	/**
	 * The progressbar border width.
	 */
	border_width?: number;

	/**
	 * The progressbar inner border color.
	 */
	bar_border_color?: AwesomeColor;

	/**
	 * The progressbar inner border width.
	 */
	bar_border_width?: number;

	/**
	 * The progressbar foreground color.
	 */
	color?: AwesomeColor;

	/**
	 * The progressbar background color.
	 */
	background_color?: AwesomeColor;

	/**
	 * The progressbar inner shape.
	 */
	bar_shape?: shape;

	/**
	 * The progressbar shape.
	 */
	shape?: shape;

	/**
	 * Force the inner part (the bar) to fit in the background shape.
	 */
	clip: boolean;

	/**
	 * The progressbar to draw ticks.
	 */
	ticks: boolean;

	/**
	 * The progressbar ticks gap.
	 */
	ticks_gap: number;

	/**
	 * The progressbar ticks size.
	 */
	ticks_size: number;

	/**
	 * The maximum value the progressbar should handle.
	 */
	max_value: number;

	/**
	 * The progressbar margins.
	 */
	margins?: AwesomeClientStrut | number;

	/**
	 * The progressbar padding.
	 */
	paddings?: AwesomeClientStrut | number;

	/**
	 * Set the progressbar value.
	 */
	value: number;
}

interface WiboxWidgetProgressBar extends BaseWidget {}

/**
 * @noSelf
 */
interface WiboxWidgetProgressBarConstructor {
	(props: WiboxWidgetProgressBarProps): WiboxWidgetProgressBar;
}
