/**
  * A container that makes a widget display only on a specified screen.
  */
declare module 'only_on_screen' {
  /**
    * The screen to display on.
    *  Can be a screen object, a screen index, a screen
    *  name ("VGA1") or the string "primary" for the primary screen.
    * @param screen
    */
  set_screen(
    screen: screen,
  ): void;
}
