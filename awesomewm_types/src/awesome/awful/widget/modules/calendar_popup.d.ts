/**
  * A popup wibox containing a `wibox.widget.calendar` widget.
  */
declare module 'calendar_popup' {
  /**
    * Call the calendar with offset
    * @param offset Offset with respect to current month or year
    * @param position Two-character position of the calendar in the screen
    * @param screen Screen where to display the calendar
    * @returns wibox - The wibox calendar
    */
  call_calendar(
    offset: number,
    position: string,
    screen: screen,
  ): wibox;
  /**
    * Toggle calendar visibility.
    * @returns boolean - The new value of `visible`.
    */
  toggle(
  ): boolean;
  /**
    * Attach the calendar to a widget to display at a specific position.
    *
    *     local mytextclock = wibox.widget.textclock()
    *     local month_calendar = awful.widget.calendar_popup.month()
    *     month_calendar:attach(mytextclock, 'tr')
    *
    * @param widget Widget to attach the calendar
    * @param position Two characters string defining the position on the screen
    * @param on_hover Show popup during mouse hover
    * @returns wibox - The wibox calendar
    */
  attach(
    widget,
    position: string,
    on_hover: bool,
  ): wibox;
  /**
    * A month calendar wibox.
    *
    *  It is highly customizable using the same options as for the widgets.
    *  The options are set once and for all at creation, though.
    *
    * @param position Two-character position of the calendar in the screen
    * @param screen Screen where to display the calendar
    * @param opacity Wibox opacity
    * @param bg Wibox background color
    * @param font Calendar font
    * @param spacing Calendar spacing
    * @param margin Margin around calendar widget
    * @param week_numbers Show weeknumbers
    * @param start_sunday Start week on Sunday
    * @param long_weekdays Format the weekdays with three characters instead of two
    * @param style_month Container style for the month calendar (see `cell_properties`)
    * @param style_header Cell style for the month calendar header (see `cell_properties`)
    * @param style_weekday Cell style for the weekday cells (see `cell_properties`)
    * @param style_weeknumber Cell style for the weeknumber cells (see `cell_properties`)
    * @param style_normal Cell style for the normal day cells (see `cell_properties`)
    * @param style_focus Cell style for the current day cell (see `cell_properties`)
    * @returns wibox - A wibox containing the calendar
    */
  month(
    position: string,
    screen: screen,
    opacity: number,
    bg: string,
    font: string,
    spacing: number,
    margin: number,
    week_numbers: boolean,
    start_sunday: boolean,
    long_weekdays: boolean,
    style_month: table,
    style_header: table,
    style_weekday: table,
    style_weeknumber: table,
    style_normal: table,
    style_focus: table,
  ): wibox;
  /**
    * A year calendar wibox.
    *
    *  It is highly customizable using the same options as for the widgets.
    *  The options are set once and for all at creation, though.
    *
    * @param position Two-character position of the calendar in the screen
    * @param screen Screen where to display the calendar
    * @param opacity Wibox opacity
    * @param bg Wibox background color
    * @param font Calendar font
    * @param spacing Calendar spacing
    * @param margin Margin around calendar widget
    * @param week_numbers Show weeknumbers
    * @param start_sunday Start week on Sunday
    * @param long_weekdays Format the weekdays with three characters instead of two
    * @param style_year Container style for the year calendar (see `cell_properties`)
    * @param style_month Container style for the month calendar (see `cell_properties`).
    *  This field can also be called `style_monthheader`.
    * @param style_yearheader Cell style for the year calendar header (see `cell_properties`)
    * @param style_header Cell style for the month calendar header (see `cell_properties`)
    * @param style_weekday Cell style for the weekday cells (see `cell_properties`)
    * @param style_weeknumber Cell style for the weeknumber cells (see `cell_properties`)
    * @param style_normal Cell style for the normal day cells (see `cell_properties`)
    * @param style_focus Cell style for the current day cell (see `cell_properties`)
    * @returns wibox - A wibox containing the calendar
    */
  year(
    position: string,
    screen: screen,
    opacity: number,
    bg: string,
    font: string,
    spacing: number,
    margin: number,
    week_numbers: boolean,
    start_sunday: boolean,
    long_weekdays: boolean,
    style_year: table,
    style_month: table,
    style_yearheader: table,
    style_header: table,
    style_weekday: table,
    style_weeknumber: table,
    style_normal: table,
    style_focus: table,
  ): wibox;
  /**
    * Cell properties.
    * @param markup Markup function or format string
    * @param fg_color Text foreground color
    * @param bg_color Text background color
    * @param shape Cell shape
    * @param padding Cell padding
    * @param border_width Calendar border width
    * @param border_color Calendar border color
    * @param opacity Cell opacity
    */
  cell_properties(
    markup,
    fg_color,
    bg_color,
    shape,
    padding,
    border_width,
    border_color,
    opacity,
  ): void;
  /**
    * Cell types (flags).
    * @param year Year calendar grid properties table
    * @param month Month calendar grid properties table
    * @param yearheader Year header cell properties table
    * @param header Month header cell properties table (called `monthheader` for a year calendar)
    * @param weekday Weekday cell properties table
    * @param weeknumber Weeknumber cell properties table
    * @param normal Normal day cell properties table
    * @param focus Current day cell properties table
    */
  cell_flags(
    year,
    month,
    yearheader,
    header,
    weekday,
    weeknumber,
    normal,
    focus,
  ): void;
}
