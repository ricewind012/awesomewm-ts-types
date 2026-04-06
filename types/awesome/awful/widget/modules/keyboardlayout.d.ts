/**
  * Display the current keyboard layout name in a widget.
  */
declare module 'keyboardlayout' {
  /**
    * Auxiliary function for the local function update_layout().
    *  Create an array whose element is a table consisting of the four fields:
    *  vendor, file, section and group_idx, which all correspond to the
    *  xkb_symbols pattern "vendor/file(section):group_idx".
    * @param group_names The string `awesome.xkb_get_group_names()` returns.
    * @returns table - An array of tables whose keys are vendor, file, section, and group_idx.
    */
  get_groups_from_group_names(
    group_names: string,
  ): object;
  /**
    * Create a keyboard layout widget.
    *
    *  It shows current keyboard layout name in a textbox.
    *
    * @param country_codes Array of names of custom keyboard layouts.
    * @returns awful.widget.keyboardlayout - A keyboard layout widget.
    */
  new(
    country_codes?: table,
  ): awful.widget.keyboardlayout;
}
