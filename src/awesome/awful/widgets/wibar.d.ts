interface AwfulWibarProps extends AwfulPopupProps {
	/**
	 * If the wibar needs to be stretched to fill the screen.
	 */
	stretch?: boolean;

	/**
	 * How to align non-stretched wibars.
	 */
	align?: BaseCorner | "centered";

	/**
	 * Margins on each side of the wibar.
	 */
	margins?: AwesomeClientStrut | number;

	/**
	 * Allow or deny the tiled clients to cover the wibar.
	 */
	restrict_workarea?: boolean;

	/**
	 * The wibox position.
	 */
	position: BaseCorner;
}

interface AwfulWibarInstance extends AwfulPopupInstance {
	/**
	 * Remove a wibar.
	 */
	remove(): void;
}

/**
 * @noSelf
 */
interface AwfulWibar {
	(args: AwfulWibarProps): AwfulWibarInstance;
}
