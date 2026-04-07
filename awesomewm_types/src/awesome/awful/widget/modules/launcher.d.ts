/**
  * A button widget which hosts a menu or starts a command.
  */
declare module 'launcher' {
  /**
    * **NOTE**: You need either command or menu argument for widget to create
    *  successfully
    * @param image The image to display on the launcher button (refer to `wibox.widget.imagebox`).
    * @param command Command to run on user click.
    * @param menu Table of items to create a menu based on `awful.menu`.
    * @returns awful.widget.launcher - A launcher widget.
    */
  new(
    image: image,
    command?: string,
    menu?: table,
  ): awful.widget.launcher;
}
