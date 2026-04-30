interface AwfulPromptSharedProps {
	/**
	 * Prompt text.
	 */
	prompt?: string;

	/**
	 * The callback function to call to get completion.
	 *
	 * @param command_before_comp The current command.
	 * @param cur_pos_before_comp The current cursor position.
	 * @param ncomp The number of the currently completed element.
	 */
	completion_callback?: (
		command_before_comp: string,
		cur_pos_before_comp: number,
		ncomp: number,
	) => void;

	/**
	 * The callback function to call with command as argument when
	 * finished.
	 *
	 * @param cmd The command (as entered).
	 */
	exe_callback?: (cmd: string) => void;

	/**
	 * A function to add syntax highlighting to the command.
	 *
	 * @param before_cursor
	 * @param after_cursor
	 */
	highlighter?: (before_cursor: string, after_cursor: string) => void;

	/**
	 * File path where the history should be saved, set `nil` to disable
	 * history
	 */
	history_path?: string;

	/**
	 * Set the maximum entries in history file, 50 by default
	 */
	history_max?: (...args: unknown[]) => void;

	/**
	 * The callback function to always call without arguments,
	 * regardless of whether the prompt was cancelled.
	 */
	done_callback?: () => void;

	/**
	 * The callback function to call with command as argument when a
	 * command was changed.
	 *
	 * @param cmd The current command.
	 */
	changed_callback?: (cmd: string) => void;

	/**
	 * The callback function to call with mod table, key and command as
	 * arguments when a key was pressed.
	 *
	 * @param mod The current modifiers (like "Control" or "Shift").
	 * @param key The key name.
	 * @param command The current command.
	 */
	keypressed_callback?: (
		mod: ButtonModifier[],
		key: string,
		command: string,
	) => void;

	/**
	 * The callback function to call with mod table, key and command as
	 * arguments when a key was pressed.
	 *
	 * @param mod The current modifiers (like "Control" or "Shift").
	 * @param key The key name.
	 * @param command The current command.
	 */
	keyreleased_callback?: (
		mod: ButtonModifier[],
		key: string,
		command: string,
	) => void;

	/**
	 * The "hooks" argument uses a syntax similar to
	 * [awful.key](https://awesomewm.org/apidoc/input_handling/awful.key.html#).
	 * It will call a function for the matching modifiers + key. It
	 * receives the command (widget text/input) as an argument. If the
	 * callback returns a command, this will be passed to the
	 * {@link exe_callback}, otherwise nothing gets executed by default,
	 * and the hook needs to handle it.
	 */
	hooks?: [ButtonModifier[], string, (cmd: string) => string | undefined][];

	fg_cursor?: AwesomeColor;
	bg_cursor?: AwesomeColor;
	ul_cursor?: AwesomeColor;
	font?: string;
	autoexec?: boolean;
}

/**
 * Convert a {@link wibox.widget.textbox} into an input prompt.
 *
 * @noSelf
 */
interface AwfulPrompt {
	/**
	 * Run a prompt in a box.
	 *
	 * @param args A table with optional arguments
	 */
	run(
		args?: AwfulPromptSharedProps & {
			/**
			 * The textbox to use for the prompt.
			 */
			textbox?: BaseWidget;

			selectall?: boolean;
			text?: string;
		},
	): void;
}
