/**
  * A notification square icon widget.
  */
declare module 'icon' {
  /**
    * The attached notification.
    * @param notification
    */
  set_notification(
    notification: naughty.notification,
  ): void;
  /**
    * The default notification icon size.
    * @param notification_icon_size The size (in pixels).
    */
  set_resize_strategy(
    notification_icon_size: number,
  ): void;
  /**
    * How small icons are handled.
    *
    *  Note that the size upper bound is defined by
    *  `beautiful.notification_icon_size`.
    *
    * @param resize_strategy
    */
  resize_strategy(
    resize_strategy: string,
  ): void;
}
