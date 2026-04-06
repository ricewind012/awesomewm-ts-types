/**
  * Menubar module, which aims to provide a freedesktop menu alternative.
  */
declare module 'init' {
  /**
    * Refresh menubar's cache by reloading .desktop files.
    * @param scr Screen.
    */
  menubar.refresh(
    scr: screen,
  ): void;
  /**
    * Show the menubar on the given screen.
    * @param scr Screen.
    */
  menubar.show(
    scr: screen,
  ): void;
  /**
    * Hide the menubar.
    */
  menubar.hide(
  ): void;
  /**
    * Get a menubar wibox.
    * @param scr Screen.
    * @returns menubar wibox.
    */
  menubar.get(
    scr?: screen,
  ): ;
  /**
    * Specifies the geometry of the menubar.  This is a table with the keys
    *  x, y, width and height. Missing values are replaced via the screen's
    *  geometry. However, missing height is replaced by the font size.
    */
  geometry(
  ): void;
  /**
    * Allows user to specify custom parameters for prompt.run function
    *  (like colors).  This will merge with the default parameters, overriding affected values.
    */
  menubar.prompt_args(
  ): void;
  /**
    * Menubar normal background color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * Menubar border width.
    * @param menubar_border_width
    */
  menubar_border_width(
    menubar_border_width: number,
  ): void;
  /**
    * Menubar border color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * Menubar selected item text color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * Menubar selected item background color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * Menubar font.
    * @param font
    */
  font(
    font,
  ): void;
  /**
    * When true the .desktop files will be reparsed only when the
    *  extension is initialized.  Use this if menubar takes much time to
    *  open.
    * @param cache_entries
    */
  menubar.cache_entries(
    cache_entries: boolean,
  ): void;
  /**
    * When true the categories will be shown alongside application
    *  entries.
    * @param show_categories
    */
  menubar.show_categories(
    show_categories: boolean,
  ): void;
  /**
    * When false will hide results if the current query is empty
    * @param match_empty
    */
  menubar.match_empty(
    match_empty: boolean,
  ): void;
  /**
    * Width of blank space left in the right side.
    * @param right_margin
    */
  menubar.right_margin(
    right_margin: number,
  ): void;
  /**
    * Label used for "Next page", default "▶▶".
    * @param right_label
    */
  menubar.right_label(
    right_label: string,
  ): void;
  /**
    * Label used for "Previous page", default "◀◀".
    * @param left_label
    */
  menubar.left_label(
    left_label: string,
  ): void;
}
