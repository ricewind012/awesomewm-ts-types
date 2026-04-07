/**
 * Various small utility functions not worth putting into new modules.
 */
interface AwfulUtil {
	/**
	 * Eval Lua code.
	 *
	 * It can either be "real" code or expressions like `2 ~= 3`. If the
	 * expression cannot be interpreted or returns false, this function calls
	 * [error](https://www.lua.org/manual/5.3/manual.html#pdf-error).
	 *
	 * @param code The code to evaluate.
	 *
	 * @returns The return value of Lua code.
	 */
	eval(code: string): number;

	/**
	 * Check if a file is a Lua valid file. This is done by loading the content
	 * and compiling it with `loadfile()`.
	 *
	 * @param path The file path.
	 *
	 * @returns A function if everything is alright, a string with the error
	 *  otherwise.
	 */
	checkfile(path: string): ((...args: unknown[]) => void) | string;

	/**
	 * Try to restart awesome. It checks if the configuration file is valid, and
	 * then restart if it's ok. If it's not ok, the error will be returned.
	 *
	 * @returns Never return if awesome restart, or return a string error.
	 */
	restart(): string | null;

	/**
	 * Search for an icon and return the full path.
	 *
	 * It searches for the icon path under the given directories with respect to
	 * the given extensions for the icon filename.
	 *
	 * @param iconname The name of the icon to search for.
	 * @param exts Table of image extensions allowed.
	 * @param dirs Table of dirs to search.
	 * @param size The size. If this is specified, subdirectories `x` of the
	 * dirs are searched first.
	 *
	 * @returns The icon path or `nil` if not found.
	 */
	geticonpath(
		iconname: string,
		exts?: string[],
		dirs?: string[],
		size?: string,
	): string | null;

	/**
	 * The default shell used when spawning processes.
	 */
	shell: string;
}
