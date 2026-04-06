/**
  * (Deprecated) class module for icon lookup for menubar
  */
declare module 'menubar.icon_theme' {
  /**
    * Class constructor of `icon_theme`
    * @param icon_theme_name Internal name of icon theme
    * @param base_directories Paths used for lookup
    * @returns table - An instance of the class `icon_theme`
    */
  menubar.icon_theme:new(
    icon_theme_name: string,
    base_directories: table,
  ): object;
  /**
    * Look up an image file based on a given icon name and/or a preferable size.
    * @param icon_name Icon name to be looked up
    * @param icon_size Prefereable icon size
    * @returns string - Absolute path to the icon file, or nil if not found
    */
  menubar.icon_theme:find_icon_path(
    icon_name: string,
    icon_size: number,
  ): string;
}
