interface WiboxContainerMarginProps {
	/**
	 * Set all the margins to val.
	 */
	margins: AwesomeClientStrut | number;

	/**
	 * Set the margins color to create a border.
	 */
	color: AwesomeColor | undefined;

	/**
	 * Draw the margin even if the content size is 0x0.
	 */
	draw_empty: boolean;

	/**
	 * Set the left margin that this layout adds to its widget.
	 */
	left: number;

	/**
	 * Set the right margin that this layout adds to its widget.
	 */
	right: number;

	/**
	 * Set the top margin that this layout adds to its widget.
	 */
	top: number;

	/**
	 * Set the bottom margin that this layout adds to its widget.
	 */
	bottom: number;
}

interface WiboxContainerMargin extends BaseWidget {
	/**
	 * Reset this layout. The widget will be removed and the rotation reset.
	 */
	reset(): void;
}

/**
 * @noSelf
 */
interface WiboxContainerMarginConstructor {
	(props: Partial<WiboxContainerMarginProps>): WiboxContainerMargin;
}
