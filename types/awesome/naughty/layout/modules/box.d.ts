/**
  * A notification popup widget.
  */
declare module 'box' {
  /**
    * The maximum notification position.
    *
    *  Valid values are:
    *
    *  * top_left
    *  * top_middle
    *  * top_right
    *  * bottom_left
    *  * bottom_middle
    *  * bottom_right
    *
    * @param notification_position
    */
  notification_position(
    notification_position: string,
  ): void;
  /**
    * The widget notification object.
    * @param notification
    */
  notification(
    notification: naughty.notification,
  ): void;
}
