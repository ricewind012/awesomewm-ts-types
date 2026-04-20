declare enum BackgroundBorderStrategy {
	/**
	 * Just apply the border, do not affect the content size (default).
	 */
	NONE = "none",

	/**
	 * Squeeze the size of the content by the border width.
	 */
	INNER = "inner",
}

interface WiboxContainerBackgroundProps {
	/**
	 * Stretch the background gradient horizontally.
	 */
	stretch_horizontally: boolean;

	/**
	 * Stretch the background gradient vertically.
	 */
	stretch_vertically: boolean;

	/**
	 * The background color/pattern/gradient to use.
	 */
	bg: AwesomeColor;

	/**
	 * The foreground (text) color/pattern/gradient to use.
	 */
	fg: AwesomeColor;

	/**
	 * The background shape.
	 */
	shape: shape;

	/**
	 * Add a border of a specific width.
	 */
	border_width: number;

	/**
	 * Set the color for the border.
	 */
	border_color: AwesomeColor;

	/**
	 * How the border width affects the contained widget.
	 */
	border_strategy: BackgroundBorderStrategy;
}

interface WiboxContainerBackground extends BaseWidget {
	/**
	 * Set the background shape. Any other arguments will be passed to the shape function.
	 *
	 * @param shape
	 */
	set_shape(
		shape: shape | ((context: string, width: number, height: number) => void),
	): void;
}

/**
 * @noSelf
 */
interface WiboxContainerBackgroundConstructor {
	(props: Partial<WiboxContainerBackgroundProps>): WiboxContainerBackground;
}
