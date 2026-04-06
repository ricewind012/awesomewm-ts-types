/**
  * Tiled layouts module for awful
  */
declare module 'awful.layout' {
  /**
    * The main tile algo, on the right.
    * @param screen The screen number to tile.
    */
  tile.right(
    screen,
  ): void;
  /**
    * The main tile algo, on the left.
    * @param screen The screen number to tile.
    */
  tile.left(
    screen,
  ): void;
  /**
    * The main tile algo, on the bottom.
    * @param screen The screen number to tile.
    */
  tile.bottom(
    screen,
  ): void;
  /**
    * The main tile algo, on the top.
    * @param screen The screen number to tile.
    */
  tile.top(
    screen,
  ): void;
  /**
    * The tile layout layoutbox icon.
    * @param surface
    */
  surface(
    surface,
  ): void;
  /**
    * The tile top layout layoutbox icon.
    * @param surface
    */
  surface(
    surface,
  ): void;
  /**
    * The tile bottom layout layoutbox icon.
    * @param surface
    */
  surface(
    surface,
  ): void;
  /**
    * The tile left layout layoutbox icon.
    * @param surface
    */
  surface(
    surface,
  ): void;
  /**
    * Jump mouse cursor to the client's corner when resizing it.
    */
  tile.resize_jump_to_corner(
  ): void;
}
