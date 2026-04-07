/**
  * Taglist widget module for awful.
  */
declare module 'taglist' {
  /**
    * The current number of tags.
    *
    *  Note that the `taglist` is usually lazy-loaded. Reading this property
    *  may cause the widgets to be created. Depending on where the property is called
    *  from, it might, in theory, cause an infinite loop.
    *
    * @param count The number of tags.
    */
  set_base_layout(
    count: number,
  ): void;
  /**
    * Create a new taglist widget.  The last two arguments (update_function
    *  and layout) serve to customize the layout of the taglist (eg. to
    *  make it vertical). For that, you will need to copy the
    *  awful.widget.common.list_update function, make your changes to it
    *  and pass it as update_function here. Also change the layout if the
    *  default is not what you want.
    * @param screen The screen to draw taglist for.
    * @param filter Filter function to define what clients will be listed.
    * @param buttons A table with buttons binding to set.
    * @param update_function Function to create a tag widget on each
    *    update. See `awful.widget.common`.
    * @param layout Optional layout widget for tag widgets. Default
    *    is wibox.layout.fixed.horizontal().
    * @param source The
    *   function used to generate the list of tag.
    * @param widget_template A custom widget to be used for each tag
    * @param style The style overrides default theme.
    * @param style.fg_focus
    * @param style.bg_focus
    * @param style.fg_urgent
    * @param style.bg_urgent
    * @param style.bg_occupied
    * @param style.fg_occupied
    * @param style.bg_empty
    * @param style.fg_empty
    * @param style.bg_volatile
    * @param style.fg_volatile
    * @param style.squares_sel A user
    *   provided image for selected squares.
    * @param style.squares_unsel A
    *   user provided image for unselected squares.
    * @param style.squares_sel_empty A
    *  user provided image for selected squares for empty tags.
    * @param style.squares_unsel_empty A
    *   user provided image for unselected squares for empty tags.
    * @param style.squares_resize `true`
    *   or `false` to resize squares.
    * @param style.disable_icon
    * @param style.font The font.
    * @param style.spacing The spacing between tags.
    * @param style.squares_sel A user
    *   provided image for selected squares.
    * @param style.squares_unsel A
    *   user provided image for unselected squares.
    * @param style.squares_sel_empty A
    *  user provided image for selected squares for empty tags.
    * @param style.squares_unsel_empty A
    *   user provided image for unselected squares for empty tags.
    * @param style.squares_resize `true`
    *   or `false` to resize squares.
    * @param style.font The font.
    * @param style.shape
    * @param style.shape_border_width
    * @param style.shape_border_color
    * @param style.shape_empty
    * @param style.shape_border_width_empty
    * @param style.border_color_empty
    * @param style.shape_focus
    * @param style.shape_border_width_focus
    * @param style.shape_border_color_focus
    * @param style.shape_urgent
    * @param style.shape_border_width_urgent
    * @param style.shape_border_color_urgent
    * @param style.shape_volatile
    * @param style.shape_border_width_volatile
    * @param style.shape_border_color_volatile
    * @param filter **DEPRECATED** use args.filter
    * @param buttons **DEPRECATED** use args.buttons
    * @param style **DEPRECATED** use args.style
    * @param update_function **DEPRECATED** use args.update_function
    * @param base_widget **DEPRECATED** use args.base_layout
    */
  new(
    screen: screen,
    filter: function[opt=nil],
    buttons: table,
    update_function?: function,
    layout?: widget,
    source: function,
    widget_template?: table,
    style: table,
    style.fg_focus: string|pattern,
    style.bg_focus: string|pattern,
    style.fg_urgent: string|pattern,
    style.bg_urgent: string|pattern,
    style.bg_occupied: string|pattern,
    style.fg_occupied: string|pattern,
    style.bg_empty: string|pattern,
    style.fg_empty: string|pattern,
    style.bg_volatile: string|pattern,
    style.fg_volatile: string|pattern,
    style.squares_sel: string,
    style.squares_unsel: string,
    style.squares_sel_empty: string,
    style.squares_unsel_empty: string,
    style.squares_resize: boolean,
    style.disable_icon: string,
    style.font: string,
    style.spacing: number,
    style.squares_sel: string,
    style.squares_unsel: string,
    style.squares_sel_empty: string,
    style.squares_unsel_empty: string,
    style.squares_resize: boolean,
    style.font: string,
    style.shape: gears.shape|function,
    style.shape_border_width: number,
    style.shape_border_color: string,
    style.shape_empty: gears.shape|function,
    style.shape_border_width_empty: number,
    style.border_color_empty: string,
    style.shape_focus: gears.shape|function,
    style.shape_border_width_focus: number,
    style.shape_border_color_focus: string,
    style.shape_urgent: gears.shape|function,
    style.shape_border_width_urgent: number,
    style.shape_border_color_urgent: string,
    style.shape_volatile: gears.shape|function,
    style.shape_border_width_volatile: number,
    style.shape_border_color_volatile: string,
    filter,
    buttons,
    style,
    update_function,
    base_widget,
  ): void;
  /**
    * Filtering function to include all nonempty tags on the screen.
    * @param t The tag.
    * @returns true if t is not empty, else false
    */
  taglist.filter.noempty(
    t,
  ): ;
  /**
    * Filtering function to include selected tags on the screen.
    * @param t The tag.
    * @returns true if t is not empty, else false
    */
  taglist.filter.selected(
    t,
  ): ;
  /**
    * Filtering function to include all tags on the screen.
    * @returns true
    */
  taglist.filter.all(
  ): ;
  /**
    * All tags for the defined screen ordered by indices.
    *
    *  This is the default source.
    *
    * @param s
    * @see screen
    */
  taglist.source.for_screen(
    s,
  ): void;
  /**
    * The tag list main background color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The tag list urgent elements foreground (text) color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The tag list urgent elements background color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The tag list occupied elements background color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The tag list occupied elements foreground (text) color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The tag list empty elements background color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The tag list empty elements foreground (text) color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The tag list volatile elements background color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The tag list volatile elements foreground (text) color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The selected elements background image.
    * @param surface
    */
  surface(
    surface,
  ): void;
  /**
    * The unselected elements background image.
    * @param surface
    */
  surface(
    surface,
  ): void;
  /**
    * The selected empty elements background image.
    * @param surface
    */
  surface(
    surface,
  ): void;
  /**
    * The unselected empty elements background image.
    * @param surface
    */
  surface(
    surface,
  ): void;
  /**
    * If the background images can be resized.
    * @param boolean
    */
  boolean(
    boolean,
  ): void;
  /**
    * Do not display the tag icons, even if they are set.
    * @param boolean
    */
  boolean(
    boolean,
  ): void;
  /**
    * The taglist font.
    * @param string
    */
  string(
    string,
  ): void;
  /**
    * The space between the taglist elements.
    * @param spacing The spacing between tags.
    */
  spacing(
    spacing: number,
  ): void;
  /**
    * The main shape used for the elements.
    *  This will be the fallback for state specific shapes.
    *  To get a shape for the whole taglist, use `wibox.container.background`.
    * @param shape
    */
  shape(
    shape: gears.shape,
  ): void;
  /**
    * The shape elements border width.
    * @param number
    */
  number(
    number,
  ): void;
  /**
    * The elements shape border color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The shape used for the empty elements.
    * @param shape
    */
  shape(
    shape: gears.shape,
  ): void;
  /**
    * The shape used for the empty elements border width.
    * @param number
    */
  number(
    number,
  ): void;
  /**
    * The empty elements shape border color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The shape used for the selected elements.
    * @param shape
    */
  shape(
    shape: gears.shape,
  ): void;
  /**
    * The shape used for the selected elements border width.
    * @param number
    */
  number(
    number,
  ): void;
  /**
    * The selected elements shape border color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The shape used for the urgent elements.
    * @param shape
    */
  shape(
    shape: gears.shape,
  ): void;
  /**
    * The shape used for the urgent elements border width.
    * @param number
    */
  number(
    number,
  ): void;
  /**
    * The urgents elements shape border color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * The shape used for the volatile elements.
    * @param shape
    */
  shape(
    shape: gears.shape,
  ): void;
  /**
    * The shape used for the volatile elements border width.
    * @param number
    */
  number(
    number,
  ): void;
  /**
    * The taglist screen.
    * @param screen
    */
  screen(
    screen: screen,
  ): void;
  /**
    * Set the taglist layout.
    * @param base_layout
    */
  base_layout(
    base_layout: wibox.layout,
  ): void;
  /**
    * An alternative function to configure the content.
    *
    *  You should use `widget_template` if it fits your use case first. This
    *  API is very low level.
    *
    * @param update_function
    */
  update_function(
    update_function: function,
  ): void;
  /**
    * A function to restrict the content of the taglist.
    * @param filter
    * @see source
    */
  filter(
    filter: function|nil,
  ): void;
  /**
    * The function used to gather the group of tags.
    * @param source
    * @see filter
    */
  source(
    source: function,
  ): void;
  /**
    * A template used to generate the individual tag widgets.
    * @param widget_template
    */
  widget_template(
    widget_template: template|nil,
  ): void;
}
