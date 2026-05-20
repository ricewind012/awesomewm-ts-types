interface WiboxContainerConstraintProps {
	/**
	 * Set the strategy to use for the constraining.
	 */
	strategy?: "max" | "min" | "exact";

	/**
	 * Set the maximum width to val.
	 */
	width?: number;

	/**
	 * Set the maximum height to val.
	 */
	height?: number;
}

interface WiboxContainerConstraint
	extends BaseWidget,
		WiboxContainerConstraintProps {
	/**
	 * Reset this layout. The widget will be removed and the rotation reset.
	 */
	reset(): void;
}

/**
 * @noSelf
 */
interface WiboxContainerConstraintConstructor {
	(
		props: BaseWidgetProps & WiboxContainerConstraintProps,
	): WiboxContainerConstraint;
}
