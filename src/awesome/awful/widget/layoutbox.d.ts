interface AwfulWidgetLayoutBoxProps extends Partial<BaseWidgetProps> {
	/**
	 * The screen number that the layout will be represented for.
	 */
	screen?: AwesomeScreen;
}

interface AwfulWidgetLayoutBox extends WiboxLayoutFixedWidget {}

/**
 * @noSelf
 */
interface AwfulWidgetLayoutBoxConstructor {
	(props: AwfulWidgetLayoutBoxProps): AwfulWidgetLayoutBox;
}
