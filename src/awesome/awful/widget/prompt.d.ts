interface AwfulWidgetPromptShared {
	/**
	 * Use a (terminal) shell to execute this.
	 */
	with_shell?: boolean;
}

interface AwfulWidgetPromptProps
	extends AwfulWidgetPromptShared,
		AwfulPromptSharedProps,
		Partial<WiboxContainerBackgroundProps> {}

interface AwfulWidgetPrompt
	extends AwfulWidgetPromptShared,
		WiboxContainerBackground {}

/**
 * @noSelf
 */
interface AwfulWidgetPromptConstructor {
	(props: AwfulWidgetPromptProps): AwfulWidgetPrompt;
}
