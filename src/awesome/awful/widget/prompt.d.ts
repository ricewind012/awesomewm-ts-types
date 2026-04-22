interface AwfulWidgetPromptShared {
	/**
	 * Use a (terminal) shell to execute this.
	 */
	with_shell?: boolean;
}

interface AwfulWidgetPromptProps
	extends AwfulWidgetPromptShared,
		AwfulPromptSharedProps,
		WiboxContainerBackgroundProps {}

interface AwfulWidgetPrompt
	extends AwfulPrompt,
		AwfulWidgetPromptShared,
		WiboxContainerBackground {}

/**
 * @noSelf
 */
interface AwfulWidgetPromptConstructor {
	(props: AwfulWidgetPromptProps): AwfulWidgetPrompt;
}
