interface WiboxContainerTileProps extends WiboxContainerPlaceProps {
	/**
	 * The horizontal spacing between the tiled.
	 */
	horizontal_spacing: number;

	/**
	 * The vertical spacing between the tiled.
	 */
	vertical_spacing: number;

	/**
	 * Avoid painting incomplete horizontal tiles.
	 */
	horizontal_crop: boolean;

	/**
	 * Avoid painting incomplete vertical tiles.
	 */
	vertical_crop: boolean;

	/**
	 * Enable or disable the tiling.
	 */
	tiled: boolean;
}

interface WiboxContainerTile extends BaseWidget {}

/**
 * @noSelf
 */
interface WiboxContainerTileConstructor {
	(props: Partial<WiboxContainerTileProps>): WiboxContainerTile;
}
