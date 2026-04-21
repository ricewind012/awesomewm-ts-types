/**
 * @noSelf
 */
interface AwfulWidgetWatch {
	/**
	 * Create a textbox that shows the output of a command and updates it at a given time interval.
	 *
	 * @param command The command.
	 * @param timeout The time interval at which the textbox will be updated.
	 * @param callback The function that will be called after the command output
	 * will be received. it is shown in the textbox.
	 * @param base_widget Base widget.
	 *
	 * @returns
	 * - The widget used by this watch.
	 * - Its gears.timer.
	 */
	watch(
		command: string,
		timeout?: number,
		callback?: (
			/**
			 * Base widget instance.
			 */
			widget: BaseWidget,

			/**
			 * Output on stdout.
			 */
			stdout: string,

			/**
			 * Output on stderr.
			 */
			stderr: string,

			/**
			 * Exit Reason. The reason can be "exit" or "signal".
			 */
			exitreason: "exit" | "signal",

			/**
			 * Exit code. For "exit" reason it's the exit code. For "signal"
			 * reason — the signal causing process termination.
			 */
			exitcode: number,
		) => void,
		base_widget?: BaseWidget,
	): LuaMultiReturn<[BaseWidget, Timer]>;
}
