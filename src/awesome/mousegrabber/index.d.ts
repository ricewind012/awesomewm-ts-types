/**
 * @noResolution
 * @noSelf
 */
declare module "mousegrabber" {
	/**
	 * Check if mousegrabber is running.
	 */
	export function isrunning(): boolean;

	/**
	 * Grab the mouse pointer and list motions, calling callback function at
	 * each motion.
	 *
	 * @param func The callback function must return a boolean value: true to
	 * continue grabbing, false to stop. The function is called with one argument: a
	 * table containing modifiers pointer coordinates.
	 * @param cursor The name of an X cursor to use while grabbing  or `nil` to
	 * not change the cursor.
	 */
	export function run(
		func: (coords: table | undefined) => boolean,
		cursor?: Cursor,
	): void;

	/**
	 * Stop grabbing the mouse pointer.
	 */
	export function stop(): void;
}
