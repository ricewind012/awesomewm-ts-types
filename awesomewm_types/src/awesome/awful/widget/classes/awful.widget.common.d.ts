/**
  * This module contains helper functions to manage a layout widgets.
  */
declare module 'awful.widget.common' {
  /**
    * Common method to create buttons.
    * @param buttons
    * @param object
    * @returns table -
    */
  awful.widget.common:create_buttons(
    buttons: table,
    object,
  ): object;
  /**
    * Common update method.
    * @param w The widget.
    * @param buttons
    * @param label Function to generate label parameters from an object.
    *    The function gets passed an object from `objects`, and
    *    has to return `text`, `bg`, `bg_image`, `icon`.
    * @param data Current data/cache, indexed by objects.
    * @param objects Objects to be displayed / updated.
    * @param args
    */
  awful.widget.common:list_update(
    w,
    buttons: table,
    label: function,
    data: table,
    objects: table,
    args: table,
  ): void;
}
