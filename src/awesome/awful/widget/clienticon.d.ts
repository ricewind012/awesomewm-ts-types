interface AwfulWidgetClientIconProps extends BaseWidgetProps {
	/**
	 * The widget's client.
	 */
	client: AwesomeClient;
}

interface AwfulWidgetClientIcon extends BaseWidget {}

/**
 * @noSelf
 */
interface AwfulWidgetClientIconConstructor {
	(props: AwfulWidgetClientIconProps): AwfulWidgetClientIcon;
}
