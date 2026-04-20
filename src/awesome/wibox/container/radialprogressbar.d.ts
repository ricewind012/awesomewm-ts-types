interface WiboxContainerRadialProgressBarProps {
	/**
	 * The padding between the outline and the progressbar.
	 */
	paddings: table | number | undefined;

	/**
	 * The progressbar value.
	 */
	value: number;

	/**
	 * The border background color.
	 */
	border_color: string | undefined;

	/**
	 * The border foreground color.
	 */
	color: string | undefined;

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
}

interface WiboxContainerRadialProgressBar extends BaseWidget {
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
		props: Partial<WiboxContainerRadialProgressBarProps>,
	): WiboxContainerRadialProgressBar;
}
