/**
  * Library for getting xrdb data.
  */
declare module 'beautiful' {
  /**
    * Get current base colorscheme from xrdb.
    * @returns table - Color table with keys 'background', 'foreground' and 'color0'..'color15'.
    */
  xresources.get_current_theme(
  ): object;
  /**
    * Get global or per-screen DPI value falling back to xrdb.
    *
    *  This function is deprecated. Use `s.dpi` and avoid getting the DPI without
    *  a screen.
    *
    * @param s The screen.
    * @returns number - DPI value.
    */
  xresources.get_dpi(
    s?: integer|screen,
  ): number;
  /**
    * Set DPI for a given screen (defaults to global).
    * @param dpi DPI value.
    * @param s Screen.
    */
  xresources.set_dpi(
    dpi: number,
    s?: integer,
  ): void;
  /**
    * Compute resulting size applying current DPI value (optionally per screen).
    * @param size Size
    * @param s The screen.
    * @returns integer - Resulting size (rounded to integer).
    */
  xresources.apply_dpi(
    size: number,
    s?: integer|screen,
  ): integer;
}
