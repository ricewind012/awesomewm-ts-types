/**
 * @noSelf
 */
interface AwfulCompletion {
	/**
	 * Enable programmable bash completion in `awful.completion.bash` at the price
	 * of a slight overhead.
	 *
	 * @param src The bash completion source file, `/etc/bash_completion` by
	 * default.
	 */
	bashcomp_load(src: string): void;

	/**
	 * Use shell completion system to complete commands and filenames.
	 *
	 * @param command The command line.
	 * @param cur_pos The cursor position.
	 * @param ncomp The element number to complete.
	 * @param shell The shell to use for completion. Supports "bash" and "zsh".
	 * Default value is based on `$SHELL`.
	 *
	 * @returns
	 * - `string` The new command.
	 * - `number` The new cursor position.
	 * - `table` The table with all matches.
	 */
	shell(
		command: string,
		cur_pos: number,
		ncomp: number,
		shell?: string,
	): LuaMultiReturn<[string, number, table]>;

	/**
	 * Run a generic completion.
	 *  For this function to run properly the awful.completion.keyword table should
	 *  be fed up with all keywords. The completion is run against these keywords.
	 *
	 * @param text The current text the user had typed yet.
	 * @param cur_pos The current cursor position.
	 * @param ncomp The number of yet requested completion using current text.
	 * @param keywords The keywords table used for completion.
	 *
	 * @returns
	 * - `string` The new match.
	 * - `number` The new cursor position.
	 * - `table` The table of all matches.
	 */
	generic(
		text: string,
		cur_pos: number,
		ncomp: number,
		keywords: table,
	): LuaMultiReturn<[string, number, table]>;
}
