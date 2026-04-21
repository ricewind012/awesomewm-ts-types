interface AwfulWidgetButtonProps extends WiboxWidgetImageBoxProps {
	buttons: AwfulButtonInstance[];
}

interface AwfulWidgetButton extends WiboxWidgetImageBox {}

/**
 * @noSelf
 */
interface AwfulWidgetButtonConstructor {
	(props: AwfulWidgetButtonProps): AwfulWidgetButton;
}
