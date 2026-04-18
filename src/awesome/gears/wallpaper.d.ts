import type { AwesomeScreen } from "~/awesome/screen";

/**
 * Functions for setting the wallpaper.
 *
 * @deprecated Please use {@link awful.wallpaper}.
 * @noSelf
 */
export interface GearsWallpaper {
	/**
	 * Prepare the needed state for setting a wallpaper. This function returns a
	 * cairo context through which a wallpaper can be drawn. The context is only
	 * valid for a short time and should not be saved in a global variable.
	 *
	 * @param s The screen to set the wallpaper on or `nil` for all screens
	 *
	 * @returns The available geometry
	 *
	 *         A cairo context that the wallpaper should be drawn to.
	 */
	prepare_context(
		s: AwesomeScreen,
	): LuaMultiReturn<[{ width: number; height: number }, any]>;

	/**
	 * Set the current wallpaper.
	 *
	 * @param pattern The wallpaper that should be set. This can be a cairo
	 * surface, a description for gears.color or a cairo pattern.
	 */
	set(pattern: any): void;

	/**
	 * Set a centered wallpaper.
	 *
	 * @param surf The wallpaper to set. Either a cairo surface or a file name.
	 * @param s The screen whose wallpaper should be set. Can be `nil`, in which
	 * case all screens are set.
	 * @param background The background color that should be used. Gets handled
	 * via `gears.color`. The default is black.
	 * @param scale The scale factor for the wallpaper. Default is `1` (original
	 * size).
	 */
	centered(
		surf: string | table,
		s: AwesomeScreen,
		background: any,
		scale: number,
	): void;

	/**
	 * Set a tiled wallpaper.
	 *
	 * @param surf The wallpaper to set. Either a cairo surface or a file name.
	 * @param s The screen whose wallpaper should be set. Can be `nil`, in which
	 * case all screens are set.
	 * @param offset This can be set to a table with entries x and y.
	 */
	tiled(
		surf: string | table,
		s: AwesomeScreen,
		offset: { x: number; y: number },
	): void;

	/**
	 * Set a maximized wallpaper.
	 *
	 * @param surf The wallpaper to set. Either a cairo surface or a file name.
	 * @param s The screen whose wallpaper should be set. Can be `nil`, in which
	 * case all screens are set.
	 * @param ignore_aspect If this is `true`, the image's aspect ratio is
	 * ignored. The default is to honor the aspect ratio.
	 * @param offset This can be set to a table with entries x and y.
	 */
	maximized(
		surf: string | table,
		s: AwesomeScreen,
		ignore_aspect: boolean,
		offset: { x: number; y: number },
	): void;

	/**
	 * Set a fitting wallpaper.
	 *
	 * @param surf The wallpaper to set. Either a cairo surface or a file name.
	 * @param s The screen whose wallpaper should be set. Can be `nil`, in which
	 * case all screens are set.
	 * @param background The background color that should be used. Gets handled
	 * via `gears.color`. The default is black.
	 */
	fit(surf: string | table, s: AwesomeScreen, background: any): void;
}
