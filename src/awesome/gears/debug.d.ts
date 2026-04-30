/**
 * Utility functions to make development easier.
 * @noSelf
 */
interface GearsDebug {
	/**
	 * Inspect the value in data.
	 *
	 * @param data Value to inspect.
	 * @param tag The name of the value.
	 * @param depth Depth of recursion.
	 *
	 * @returns A string that contains the expanded value of data.
	 */
	dump_return(data: any, tag?: string, depth?: number): string;

	/**
	 * Print the table (or any other value) to the console.
	 *
	 * @param data Table to print.
	 * @param tag The name of the table.
	 * @param depth Depth of recursion.
	 */
	dump(data: any, tag?: string, depth?: number): void;

	/**
	 * Print an warning message
	 *
	 * @param message The warning message to print.
	 */
	print_warning(message: string): void;

	/**
	 * Print an error message
	 *
	 * @param message The error message to print.
	 */
	print_error(message: string): void;

	/**
	 * Display a deprecation notice, but only once per traceback.
	 *
	 * This function also emits the `debug::deprecation` signal on the
	 * {@link awesome} global object. If the deprecated API has been deprecated
	 * for more than one API level, it will also send a non-fatal error.
	 *
	 * @param see The message to a new method / function to use.
	 * @param args Extra arguments.
	 */
	deprecate(
		see: string | undefined,
		args: {
			/**
			 * Print the message as-is without the automatic context
			 */
			raw: boolean;

			/**
			 * Print the message only when Awesome's version is equal to or
			 * greater than `deprecated_in`.
			 */
			deprecated_in: number;
		},
	): void;

	/**
	 * Create a class proxy with deprecation messages. This is useful when a
	 * class has moved somewhere else.
	 *
	 * @param fallback The new class.
	 * @param old_name The old class name.
	 * @param new_name The new class name.
	 * @param args The name.
	 *
	 * @returns A proxy class.
	 */
	deprecate_class<T extends {}>(
		fallback: T,
		old_name: string,
		new_name: string,
		args?: {
			/**
			 * The version which deprecated this class.
			 */
			deprecated_in?: number;
		},
	): T;
}
