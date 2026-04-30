interface WiboxWidgetSystemTrayProps {
	/**
	 * Set the size of a single icon.
	 */
	base_size?: number;

	/**
	 * Decide between horizontal or vertical display.
	 */
	horizontal?: boolean;

	/**
	 * Should the systray icons be displayed in reverse order?
	 */
	reverse?: boolean;

	/**
	 * Set the screen that the systray should be displayed on.
	 */
	screen?: AwesomeScreen;
}

interface WiboxWidgetSystemTray extends BaseWidget {}

/**
 * @noSelf
 */
interface WiboxWidgetSystemTrayConstructor {
	(props: WiboxWidgetSystemTrayProps): WiboxWidgetSystemTray;
}
