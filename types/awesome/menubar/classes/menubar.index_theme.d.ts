/**
  * (Deprecated) class module for parsing an index.theme file
  */
declare module 'menubar.index_theme' {
  /**
    * Class constructor of `index_theme`
    * @param cls Metatable that will be used. Should always be `index_theme.mt`.
    * @param icon_theme_name Internal name of icon theme
    * @param base_directories Paths used for lookup
    * @returns table - An instance of the class `index_theme`
    */
  menubar.index_theme:new(
    cls: table,
    icon_theme_name: string,
    base_directories: table,
  ): object;
  /**
    * Table of the values of the `Directories` key
    * @param self
    * @returns table - Values of the `Directories` key
    */
  menubar.index_theme:get_subdirectories(
    self,
  ): object;
  /**
    * Table of the values of the `Inherits` key
    * @param self
    * @returns table - Values of the `Inherits` key
    */
  menubar.index_theme:get_inherits(
    self,
  ): object;
  /**
    * Query (part of) per-directory keys of a given subdirectory name.
    * @param subdirectory Icon theme's subdirectory
    * @returns string - Value of the `Type` key
    *          number - Value of the `Size` key
    *          number - VAlue of the `MinSize` key
    *          number - Value of the `MaxSize` key
    *          number - Value of the `Threshold` key
    */
  menubar.index_theme:get_per_directory_keys(
    subdirectory: table,
  ): LuaMultiReturn<[string, number, number, number, number]>;
}
