interface WiboxContainerRadialProgressBarProps {
	/**
	 * The padding between the outline and the progressbar.
	 */
	paddings?: AwesomeClientStrut | number;

	/**
	 * The progressbar value.
	 */
	value: number;

	/**
	 * The border background color.
	 */
	border_color?: AwesomeColor;

	/**
	 * The border foreground color.
	 */
	color?: AwesomeColor;

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
}

interface WiboxContainerRadialProgressBar
	extends BaseWidget,
		WiboxContainerRadialProgressBarProps {
	/**
	 * Reset this layout. The widget will be removed and the rotation reset.
	 */
	reset(): void;
}

/**
 * @noSelf
 */
interface WiboxContainerRadialProgressBarConstructor {
	(
		props: BaseWidgetProps & WiboxContainerRadialProgressBarProps,
	): WiboxContainerRadialProgressBar;
}
