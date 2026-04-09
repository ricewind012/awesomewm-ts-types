/// <reference types="../screen.d.ts" />

/**
 * Library for getting xrdb data.
 * @noSelf
 */
interface BeautifulXresources {
	/**
	 * Get current base colorscheme from xrdb.
	 * @returns Color table.
	 */
	get_current_theme(): {
		background: string;
		foreground: string;
		color0: string;
		color1: string;
		color2: string;
		color3: string;
		color4: string;
		color5: string;
		color6: string;
		color7: string;
		color8: string;
		color9: string;
		color10: string;
		color11: string;
		color12: string;
		color13: string;
		color14: string;
		color15: string;
	};

	/**
	 * Get global or per-screen DPI value falling back to xrdb.
	 *
	 * @param s The screen.
	 * @returns number - DPI value.
	 *
	 * @deprecated Use `s.dpi` and avoid getting the DPI without a screen.
	 */
	get_dpi(s?: number | AwesomeScreen): number;

	/**
	 * Set DPI for a given screen (defaults to global).
	 *
	 * @param dpi DPI value.
	 * @param s Screen.
	 */
	set_dpi(dpi: number, s?: number): void;

	/**
	 * Compute resulting size applying current DPI value (optionally per
	 * screen).
	 *
	 * @param size Size
	 * @param s The screen.
	 * @returns Resulting size (rounded to integer).
	 */
	apply_dpi(size: number, s?: number | AwesomeScreen): number;
}
