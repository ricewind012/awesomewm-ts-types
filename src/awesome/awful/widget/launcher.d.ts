interface AwfulWidgetLauncherProps extends AwfulWidgetButtonProps {
	/**
	 * Command to run on user click.
	 */
	command?: string;

	/**
	 * Table of items to create a menu based on `awful.menu`.
	 */
	menu?: MenuInstance;
}

interface AwfulWidgetLauncher extends AwfulWidgetButton {}

/**
 * @noSelf
 */
interface AwfulWidgetLauncherConstructor {
	(props: AwfulWidgetLauncherProps): AwfulWidgetLauncher;
}
