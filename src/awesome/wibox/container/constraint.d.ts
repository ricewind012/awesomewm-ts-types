interface WiboxContainerConstraintProps {
	/**
	 * Set the strategy to use for the constraining.
	 */
	strategy: "max" | "min" | "exact";

	/**
	 * Set the maximum width to val.
	 */
	width: number | undefined;

	/**
	 * Set the maximum height to val.
	 */
	height: number | undefined;
}

interface WiboxContainerConstraint extends BaseWidget {
	/**
	 * Reset this layout. The widget will be removed and the rotation reset.
	 */
	reset(): void;
}

/**
 * @noSelf
 */
interface WiboxContainerConstraintConstructor {
	(props: Partial<WiboxContainerConstraintProps>): WiboxContainerConstraint;
}
