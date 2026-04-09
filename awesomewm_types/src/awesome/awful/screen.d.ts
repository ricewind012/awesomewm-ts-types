/// <reference types="../client.d.ts" />
/// <reference types="../screen.d.ts" />
/// <reference types="../shared.d.ts" />

/**
 * @noSelf
 */
interface AwfulScreen {
	/**
	 * Return the screen index corresponding to the given (pixel) coordinates.
	 *
	 * The number returned can be used as an index into the global `screen`
	 * table/object.
	 *
	 * @param x The x coordinate
	 * @param y The y coordinate
	 *
	 * @returns The screen index
	 */
	getbycoord(x: number, y: number): number | null;

	/**
	 * Move the focus to a screen.
	 *
	 * This moves the mouse pointer to the last known position on the new screen, or
	 * keeps its position relative to the current focused screen.
	 *
	 * @param screen Screen number (defaults / falls back to `mouse.screen`).
	 *
	 * @returns The newly focused screen.
	 */
	focus(screen: AwesomeScreen | number): AwesomeScreen;

	/**
	 * Move the focus to a screen in a specific direction.
	 *
	 * @param dir The direction.
	 * @param s Screen.
	 *
	 * @returns The next screen.
	 */
	focus_bydirection(dir: Direction, s: AwesomeScreen): AwesomeScreen;

	/**
	 * Move the focus to a screen relative to the current one,  This moves the mouse
	 * pointer to the last known position on the new screen, or keeps its position
	 * relative to the current focused screen.
	 *
	 * @param offset Value to add to the current focused screen index. 1 to focus the
	 * next one, -1 to focus the previous one.
	 *
	 * @returns The newly focusd screen.
	 */
	focus_relative(offset: number): AwesomeScreen;

	/**
	 * Get the preferred screen in the context of a client.
	 *
	 * This is exactly the same as `awful.screen.focused` except that it avoids
	 * clients being moved when Awesome is restarted. This is used in the default
	 * `rc.lua` to ensure clients get assigned to the focused screen by default.
	 *
	 * @param c A client.
	 *
	 * @returns The preferred screen.
	 */
	preferred(c: AwesomeClient): AwesomeScreen;

	/**
	 * Get the focused screen.
	 *
	 * It is possible to set `awful.screen.default_focused_args` to override the
	 * default settings.
	 *
	 * @returns The focused screen object, or `nil` in case no screen is present
	 * currently.
	 */
	focused(args?: {
		/**
		 * Use the client screen instead of the mouse screen.
		 */
		client?: boolean;
		/**
		 * Use the mouse screen
		 */
		mouse?: boolean;
	}): AwesomeScreen | null;

	/**
	 * Call a function for each existing and created-in-the-future screen.
	 *
	 * @param func The function to call
	 */
	connect_for_each_screen(func: (screen: AwesomeScreen) => void): void;

	/**
	 * Undo the effect of {@link connect_for_each_screen}.
	 *
	 * @param func The function that should no longer be called.
	 */
	disconnect_for_each_screen(func: (screen: AwesomeScreen) => void): void;

	/**
	 * Enable the automatic calculation of the screen DPI (experimental).
	 *
	 * This will cause many elements such as the font and some widgets to be
	 * scaled so they look the same (physical) size on different devices with
	 * different pixel density.
	 *
	 * It is calculated using the information provided from `xrandr`.
	 *
	 * When enabled, the theme and configuration must avoid using pixel sizes
	 * for different elements as this will cause misalignment or hidden content
	 * on some devices.
	 *
	 * Note that it has to be called early in `rc.lua` and requires restarting
	 * awesome to take effect. It is disabled by default and changes introduced
	 * in minor releases of Awesome may slightly break the behavior as more
	 * components gain support for HiDPI.
	 *
	 * When disabled the DPI is acquired from the `Xft.dpi` X resource (xrdb),
	 * defaulting to 96.
	 *
	 * @param enabled Enable or disable automatic DPI support.
	 */
	set_auto_dpi_enabled(enabled: boolean): void;

	/**
	 * Default handler for `request::create`.
	 *
	 * **Important**: This only exists when Awesome is started with `--screen
	 * off`.
	 *
	 * If you implement this by hand, you must also implement handler for the
	 * `request::remove` and `request::resize`.
	 *
	 * @param viewport
	 */
	create_screen_handler(viewport: AwesomeScreenViewport): void;

	/**
	 * Default handler for `request::remove`.
	 *
	 * **Important**: This only exists when Awesome is started with `--screen
	 * off`.
	 *
	 * @param viewport
	 */
	remove_screen_handler(viewport: AwesomeScreenViewport): void;

	/**
	 * Default handler for `request::resize`.
	 *
	 * **Important**: This only exists when Awesome is started with `--screen
	 * off`.
	 *
	 * @param viewport
	 */
	resize_screen_handler(viewport: AwesomeScreenViewport): void;

	/**
	 * Get the square distance between a screen and a point.
	 *
	 * @param s Screen
	 * @param x X coordinate of point
	 * @param y Y coordinate of point
	 *
	 * @deprecated Use {@link AwesomeScreen.get_square_distance}
	 */
	getdistance_sq(s: AwesomeScreen, x: number, y: number): number;

	/**
	 * Get or set the screen padding.
	 *
	 * @param s The screen object to change the padding on.
	 * @param padding May be `nil` if you only want to retrieve padding.
	 *
	 * @deprecated Use {@link AwesomeScreen.padding}
	 */
	padding(
		s: AwesomeScreen,
		padding: AwesomeClientGeometry | number | null,
	): AwesomeClientGeometry;

	/**
	 * The default arguments for `awful.screen.focused`.
	 */
	default_focused_args: table;
}
