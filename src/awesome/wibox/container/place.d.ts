interface WiboxContainerPlaceProps {
	/**
	 * The vertical alignment.
	 */
	valign: VerticalAlignment;

	/**
	 * The horizontal alignment.
	 */
	halign: HorizontalAlignment;

	/**
	 * Fill the vertical space.
	 */
	fill_vertical: boolean;

	/**
	 * Fill the horizontal space.
	 */
	fill_horizontal: boolean;

	/**
	 * Stretch the contained widget so it takes all the vertical space.
	 */
	content_fill_vertical: boolean;

	/**
	 * Stretch the contained widget so it takes all the horizontal space.
	 */
	content_fill_horizontal: boolean;
}

interface WiboxContainerPlace extends BaseWidget {
	/**
	 * Reset this layout. The widget will be removed and the rotation reset.
	 */
	reset(): void;
}

/**
 * @noSelf
 */
interface WiboxContainerPlaceConstructor {
	(props: Partial<WiboxContainerPlaceProps>): WiboxContainerPlace;
}
