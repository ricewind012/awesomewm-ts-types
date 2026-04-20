interface WiboxContainerMirrorProps {
	/**
	 * A table describing the reflection to apply.
	 */
	reflection: {
		horizontal: boolean;
		vertical: boolean;
	};
}

interface WiboxContainerMirror extends BaseWidget {
	/**
	 * Reset this layout. The widget will be removed and the rotation reset.
	 */
	reset(): void;
}

/**
 * @noSelf
 */
interface WiboxContainerMirrorConstructor {
	(props: Partial<WiboxContainerMirrorProps>): WiboxContainerMirror;
}
