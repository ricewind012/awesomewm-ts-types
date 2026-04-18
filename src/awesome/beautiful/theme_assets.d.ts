/// <reference types="../screen.d.ts" />
/// <reference types="../../todo.d.ts" />

/**
 * @noSelf
 */
interface BeautifulThemeAssets {
	/**
	 * Generate selected taglist square.
	 *
	 * @param size Size.
	 * @param fg Background color.
	 *
	 * @returns Image with the square.
	 */
	taglist_squares_sel(size: number, fg: string): awesome_image;

	/**
	 * Generate unselected taglist square.
	 *
	 * @param size Size.
	 * @param fg Background color.
	 *
	 * @returns Image with the square.
	 */
	taglist_squares_unsel(size: number, fg: string): awesome_image;

	/**
	 * Put Awesome WM name onto cairo surface.
	 *
	 * @param cr Cairo surface.
	 * @param height Height.
	 * @param bg Background color.
	 * @param fg Main foreground color.
	 * @param alt_fg Accent foreground color.
	 */
	gen_awesome_name(
		cr: any,
		height: number,
		bg: string,
		fg: string,
		alt_fg: string,
	): void;

	/**
	 * Put Awesome WM logo onto cairo surface.
	 *
	 * @param cr Cairo surface.
	 * @param width Height.
	 * @param height Width.
	 * @param bg Background color.
	 * @param fg Foreground color.
	 */
	gen_logo(
		cr: any,
		width: number,
		height: number,
		bg: string,
		fg: string,
	): void;

	/**
	 * Generate Awesome WM logo.
	 *
	 * @param size Size.
	 * @param bg Background color.
	 * @param fg Foreground color.
	 *
	 * @returns Image with the logo.
	 */
	awesome_icon(size: number, bg: string, fg: string): awesome_image;

	/**
	 * Generate Awesome WM wallpaper.
	 *
	 * @param bg Background color.
	 * @param fg Main foreground color.
	 * @param alt_fg Accent foreground color.
	 * @param s Screen (to get wallpaper size).
	 *
	 * @returns Wallpaper image.
	 */
	wallpaper(
		bg: string,
		fg: string,
		alt_fg: string,
		s: AwesomeScreen,
	): awesome_image;

	/**
	 * Recolor titlebar icons.
	 *
	 * @param theme Beautiful theme table
	 * @param color Icons' color.
	 * @param state
	 * @param postfix
	 * @param toggle_state
	 *
	 * @returns Beautiful theme table with the images recolored.
	 */
	recolor_titlebar(
		theme: Theme,
		color: string,
		state: "normal" | "focus",
		postfix?: "hover" | "press",
		toggle_state?: "active" | "inactive",
	): Theme;

	/**
	 * Recolor layout icons.
	 *
	 * @param theme Beautiful theme table
	 * @param color Icons' color.
	 *
	 * @returns Beautiful theme table with the images recolored.
	 */
	recolor_layout(theme: Theme, color: string): Theme;
}
