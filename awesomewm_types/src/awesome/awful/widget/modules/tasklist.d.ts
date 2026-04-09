/**
  * Tasklist widget module for awful.
  */
declare module 'tasklist' {
  /**
    * A function to gather the clients to display.
    * @param source
    */
  set_base_layout(
    source: function,
  ): void;
  /**
    * Create a new tasklist widget.
    *  The last two arguments (update_function
    *  and layout) serve to customize the layout of the tasklist (eg. to
    *  make it vertical). For that, you will need to copy the
    *  awful.widget.common.list_update function, make your changes to it
    *  and pass it as update_function here. Also change the layout if the
    *  default is not what you want.
    *
    * @param screen The screen to draw tasklist for.
    * @param filter Filter function to define what clients will be listed.
    * @param buttons A table with buttons binding to set.
    * @param update_function Function to create a tag widget on each
    *    update. See `awful.widget.common.list_update`.
    * @param layout Container widget for tag widgets. Default
    *    is `wibox.layout.flex.horizontal`.
    * @param source The
    *   function used to generate the list of client.
    * @param widget_template A custom widget to be used for each client
    * @param style The style overrides default theme.
    * @param style.fg_normal
    * @param style.bg_normal
    * @param style.fg_focus
    * @param style.bg_focus
    * @param style.fg_urgent
    * @param style.bg_urgent
    * @param style.fg_minimize
    * @param style.bg_minimize
    * @param style.bg_image_normal
    * @param style.bg_image_focus
    * @param style.bg_image_urgent
    * @param style.bg_image_minimize
    * @param style.disable_icon
    * @param style.icon_size The size of the icon
    * @param style.sticky Extra icon when client is sticky
    * @param style.ontop Extra icon when client is ontop
    * @param style.above Extra icon when client is above
    * @param style.below Extra icon when client is below
    * @param style.floating Extra icon when client is floating
    * @param style.maximized Extra
    *    icon when client is maximized
    * @param style.maximized_horizontal Extra
    *    icon when client is maximized_horizontal
    * @param style.maximized_vertical Extra
    *    icon when client is maximized_vertical
    * @param style.disable_task_name
    * @param style.font
    * @param style.align *left*, *right* or *center*
    * @param style.font_focus
    * @param style.font_minimized
    * @param style.font_urgent
    * @param style.spacing The spacing between tags.
    * @param style.shape
    * @param style.shape_border_width
    * @param style.shape_border_color
    * @param style.shape_focus
    * @param style.shape_border_width_focus
    * @param style.shape_border_color_focus
    * @param style.shape_minimized
    * @param style.shape_border_width_minimized
    * @param style.shape_border_color_minimized
    * @param style.shape_urgent
    * @param style.shape_border_width_urgent
    * @param style.shape_border_color_urgent
    * @param style.minimized
    * @param filter **DEPRECATED** use args.filter
    * @param buttons **DEPRECATED** use args.buttons
    * @param style **DEPRECATED** use args.style
    * @param update_function **DEPRECATED** use args.update_function
    * @param base_widget **DEPRECATED** use args.base_layout
    */
  new(
    screen: screen,
    filter: function,
    buttons: table,
    update_function?: function,
    layout?: table,
    source: function,
    widget_template?: table,
    style: table,
    style.fg_normal: string|pattern,
    style.bg_normal: string|pattern,
    style.fg_focus: string|pattern,
    style.bg_focus: string|pattern,
    style.fg_urgent: string|pattern,
    style.bg_urgent: string|pattern,
    style.fg_minimize: string|pattern,
    style.bg_minimize: string|pattern,
    style.bg_image_normal: string,
    style.bg_image_focus: string,
    style.bg_image_urgent: string,
    style.bg_image_minimize: string,
    style.disable_icon: boolean,
    style.icon_size: number,
    style.sticky: string,
    style.ontop: string,
    style.above: string,
    style.below: string,
    style.floating: string,
    style.maximized: string,
    style.maximized_horizontal: string,
    style.maximized_vertical: string,
    style.disable_task_name: boolean,
    style.font: string,
    style.align: string,
    style.font_focus: string,
    style.font_minimized: string,
    style.font_urgent: string,
    style.spacing: number,
    style.shape: gears.shape,
    style.shape_border_width: number,
    style.shape_border_color: string|color,
    style.shape_focus: gears.shape,
    style.shape_border_width_focus: number,
    style.shape_border_color_focus: string|color,
    style.shape_minimized: gears.shape,
    style.shape_border_width_minimized: number,
    style.shape_border_color_minimized: string|color,
    style.shape_urgent: gears.shape,
    style.shape_border_width_urgent: number,
    style.shape_border_color_urgent: string|color,
    style.minimized: string|color,
    filter,
    buttons,
    style,
    update_function,
    base_widget,
  ): void;
  /**
    * Filtering function to include all clients.
    * @returns true
    */
  tasklist.filter.allscreen(
  ): ;
  /**
    * Filtering function to include the clients from all tags on the screen.
    * @param c The client.
    * @param screen The screen we are drawing on.
    * @returns true if c is on screen, false otherwise
    */
  tasklist.filter.alltags(
    c:AwesomeClient,
    screen: screen,
  ): ;
  /**
    * Filtering function to include only the clients from currently selected tags.
    *
    *  This is the filter used in the default `rc.lua`.
    *
    * @param c The client.
    * @param screen The screen we are drawing on.
    * @returns true if c is in a selected tag on screen, false otherwise
    */
  tasklist.filter.currenttags(
    c:AwesomeClient,
    screen: screen,
  ): ;
  /**
    * Filtering function to include only the minimized clients from currently selected tags.
    * @param c The client.
    * @param screen The screen we are drawing on.
    * @returns true if c is in a selected tag on screen and is minimized, false otherwise
    */
  tasklist.filter.minimizedcurrenttags(
    c:AwesomeClient,
    screen: screen,
  ): ;
  /**
    * Filtering function to include only the currently focused client.
    * @param c The client.
    * @param screen The screen we are drawing on.
    * @returns true if c is focused on screen, false otherwise
    */
  tasklist.filter.focused(
    c:AwesomeClient,
    screen: screen,
  ): ;
  /**
    * Get all the clients in an undefined order.
    *
    *  This is the default source.
    *
    */
  tasklist.source.all_clients(
  ): void;
  /**
    * The default background color.
    * @param bg_normal
    */
  bg_normal(
    bg_normal: string|pattern,
  ): void;
  /**
    * The focused client foreground (text) color.
    * @param fg_focus
    */
  fg_focus(
    fg_focus: string|pattern,
  ): void;
  /**
    * The focused client background color.
    * @param bg_focus
    */
  bg_focus(
    bg_focus: string|pattern,
  ): void;
  /**
    * The urgent clients foreground (text) color.
    * @param fg_urgent
    */
  fg_urgent(
    fg_urgent: string|pattern,
  ): void;
  /**
    * The urgent clients background color.
    * @param bg_urgent
    */
  bg_urgent(
    bg_urgent: string|pattern,
  ): void;
  /**
    * The minimized clients foreground (text) color.
    * @param fg_minimize
    */
  fg_minimize(
    fg_minimize: string|pattern,
  ): void;
  /**
    * The minimized clients background color.
    * @param bg_minimize
    */
  bg_minimize(
    bg_minimize: string|pattern,
  ): void;
  /**
    * The elements default background image.
    * @param bg_image_normal
    */
  bg_image_normal(
    bg_image_normal: string,
  ): void;
  /**
    * The focused client background image.
    * @param bg_image_focus
    */
  bg_image_focus(
    bg_image_focus: string,
  ): void;
  /**
    * The urgent clients background image.
    * @param bg_image_urgent
    */
  bg_image_urgent(
    bg_image_urgent: string,
  ): void;
  /**
    * The minimized clients background image.
    * @param bg_image_minimize
    */
  bg_image_minimize(
    bg_image_minimize: string,
  ): void;
  /**
    * Disable the tasklist client icons.
    * @param tasklist_disable_icon
    */
  tasklist_disable_icon(
    tasklist_disable_icon: boolean,
  ): void;
  /**
    * Disable the tasklist client titles.
    * @param tasklist_disable_task_name
    */
  tasklist_disable_task_name(
    tasklist_disable_task_name: boolean,
  ): void;
  /**
    * Disable the extra tasklist client property notification icons.
    *
    *  See the <a href="#status_icons">Status icons</a> section for more details.
    *
    * @param tasklist_plain_task_name
    */
  tasklist_plain_task_name(
    tasklist_plain_task_name: boolean,
  ): void;
  /**
    * Extra tasklist client property notification icon for clients with the sticky property set.
    * @param tasklist_sticky
    */
  tasklist_sticky(
    tasklist_sticky: string,
  ): void;
  /**
    * Extra tasklist client property notification icon for clients with the ontop property set.
    * @param tasklist_ontop
    */
  tasklist_ontop(
    tasklist_ontop: string,
  ): void;
  /**
    * Extra tasklist client property notification icon for clients with the above property set.
    * @param tasklist_above
    */
  tasklist_above(
    tasklist_above: string,
  ): void;
  /**
    * Extra tasklist client property notification icon for clients with the below property set.
    * @param tasklist_below
    */
  tasklist_below(
    tasklist_below: string,
  ): void;
  /**
    * Extra tasklist client property notification icon for clients with the floating property set.
    * @param tasklist_floating
    */
  tasklist_floating(
    tasklist_floating: string,
  ): void;
  /**
    * Extra tasklist client property notification icon for clients with the maximized property set.
    * @param tasklist_maximized
    */
  tasklist_maximized(
    tasklist_maximized: string,
  ): void;
  /**
    * Extra tasklist client property notification icon for clients with the maximized_horizontal property set.
    * @param maximized_horizontal
    */
  maximized_horizontal(
    maximized_horizontal: string,
  ): void;
  /**
    * Extra tasklist client property notification icon for clients with the maximized_vertical property set.
    * @param maximized_vertical
    */
  maximized_vertical(
    maximized_vertical: string,
  ): void;
  /**
    * Extra tasklist client property notification icon for clients with the minimized property set.
    * @param minimized
    */
  minimized(
    minimized: string,
  ): void;
  /**
    * The focused client alignment.
    * @param align *left*, *right* or *center*
    */
  align(
    align: string,
  ): void;
  /**
    * The tasklist font.
    * @param font
    */
  font(
    font: string,
  ): void;
  /**
    * The focused client title alignment.
    * @param font_focus
    */
  font_focus(
    font_focus: string,
  ): void;
  /**
    * The minimized clients font.
    * @param font_minimized
    */
  font_minimized(
    font_minimized: string,
  ): void;
  /**
    * The urgent clients font.
    * @param font_urgent
    */
  font_urgent(
    font_urgent: string,
  ): void;
  /**
    * The space between the tasklist elements.
    * @param spacing The spacing between tasks.
    */
  spacing(
    spacing: number,
  ): void;
  /**
    * The default tasklist elements shape.
    * @param shape
    */
  shape(
    shape: gears.shape,
  ): void;
  /**
    * The default tasklist elements border width.
    * @param shape_border_width
    */
  shape_border_width(
    shape_border_width: number,
  ): void;
  /**
    * The default tasklist elements border color.
    * @param shape_border_color
    */
  shape_border_color(
    shape_border_color: string|color,
  ): void;
  /**
    * The focused client shape.
    * @param shape_focus
    */
  shape_focus(
    shape_focus: gears.shape,
  ): void;
  /**
    * The focused client border width.
    * @param shape_border_width_focus
    */
  shape_border_width_focus(
    shape_border_width_focus: number,
  ): void;
  /**
    * The focused client border color.
    * @param shape_border_color_focus
    */
  shape_border_color_focus(
    shape_border_color_focus: string|color,
  ): void;
  /**
    * The minimized clients shape.
    * @param shape_minimized
    */
  shape_minimized(
    shape_minimized: gears.shape,
  ): void;
  /**
    * The minimized clients border width.
    * @param shape_border_width_minimized
    */
  shape_border_width_minimized(
    shape_border_width_minimized: number,
  ): void;
  /**
    * The minimized clients border color.
    * @param shape_border_color_minimized
    */
  shape_border_color_minimized(
    shape_border_color_minimized: string|color,
  ): void;
  /**
    * The urgent clients shape.
    * @param shape_urgent
    */
  shape_urgent(
    shape_urgent: gears.shape,
  ): void;
  /**
    * The urgent clients border width.
    * @param shape_border_width_urgent
    */
  shape_border_width_urgent(
    shape_border_width_urgent: number,
  ): void;
  /**
    * The urgent clients border color.
    * @param shape_border_color_urgent
    */
  shape_border_color_urgent(
    shape_border_color_urgent: string|color,
  ): void;
  /**
    * The icon size.
    * @param tasklist_icon_size
    */
  tasklist_icon_size(
    tasklist_icon_size: integer,
  ): void;
  /**
    * The current number of clients.
    *
    *  Note that the `tasklist` is usually lazy-loaded. Reading this property
    *  may cause the widgets to be created. Depending on where the property is called
    *  from, it might, in theory, cause an infinite loop.
    *
    * @param count
    */
  count(
    count: number,
  ): void;
  /**
    * Set the tasklist layout.
    *
    *  This can be used to change the layout based on the number of clients:
    *
    * @param base_layout
    */
  base_layout(
    base_layout: wibox.layout,
  ): void;
  /**
    * The tasklist screen.
    * @param screen
    */
  screen(
    screen: screen,
  ): void;
  /**
    * A function to narrow down the list of clients.
    * @param filter
    */
  filter(
    filter: function,
  ): void;
  /**
    * A function called when the tasklist is refreshed.
    *
    *  This is a very low level API, prefer `widget_template` whenever
    *  you can.
    *
    * @param update_function
    */
  update_function(
    update_function: function|nil,
  ): void;
  /**
    * A template for creating the client widgets.
    * @param widget_template
    */
  widget_template(
    widget_template: template|nil,
  ): void;
}
