/**
  * Popup widget which shows current hotkeys and their descriptions.
  */
declare module 'widget' {
  /**
    * Create an instance of widget with hotkeys help.
    * @param hide_without_description Don't show hotkeys without descriptions.
    * @param merge_duplicates Merge hotkey records into one if
    *  they have the same modifiers and description. Records with five keys or more
    *  will abbreviate them.
    * @param width Widget width.
    * @param height Widget height.
    * @param bg Widget background color.
    * @param fg Widget foreground color.
    * @param border_width Border width.
    * @param border_color Border color.
    * @param shape Widget shape.
    * @param font Main widget font.
    * @param description_font Font used for hotkeys' descriptions.
    * @param modifiers_fg Foreground color used for hotkey
    *  modifiers (Ctrl, Alt, Super, etc).
    * @param label_bg Background color used for miscellaneous labels.
    * @param label_fg Foreground color used for group and other
    *  labels.
    * @param override_label_bgs Override label background colors instead
    *  of cycling through xresources colors.
    * @param group_margin Margin between hotkeys groups.
    * @param labels Labels used for displaying human-readable keynames.
    * @param group_rules Rules for showing 3rd-party hotkeys. @see `awful.hotkeys_popup.keys.vim`.
    * @returns Widget instance.
    */
  new(
    hide_without_description?: boolean,
    merge_duplicates?: boolean,
    width?: int,
    height?: int,
    bg?: color,
    fg?: color,
    border_width?: int,
    border_color?: color,
    shape?: gears.shape,
    font?: string|lgi.Pango.FontDescription,
    description_font?: string|lgi.Pango.FontDescription,
    modifiers_fg?: color,
    label_bg?: color,
    label_fg?: color,
    override_label_bgs?: boolean,
    group_margin?: int,
    labels?: table,
    group_rules?: table,
  ): ;
  /**
    * Show popup with hotkeys help.
    * @param c Client.
    * @param s Screen.
    * @param show_awesome_keys Show AwesomeWM hotkeys.
    *  When set to `false` only app-specific hotkeys will be shown.
    * @returns awful.keygrabber - The keybrabber used to detect when the key is
  released.
    */
  widget_instance:show_help(
    c: client,
    s: screen,
    show_awesome_keys: boolean,
  ): awful.keygrabber;
  /**
    * Add hotkey descriptions for third-party applications.
    * @param hotkeys Table with bindings,
    *  see `awful.hotkeys_popup.key.vim` as an example.
    */
  widget_instance:add_hotkeys(
    hotkeys: table,
  ): void;
  /**
    * Add hotkey group rules for third-party applications.
    * @param group Hotkeys group name,
    * @param data Rule data for the group
    *  see `awful.hotkeys_popup.key.vim` as an example.
    */
  widget_instance:add_group_rules(
    group: string,
    data: table,
  ): void;
  /**
    * Show popup with hotkeys help (default widget instance will be used).
    * @param c Client.
    * @param s Screen.
    * @param show_awesome_keys Show AwesomeWM hotkeys.
    *  When set to `false` only app-specific hotkeys will be shown.
    * @returns awful.keygrabber - The keybrabber used to detect when the key is
  released.
    */
  show_help(
    c?: client,
    s?: screen,
    show_awesome_keys: boolean,
  ): awful.keygrabber;
  /**
    * Add hotkey descriptions for third-party applications
    *  (default widget instance will be used).
    * @param hotkeys Table with bindings,
    *  see `awful.hotkeys_popup.key.vim` as an example.
    */
  add_hotkeys(
    hotkeys: table,
  ): void;
  /**
    * Add hotkey group rules for third-party applications
    *  (default widget instance will be used).
    * @param group Rule group name,
    * @param data Rule data for the group
    *  see `awful.hotkeys_popup.key.vim` as an example.
    */
  add_group_rules(
    group: string,
    data: table,
  ): void;
  /**
    * Labels used for displaying human-readable keynames.
    * @param Control
    * @param Mod1
    * @param ISO_Level3_Shift
    * @param Mod4
    * @param Insert
    * @param Delete
    * @param Next
    * @param Prior
    * @param Left
    * @param Up
    * @param Right
    * @param Down
    * @param KP_End
    * @param KP_Down
    * @param KP_Next
    * @param KP_Left
    * @param KP_Begin
    * @param KP_Right
    * @param KP_Home
    * @param KP_Up
    * @param KP_Prior
    * @param KP_Insert
    * @param KP_Delete
    * @param KP_Divide
    * @param KP_Multiply
    * @param KP_Subtract
    * @param KP_Add
    * @param KP_Enter
    * @param Escape
    * @param Tab
    * @param space
    * @param Return
    * @param dead_acute
    * @param dead_circumflex
    * @param dead_grave
    * @param XF86MonBrightnessUp
    * @param XF86MonBrightnessDown
    * @param XF86AudioRaiseVolume
    * @param XF86AudioLowerVolume
    * @param XF86AudioMute
    * @param XF86AudioPlay
    * @param XF86AudioPrev
    * @param XF86AudioNext
    * @param XF86AudioStop
    */
  labels(
    Control: string,
    Mod1: string,
    ISO_Level3_Shift: string,
    Mod4: string,
    Insert: string,
    Delete: string,
    Next: string,
    Prior: string,
    Left: string,
    Up: string,
    Right: string,
    Down: string,
    KP_End: string,
    KP_Down: string,
    KP_Next: string,
    KP_Left: string,
    KP_Begin: string,
    KP_Right: string,
    KP_Home: string,
    KP_Up: string,
    KP_Prior: string,
    KP_Insert: string,
    KP_Delete: string,
    KP_Divide: string,
    KP_Multiply: string,
    KP_Subtract: string,
    KP_Add: string,
    KP_Enter: string,
    Escape: string,
    Tab: string,
    space: string,
    Return: string,
    dead_acute: string,
    dead_circumflex: string,
    dead_grave: string,
    XF86MonBrightnessUp: string,
    XF86MonBrightnessDown: string,
    XF86AudioRaiseVolume: string,
    XF86AudioLowerVolume: string,
    XF86AudioMute: string,
    XF86AudioPlay: string,
    XF86AudioPrev: string,
    XF86AudioNext: string,
    XF86AudioStop: string,
  ): void;
  /**
    * Don't show hotkeys without descriptions.
    * @param boolean
    */
  hide_without_description(
    boolean,
  ): void;
  /**
    * Merge hotkey records into one if they have the same modifiers and
    *  description.  Records with five or more keys will abbreviate them.
    *
    *  This property only affects hotkey records added via `awful.key` keybindings.
    *  Cheatsheets for external programs are static and will present merged records
    *  regardless of the value of this property.
    * @param boolean
    */
  merge_duplicates(
    boolean,
  ): void;
  /**
    * Hotkeys widget background color.
    * @param hotkeys_bg
    */
  hotkeys_bg(
    hotkeys_bg: color,
  ): void;
  /**
    * Hotkeys widget foreground color.
    * @param hotkeys_fg
    */
  hotkeys_fg(
    hotkeys_fg: color,
  ): void;
  /**
    * Hotkeys widget border width.
    * @param hotkeys_border_width
    */
  hotkeys_border_width(
    hotkeys_border_width: int,
  ): void;
  /**
    * Hotkeys widget border color.
    * @param hotkeys_border_color
    */
  hotkeys_border_color(
    hotkeys_border_color: color,
  ): void;
  /**
    * Hotkeys widget shape.
    * @param hotkeys_shape
    */
  hotkeys_shape(
    hotkeys_shape?: gears.shape,
  ): void;
  /**
    * Foreground color used for hotkey modifiers (Ctrl, Alt, Super, etc).
    * @param hotkeys_modifiers_fg
    */
  hotkeys_modifiers_fg(
    hotkeys_modifiers_fg: color,
  ): void;
  /**
    * Background color used for miscellaneous labels of hotkeys widget.
    * @param hotkeys_label_bg
    */
  hotkeys_label_bg(
    hotkeys_label_bg: color,
  ): void;
  /**
    * Foreground color used for hotkey groups and other labels.
    * @param hotkeys_label_fg
    */
  hotkeys_label_fg(
    hotkeys_label_fg: color,
  ): void;
  /**
    * Override label background colors instead of cycling through xresources colors.
    * @param hotkeys_override_label_bgs
    */
  hotkeys_override_label_bgs(
    hotkeys_override_label_bgs: boolean,
  ): void;
  /**
    * Main hotkeys widget font.
    * @param hotkeys_font
    */
  hotkeys_font(
    hotkeys_font: string|lgi.Pango.FontDescription,
  ): void;
  /**
    * Font used for hotkeys' descriptions.
    * @param hotkeys_description_font
    */
  hotkeys_description_font(
    hotkeys_description_font: string|lgi.Pango.FontDescription,
  ): void;
  /**
    * Margin between hotkeys groups.
    * @param hotkeys_group_margin
    */
  hotkeys_group_margin(
    hotkeys_group_margin: int,
  ): void;
}
