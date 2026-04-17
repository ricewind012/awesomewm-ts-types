/// <reference types="./gtk.d.ts" />
/// <reference types="./theme_assets.d.ts" />
/// <reference types="./xresources.d.ts" />
/// <reference types="../../todo.d.ts" />

interface Theme {
	/**
	 * The default font.
	 */
	font: string;

	/**
	 * The default background color.
	 */
	bg_normal: string;

	/**
	 * The default focused element background color.
	 */
	bg_focus: string;

	/**
	 * The default urgent element background color.
	 */
	bg_urgent: string;

	/**
	 * The default minimized element background color.
	 */
	bg_minimize: string;

	/**
	 * The default focused element foreground (text) color.
	 */
	fg_normal: string;

	/**
	 * The default focused element foreground (text) color.
	 */
	fg_focus: string;

	/**
	 * The default urgent element foreground (text) color.
	 */
	fg_urgent: string;

	/**
	 * The default minimized element foreground (text) color.
	 */
	fg_minimize: string;

	/**
	 * The wallpaper path.
	 */
	wallpaper: string | cairo_image_surface;

	/**
	 * The icon theme name.
	 */
	icon_theme: string;

	/**
	 * The Awesome icon path.
	 */
	awesome_icon: string | cairo_image_surface;
}

/**
 * @noResolution
 * @noSelf
 */
declare module "beautiful" {
	/**
	 * Get the current theme.
	 * @returns The current theme table.
	 */
	export function get(): Theme;

	/**
	 * Get a font description.
	 *
	 * See
	 * https://developer.gnome.org/pango/stable/pango-Fonts.html#PangoFontDescription.
	 *
	 * @param name The name of the font.
	 */
	export function get_font(
		name: string | lgi.Pango.FontDescription,
	): lgi.Pango.FontDescription;

	/**
	 * Get the height of a font.
	 *
	 * @param name Name of the font.
	 * @returns The font height.
	 */
	export function get_font_height(name: string): number;

	/**
	 * Get a new font with merged attributes, based on another one.
	 *
	 * See
	 * https://developer.gnome.org/pango/stable/pango-Fonts.html#pango-font-description-from-string.
	 *
	 * @param name The base font.
	 * @param merge Attributes that should be merged, e.g. "bold".
	 */
	export function get_merged_font(
		name: string | lgi.Pango.FontDescription,
		merge: string,
	): lgi.Pango.FontDescription;

	/**
	 * Function that initializes the theme settings. Should be run at the
	 * beginning of the awesome configuration file (normally rc.lua).
	 *
	 * @param config The theme to load. It can be either the path to the theme
	 * file (which should return a table) or directly a table containing all the
	 * theme values.
	 * @returns True if successful, `nil` in case of error.
	 */
	export function init(config: string | Partial<Theme>): true | undefined;

	/**
	 * The current theme path (if any)
	 */
	export const theme_path: string;

	export const gtk: BeautifulGtk;
	export const theme_assets: BeautifulThemeAssets;
	export const xresources: BeautifulXresources;
}
