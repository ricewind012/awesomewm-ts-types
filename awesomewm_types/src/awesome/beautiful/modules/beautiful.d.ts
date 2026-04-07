/**
 * Library for getting xrdb data.
 * @noSelf
 */
declare module "beautiful" {
	/**
	 * TODO: @noSelf doesn't work here
	 */
	export const xresources: {
		/**
		 * Get current base colorscheme from xrdb.
		 * @returns table - Color table with keys 'background', 'foreground' and 'color0'..'color15'.
		 */
		get_current_theme(): object;

		/**
		 * Get global or per-screen DPI value falling back to xrdb.
		 *
		 *  This function is deprecated. Use `s.dpi` and avoid getting the DPI without
		 *  a screen.
		 *
		 * @param s The screen.
		 * @returns number - DPI value.
		 */
		get_dpi(s?: integer | screen): number;

		/**
		 * Set DPI for a given screen (defaults to global).
		 * @param dpi DPI value.
		 * @param s Screen.
		 */
		set_dpi(dpi: number, s?: integer): void;

		/**
		 * Compute resulting size applying current DPI value (optionally per screen).
		 * @param size Size
		 * @param s The screen.
		 * @returns integer - Resulting size (rounded to integer).
		 */
		apply_dpi(size: number, s?: integer | screen): integer;
	};
}
