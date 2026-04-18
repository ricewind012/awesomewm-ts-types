/**
 * Menubar module, which aims to provide a freedesktop menu alternative.
 * @noResolution
 * @noSelf
 */
declare module "menubar" {
	import type { MenubarMenuGen } from "~/awesome/menubar/menu_gen";
	import type { MenubarUtils } from "~/awesome/menubar/utils";
	import type { AwesomeScreen } from "~/awesome/screen";
	import type { Rectangle } from "~/awesome/shared";

	/**
	 * Refresh menubar's cache by reloading .desktop files.
	 * @param scr Screen.
	 */
	export function refresh(scr: AwesomeScreen): void;

	/**
	 * Show the menubar on the given screen.
	 * @param scr Screen.
	 */
	export function show(scr?: AwesomeScreen): void;

	/**
	 * Hide the export function
	 */
	export function hide(): void;

	/**
	 * Get a menubar wibox.
	 * @param scr Screen.
	 * @returns menubar wibox.
	 */
	export function get(scr?: AwesomeScreen): table;

	/**
	 * Specifies the geometry of the export function. Missing values are
	 * replaced via the screen's geometry. However, missing height is replaced
	 * by the font size.
	 */
	export const geometry: Rectangle;

	/**
	 * Allows user to specify custom parameters for `prompt.run` function (like
	 * colors). This will merge with the default parameters, overriding affected
	 * values.
	 */
	export const prompt_args: table;

	/**
	 * When true the .desktop files will be reparsed only when the extension is
	 * initialized. Use this if menubar takes much time to open.
	 */
	export const cache_entries: boolean;

	/**
	 * When true the categories will be shown alongside application entries.
	 */
	export const show_categories: boolean;

	/**
	 * When false will hide results if the current query is empty
	 */
	export const match_empty: boolean;

	/**
	 * Width of blank space left in the right side.
	 */
	export const right_margin: number;

	/**
	 * Label used for "Next page", default "▶▶".
	 */
	export const right_label: string;

	/**
	 * Label used for "Previous page", default "◀◀".
	 */
	export const left_label: string;

	export const menu_gen: MenubarMenuGen;
	export const utils: MenubarUtils;
}
