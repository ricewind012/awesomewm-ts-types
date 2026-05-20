interface WiboxContainerRotateProps {
	/**
	 * The direction of this rotating container.
	 */
	direction?: "north" | "east" | "south" | "west";
}

interface WiboxContainerRotate
	extends WiboxWidgetInstance<WiboxContainerRotateProps> {
	/**
	 * Reset this layout. The widget will be removed and the rotation reset.
	 */
	reset(): void;
}

/**
 * @noSelf
 */
interface WiboxContainerRotateConstructor {
	(props: BaseWidgetProps & WiboxContainerRotateProps): WiboxContainerRotate;
}
