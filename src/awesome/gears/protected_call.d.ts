/**
 * Call a function in protected mode and handle error-reporting. If the function
 * call succeeds, all results of the function are returned. Otherwise, an error
 * message is printed and nothing is returned.
 *
 * This is a
 * [pcall](https://www.lua.org/manual/5.3/manual.html#pdf-pcall)/[xpcall](https://www.lua.org/manual/5.3/manual.html#pdf-xpcall)
 * wrapper. All it does is to integrate into the AwesomeWM-wide error handling
 * and logging.
 *
 * @param func The function to call.
 * @param args Arguments to the function.
 */
type GearsProtectedCall = <
	ReturnValue extends {},
	T extends (...args: unknown[]) => ReturnValue,
>(
	func: T,
	...args: Parameters<T>
) => ReturnValue | undefined;
