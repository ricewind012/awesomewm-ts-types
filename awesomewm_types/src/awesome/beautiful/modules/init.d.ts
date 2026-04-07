/**
  * Key+value based theme library and associated utility modules.
  */
declare module 'init' {
  /**
    * Get a font description.
    *
    *  See https://developer.gnome.org/pango/stable/pango-Fonts.html#PangoFontDescription.
    * @param name The name of the font.
    * @returns lgi.Pango.FontDescription -
    */
  beautiful.get_font(
    name: string|lgi.Pango.FontDescription,
  ): lgi.Pango.FontDescription;
  /**
    * Get a new font with merged attributes, based on another one.
    *
    *  See https://developer.gnome.org/pango/stable/pango-Fonts.html#pango-font-description-from-string.
    * @param name The base font.
    * @param merge Attributes that should be merged, e.g. "bold".
    * @returns lgi.Pango.FontDescription -
    */
  beautiful.get_merged_font(
    name: string|Pango.FontDescription,
    merge: string,
  ): lgi.Pango.FontDescription;
  /**
    * Get the height of a font.
    * @param name Name of the font.
    * @returns number - The font height.
    */
  beautiful.get_font_height(
    name: string,
  ): number;
  /**
    * Function that initializes the theme settings.  Should be run at the
    *  beginning of the awesome configuration file (normally rc.lua).
    *
    *  Example usages:
    *
    *     -- Using a table
    *     beautiful.init({font = 'Monospace Bold 10'})
    *
    *     -- From a config file
    *     beautiful.init("<path>/theme.lua")
    *
    *  Example "<path>/theme.lua" (see `05-awesomerc.md:Variable_definitions`):
    *
    *     theme = {}
    *         theme.font = 'Monospace Bold 10'
    *     return theme
    *
    *  Example using the return value:
    *
    *     local beautiful = require("beautiful")
    *     if not beautiful.init("<path>/theme.lua") then
    *         beautiful.init("<path>/.last.theme.lua") -- a known good fallback
    *     end
    *
    * @param config The theme to load. It can be either the path to
    *    the theme file (which should return a table) or directly a table
    *    containing all the theme values.
    * @returns true|nil - True if successful, nil in case of error.
    */
  beautiful.init(
    config: string|table,
  ): (true | null);
  /**
    * Get the current theme.
    * @returns table - The current theme table.
    */
  beautiful.get(
  ): object;
  /**
    * The default font.
    * @param string
    */
  string(
    string,
  ): void;
  /**
    * The default background color.
    *
    *  The background color can be transparent. If there is a
    *  compositing manager such as compton, then it will be
    *  real transparency and may include blur (provided by the
    *  compositor). When there is no compositor, it will take
    *  a picture of the wallpaper and blend it.
    *
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The default focused element background color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The default urgent element background color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The default minimized element background color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The default focused element foreground (text) color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The default focused element foreground (text) color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The default urgent element foreground (text) color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The default minimized element foreground (text) color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The wallpaper path.
    * @param wallpaper
    */
  wallpaper(
    wallpaper: string|gears.surface,
  ): void;
  /**
    * The icon theme name.
    *  It has to be a directory in `/usr/share/icons` or an XDG icon folder.
    * @param string
    */
  string(
    string,
  ): void;
  /**
    * The Awesome icon path.
    * @param icon
    */
  icon(
    icon: string|gears.surface,
  ): void;
  /**
    * The current theme path (if any)
    * @param string
    */
  beautiful.theme_path(
    string,
  ): void;
}
