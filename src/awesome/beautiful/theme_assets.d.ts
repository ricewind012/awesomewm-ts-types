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
	taglist_squares_sel(size: number, fg: awesome_color): awesome_image;

	/**
	 * Generate unselected taglist square.
	 *
	 * @param size Size.
	 * @param fg Background color.
	 *
	 * @returns Image with the square.
	 */
	taglist_squares_unsel(size: number, fg: awesome_color): awesome_image;

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
		bg: awesome_color,
		fg: awesome_color,
		alt_fg: awesome_color,
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
		bg: awesome_color,
		fg: awesome_color,
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
	awesome_icon(size: awesome_color, bg: awesome_color, fg: awesome_color): void;

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
		bg: awesome_color,
		fg: awesome_color,
		alt_fg: awesome_color,
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
		color: awesome_color,
		state: "normal" | "focus",
		postfix: "hover" | "press" | undefined,
		toggle_state: "active" | "inactive" | undefined,
	): Theme;

	/**
	 * Recolor layout icons.
	 *
	 * @param theme Beautiful theme table
	 * @param color Icons' color.
	 *
	 * @returns Beautiful theme table with the images recolored.
	 */
	recolor_layout(theme: Theme, color: awesome_color): Theme;
}
