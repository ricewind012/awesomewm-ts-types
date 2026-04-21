// All of these are generated/sorted by the generate_theme_vars script with
// some manual corrections.
interface Theme {
	// #region client
	/** The border color when the client is marked. */
	border_color_marked: AwesomeColor;

	/** The fallback border color when the client is floating. */
	border_color_floating: AwesomeColor;

	/** The fallback border color when the client is maximized. */
	border_color_maximized: AwesomeColor;

	/** The fallback border color when the client is fullscreen. */
	border_color_fullscreen: AwesomeColor;

	/** The border color when the client is active. */
	border_color_active: AwesomeColor;

	/** The border color when the client is not active. */
	border_color_normal: AwesomeColor;

	/** The border color when the client has the urgent property set. */
	border_color_urgent: AwesomeColor;

	/** The border color when the client is not active and new. */
	border_color_new: AwesomeColor;

	/** The border color when the (floating) client is active. */
	border_color_floating_active: AwesomeColor;

	/** The border color when the (floating) client is not active. */
	border_color_floating_normal: AwesomeColor;

	/** The border color when the (floating) client has the urgent property set. */
	border_color_floating_urgent: AwesomeColor;

	/** The border color when the (floating) client is not active and new. */
	border_color_floating_new: AwesomeColor;

	/** The border color when the (maximized) client is active. */
	border_color_maximized_active: AwesomeColor;

	/** The border color when the (maximized) client is not active. */
	border_color_maximized_normal: AwesomeColor;

	/** The border color when the (maximized) client has the urgent property set. */
	border_color_maximized_urgent: AwesomeColor;

	/** The border color when the (maximized) client is not active and new. */
	border_color_maximized_new: AwesomeColor;

	/** The border color when the (fullscreen) client is active. */
	border_color_fullscreen_active: AwesomeColor;

	/** The border color when the (fullscreen) client is not active. */
	border_color_fullscreen_normal: AwesomeColor;

	/** The border color when the (fullscreen) client has the urgent property set. */
	border_color_fullscreen_urgent: AwesomeColor;

	/** The border color when the (fullscreen) client is not active and new. */
	border_color_fullscreen_new: AwesomeColor;

	/** The fallback border width when nothing else is set. */
	border_width: number;

	/** The fallback border width when the client is floating. */
	border_width_floating: number;

	/** The fallback border width when the client is maximized. */
	border_width_maximized: number;

	/** The client border width for the normal clients. */
	border_width_normal: number;

	/** The client border width for the active client. */
	border_width_active: number;

	/** The client border width for the urgent clients. */
	border_width_urgent: number;

	/** The client border width for the new clients. */
	border_width_new: number;

	/** The client border width for the normal floating clients. */
	border_width_floating_normal: number;

	/** The client border width for the active floating client. */
	border_width_floating_active: number;

	/** The client border width for the urgent floating clients. */
	border_width_floating_urgent: number;

	/** The client border width for the new floating clients. */
	border_width_floating_new: number;

	/** The client border width for the normal maximized clients. */
	border_width_maximized_normal: number;

	/** The client border width for the active maximized client. */
	border_width_maximized_active: number;

	/** The client border width for the urgent maximized clients. */
	border_width_maximized_urgent: number;

	/** The client border width for the new maximized clients. */
	border_width_maximized_new: number;

	/** The client border width for the normal fullscreen clients. */
	border_width_fullscreen_normal: number;

	/** The client border width for the active fullscreen client. */
	border_width_fullscreen_active: number;

	/** The client border width for the urgent fullscreen clients. */
	border_width_fullscreen_urgent: number;

	/** The client border width for the new fullscreen clients. */
	border_width_fullscreen_new: number;

	/** The client border width for the fullscreen clients. */
	border_width_fullscreen: number;

	/** The client opacity for the normal clients. */
	opacity_normal: number;

	/** The client opacity for the active client. */
	opacity_active: number;

	/** The client opacity for the urgent clients. */
	opacity_urgent: number;

	/** The client opacity for the new clients. */
	opacity_new: number;

	/** The client opacity for the normal floating clients. */
	opacity_floating_normal: number;

	/** The client opacity for the active floating client. */
	opacity_floating_active: number;

	/** The client opacity for the urgent floating clients. */
	opacity_floating_urgent: number;

	/** The client opacity for the new floating clients. */
	opacity_floating_new: number;

	/** The client opacity for the floating clients. */
	opacity_floating: number;

	/** The client opacity for the normal maximized clients. */
	opacity_maximized_normal: number;

	/** The client opacity for the active maximized client. */
	opacity_maximized_active: number;

	/** The client opacity for the urgent maximized clients. */
	opacity_maximized_urgent: number;

	/** The client opacity for the new maximized clients. */
	opacity_maximized_new: number;

	/** The client opacity for the maximized clients. */
	opacity_maximized: number;

	/** The client opacity for the normal fullscreen clients. */
	opacity_fullscreen_normal: number;

	/** The client opacity for the active fullscreen client. */
	opacity_fullscreen_active: number;

	/** The client opacity for the urgent fullscreen clients. */
	opacity_fullscreen_urgent: number;

	/** The client opacity for the new fullscreen clients. */
	opacity_fullscreen_new: number;

	/** The client opacity for the fullscreen clients. */
	opacity_fullscreen: number;
	// #endregion

	// #region naughty.notification
	/** Notifications font. */
	notification_font: string | lgi.Pango.FontDescription;

	/** Notifications background color. */
	notification_bg: AwesomeColor;

	/** Notifications foreground color. */
	notification_fg: AwesomeColor;

	/** Notifications border width. */
	notification_border_width: number;

	/** Notifications border color. */
	notification_border_color: AwesomeColor;

	/** Notifications shape. */
	notification_shape: shape;

	/** Notifications opacity. */
	notification_opacity: number;

	/** The margins inside of the notification widget (or popup). */
	notification_margin: number;

	/** Notifications width. */
	notification_width: number;

	/** Notifications height. */
	notification_height: number;

	/** The spacing between the notifications. */
	notification_spacing: number;
	// #endregion

	// #region tag
	/** The default master width factor */
	master_width_factor: number;

	/** The default gap. */
	useless_gap: number;

	/** Enable gaps for a single client. */
	gap_single_client: boolean;

	/** The default fill policy. */
	master_fill_policy: string;

	/** The default number of master windows. */
	master_count: number;

	/** The default number of columns. */
	column_count: number;
	// #endregion

	// #region mouse
	/** The snap outline background color. */
	snap_bg: AwesomeColor;

	/** The snap outline width. */
	snap_border_width: number;

	/** The snap outline shape. */
	snap_shape: (...args: unknown[]) => any;

	/** The gap between snapped clients. */
	snapper_gap: number;

	/** The resize cursor name. */
	cursor_mouse_resize: string;

	/** The move cursor name. */
	cursor_mouse_move: string;
	// #endregion

	// #region awful.widget.layoutlist
	/** The default foreground (text) color. */
	layoutlist_fg_normal: string | AwesomeColor;

	/** The default background color. */
	layoutlist_bg_normal: string | AwesomeColor;

	/** The selected layout foreground (text) color. */
	layoutlist_fg_selected: string | AwesomeColor;

	/** The selected layout background color. */
	layoutlist_bg_selected: string | AwesomeColor;

	/** Disable the layout icons (only show the name label). */
	layoutlist_disable_icon: boolean;

	/** Disable the layout name label (only show the icon). */
	layoutlist_disable_name: boolean;

	/** The layoutlist font. */
	layoutlist_font: string;

	/** The selected layout alignment. */
	layoutlist_align: string;

	/** The selected layout title font. */
	layoutlist_font_selected: string;

	/** The space between the layouts. */
	layoutlist_spacing: number;

	/** The default layoutlist elements shape. */
	layoutlist_shape: shape;

	/** The default layoutlist elements border width. */
	layoutlist_shape_border_width: number;

	/** The default layoutlist elements border color. */
	layoutlist_shape_border_color: string | AwesomeColor;

	/** The selected layout shape. */
	layoutlist_shape_selected: shape;

	/** The selected layout border width. */
	layoutlist_shape_border_width_selected: number;

	/** The selected layout border color. */
	layoutlist_shape_border_color_selected: string | AwesomeColor;
	// #endregion

	// #region awful.widget.prompt
	/** The prompt foreground color. */
	prompt_fg: AwesomeColor;

	/** The prompt background color. */
	prompt_bg: AwesomeColor;
	// #endregion

	// #region awful.widget.taglist
	/** The tag list main foreground (text) color. */
	taglist_fg_focus: AwesomeColor;

	/** The tag list main background color. */
	taglist_bg_focus: AwesomeColor;

	/** The tag list urgent elements foreground (text) color. */
	taglist_fg_urgent: AwesomeColor;

	/** The tag list urgent elements background color. */
	taglist_bg_urgent: AwesomeColor;

	/** The tag list occupied elements background color. */
	taglist_bg_occupied: AwesomeColor;

	/** The tag list occupied elements foreground (text) color. */
	taglist_fg_occupied: AwesomeColor;

	/** The tag list empty elements background color. */
	taglist_bg_empty: AwesomeColor;

	/** The tag list empty elements foreground (text) color. */
	taglist_fg_empty: AwesomeColor;

	/** The tag list volatile elements background color. */
	taglist_bg_volatile: AwesomeColor;

	/** The tag list volatile elements foreground (text) color. */
	taglist_fg_volatile: AwesomeColor;

	/** The selected elements background image. */
	taglist_squares_sel: cairo_image_surface;

	/** The unselected elements background image. */
	taglist_squares_unsel: cairo_image_surface;

	/** The selected empty elements background image. */
	taglist_squares_sel_empty: cairo_image_surface;

	/** The unselected empty elements background image. */
	taglist_squares_unsel_empty: cairo_image_surface;

	/** If the background images can be resized. */
	taglist_squares_resize: boolean;

	/** Do not display the tag icons, even if they are set. */
	taglist_disable_icon: boolean;

	/** The taglist font. */
	taglist_font: string;

	/** The space between the taglist elements. */
	taglist_spacing: number;

	/** The main shape used for the elements. */
	taglist_shape: shape;

	/** The shape elements border width. */
	taglist_shape_border_width: number;

	/** The elements shape border color. */
	taglist_shape_border_color: AwesomeColor;

	/** The shape used for the empty elements. */
	taglist_shape_empty: shape;

	/** The shape used for the empty elements border width. */
	taglist_shape_border_width_empty: number;

	/** The empty elements shape border color. */
	taglist_shape_border_color_empty: AwesomeColor;

	/** The shape used for the selected elements. */
	taglist_shape_focus: shape;

	/** The shape used for the selected elements border width. */
	taglist_shape_border_width_focus: number;

	/** The selected elements shape border color. */
	taglist_shape_border_color_focus: AwesomeColor;

	/** The shape used for the urgent elements. */
	taglist_shape_urgent: shape;

	/** The shape used for the urgent elements border width. */
	taglist_shape_border_width_urgent: number;

	/** The urgents elements shape border color. */
	taglist_shape_border_color_urgent: AwesomeColor;

	/** The shape used for the volatile elements. */
	taglist_shape_volatile: shape;

	/** The shape used for the volatile elements border width. */
	taglist_shape_border_width_volatile: number;

	/** The volatile elements shape border color. */
	taglist_shape_border_color_volatile: AwesomeColor;
	// #endregion

	// #region awful.widget.tasklist
	/** The default foreground (text) color. */
	tasklist_fg_normal: string | AwesomeColor;

	/** The default background color. */
	tasklist_bg_normal: string | AwesomeColor;

	/** The focused client foreground (text) color. */
	tasklist_fg_focus: string | AwesomeColor;

	/** The focused client background color. */
	tasklist_bg_focus: string | AwesomeColor;

	/** The urgent clients foreground (text) color. */
	tasklist_fg_urgent: string | AwesomeColor;

	/** The urgent clients background color. */
	tasklist_bg_urgent: string | AwesomeColor;

	/** The minimized clients foreground (text) color. */
	tasklist_fg_minimize: string | AwesomeColor;

	/** The minimized clients background color. */
	tasklist_bg_minimize: string | AwesomeColor;

	/** The elements default background image. */
	tasklist_bg_image_normal: string;

	/** The focused client background image. */
	tasklist_bg_image_focus: string;

	/** The urgent clients background image. */
	tasklist_bg_image_urgent: string;

	/** The minimized clients background image. */
	tasklist_bg_image_minimize: string;

	/** Disable the tasklist client icons. */
	tasklist_disable_icon: boolean;

	/** Disable the tasklist client titles. */
	tasklist_disable_task_name: boolean;

	/** Disable the extra tasklist client property notification icons. */
	tasklist_plain_task_name: boolean;

	/** Extra tasklist client property notification icon for clients with the sticky property set. */
	tasklist_sticky: string;

	/** Extra tasklist client property notification icon for clients with the ontop property set. */
	tasklist_ontop: string;

	/** Extra tasklist client property notification icon for clients with the above property set. */
	tasklist_above: string;

	/** Extra tasklist client property notification icon for clients with the below property set. */
	tasklist_below: string;

	/** Extra tasklist client property notification icon for clients with the floating property set. */
	tasklist_floating: string;

	/** Extra tasklist client property notification icon for clients with the maximized property set. */
	tasklist_maximized: string;

	/** Extra tasklist client property notification icon for clients with the maximized_horizontal property set. */
	tasklist_maximized_horizontal: string;

	/** Extra tasklist client property notification icon for clients with the maximized_vertical property set. */
	tasklist_maximized_vertical: string;

	/** Extra tasklist client property notification icon for clients with the minimized property set. */
	tasklist_minimized: string;

	/** The focused client alignment. */
	tasklist_align: string;

	/** The tasklist font. */
	tasklist_font: string;

	/** The focused client title alignment. */
	tasklist_font_focus: string;

	/** The minimized clients font. */
	tasklist_font_minimized: string;

	/** The urgent clients font. */
	tasklist_font_urgent: string;

	/** The space between the tasklist elements. */
	tasklist_spacing: number;

	/** The default tasklist elements shape. */
	tasklist_shape: shape;

	/** The default tasklist elements border width. */
	tasklist_shape_border_width: number;

	/** The default tasklist elements border color. */
	tasklist_shape_border_color: string | AwesomeColor;

	/** The focused client shape. */
	tasklist_shape_focus: shape;

	/** The focused client border width. */
	tasklist_shape_border_width_focus: number;

	/** The focused client border color. */
	tasklist_shape_border_color_focus: string | AwesomeColor;

	/** The minimized clients shape. */
	tasklist_shape_minimized: shape;

	/** The minimized clients border width. */
	tasklist_shape_border_width_minimized: number;

	/** The minimized clients border color. */
	tasklist_shape_border_color_minimized: string | AwesomeColor;

	/** The urgent clients shape. */
	tasklist_shape_urgent: shape;

	/** The urgent clients border width. */
	tasklist_shape_border_width_urgent: number;

	/** The urgent clients border color. */
	tasklist_shape_border_color_urgent: string | AwesomeColor;

	/** The icon size. */
	tasklist_icon_size: number;
	// #endregion

	// #region naughty.list.actions
	/** Whether or not to underline the action name. */
	notification_action_underline_normal: boolean;

	/** Whether or not to underline the selected action name. */
	notification_action_underline_selected: boolean;

	/** Whether or not the action label should be shown. */
	notification_action_icon_only: boolean;

	/** Whether or not the action icon should be shown. */
	notification_action_label_only: boolean;

	/** The shape used for a normal action. */
	notification_action_shape_normal: shape;

	/** The shape used for a selected action. */
	notification_action_shape_selected: shape;

	/** The shape border color for normal actions. */
	notification_action_shape_border_color_normal: AwesomeColor;

	/** The shape border color for selected actions. */
	notification_action_shape_border_color_selected: AwesomeColor;

	/** The shape border width for normal actions. */
	notification_action_shape_border_width_normal: number;

	/** The shape border width for selected actions. */
	notification_action_shape_border_width_selected: number;

	/** The action icon size. */
	notification_action_icon_size_normal: number;

	/** The selected action icon size. */
	notification_action_icon_size_selected: number;

	/** The background color for normal actions. */
	notification_action_bg_normal: AwesomeColor;

	/** The background color for selected actions. */
	notification_action_bg_selected: AwesomeColor;

	/** The foreground color for normal actions. */
	notification_action_fg_normal: AwesomeColor;

	/** The foreground color for selected actions. */
	notification_action_fg_selected: AwesomeColor;

	/** The background image for normal actions. */
	notification_action_bgimage_normal: cairo_image_surface | string;

	/** The background image for selected actions. */
	notification_action_bgimage_selected: cairo_image_surface | string;
	// #endregion

	// #region naughty.list.notifications
	/** The shape used for a normal notification. */
	notification_shape_normal: shape;

	/** The shape used for a selected notification. */
	notification_shape_selected: shape;

	/** The shape border color for normal notifications. */
	notification_shape_border_color_normal: AwesomeColor;

	/** The shape border color for selected notifications. */
	notification_shape_border_color_selected: AwesomeColor;

	/** The shape border width for normal notifications. */
	notification_shape_border_width_normal: number;

	/** The shape border width for selected notifications. */
	notification_shape_border_width_selected: number;

	/** The notification icon size. */
	notification_icon_size_normal: number;

	/** The selected notification icon size. */
	notification_icon_size_selected: number;

	/** The background color for normal notifications. */
	notification_bg_normal: AwesomeColor;

	/** The background color for selected notifications. */
	notification_bg_selected: AwesomeColor;

	/** The foreground color for normal notifications. */
	notification_fg_normal: AwesomeColor;

	/** The foreground color for selected notifications. */
	notification_fg_selected: AwesomeColor;

	/** The background image for normal notifications. */
	notification_bgimage_normal: string | cairo_image_surface;

	/** The background image for selected notifications. */
	notification_bgimage_selected: string | cairo_image_surface;
	// #endregion

	// #region naughty.widget.icon
	/** The default way to resize the icon. */
	notification_icon_resize_strategy: number;

	/** The default notification icon size. */
	notification_icon_size: number;
	// #endregion

	// #region wibox.widget.calendar
	/** The calendar font. */
	calendar_font: string;

	/** The calendar spacing. */
	calendar_spacing: number;

	/** Display the calendar week numbers. */
	calendar_week_numbers: boolean;

	/** Start the week on Sunday. */
	calendar_start_sunday: boolean;

	/** Format the weekdays with three characters instead of two */
	calendar_long_weekdays: boolean;

	/** Allow cells to have flexible height. */
	flex_height: boolean;

	/** Set the color for the empty space where there are no date widgets. */
	calendar_empty_color: AwesomeColor;
	// #endregion

	// #region wibox.widget.checkbox
	/** The outer (unchecked area) border width. */
	checkbox_border_width: number;

	/** The outer (unchecked area) background color, pattern or gradient. */
	checkbox_bg: AwesomeColor;

	/** The outer (unchecked area) border color. */
	checkbox_border_color: AwesomeColor;

	/** The checked part border color. */
	checkbox_check_border_color: AwesomeColor;

	/** The checked part border width. */
	checkbox_check_border_width: number;

	/** The checked part filling color. */
	checkbox_check_color: number;

	/** The outer (unchecked area) shape. */
	checkbox_shape: shape | ((...args: unknown[]) => any);

	/** The checked part shape. */
	checkbox_check_shape: shape | ((...args: unknown[]) => any);

	/** The padding between the outline and the progressbar. */
	checkbox_paddings: table | number;

	/** The checkbox color. */
	checkbox_color: AwesomeColor;
	// #endregion

	// #region wibox.widget.graph
	/** The graph foreground color
 Used, when the color property isn't set. */
	graph_fg: AwesomeColor;

	/** The graph background color. */
	graph_bg: AwesomeColor;

	/** The graph border color. */
	graph_border_color: AwesomeColor;
	// #endregion

	// #region wibox.widget.piechart
	/** The border color. */
	piechart_border_color: AwesomeColor;

	/** The pie elements border width. */
	piechart_border_width: number;

	/** The pie chart colors. */
	piechart_colors: table;
	// #endregion

	// #region wibox.widget.progressbar
	/** The progressbar background color. */
	progressbar_bg: AwesomeColor;

	/** The progressbar foreground color. */
	progressbar_fg: AwesomeColor;

	/** The progressbar shape. */
	progressbar_shape: shape;

	/** The progressbar border color. */
	progressbar_border_color: AwesomeColor;

	/** The progressbar outer border width. */
	progressbar_border_width: number;

	/** The progressbar inner shape. */
	progressbar_bar_shape: shape;

	/** The progressbar bar border width. */
	progressbar_bar_border_width: number;

	/** The progressbar bar border color. */
	progressbar_bar_border_color: AwesomeColor;

	/** The progressbar margins. */
	progressbar_margins: table | number | undefined;

	/** The progressbar padding. */
	progressbar_paddings: table | number | undefined;
	// #endregion

	// #region wibox.widget.separator
	/** The separator thickness. */
	separator_thickness: number;

	/** The separator border color. */
	separator_border_color: AwesomeColor;

	/** The separator border width. */
	separator_border_width: number;

	/** The relative percentage covered by the bar. */
	separator_span_ratio: number;

	/** The separator's color. */
	separator_color: AwesomeColor;

	/** The separator's shape. */
	separator_shape: shape;
	// #endregion

	// #region wibox.widget.slider
	/** The bar (background) border width. */
	slider_bar_border_width: number;

	/** The bar (background) border color. */
	slider_bar_border_color: AwesomeColor;

	/** The handle border_color. */
	slider_handle_border_color: AwesomeColor;

	/** The handle border width. */
	slider_handle_border_width: number;

	/** The handle width. */
	slider_handle_width: number;

	/** The handle color. */
	slider_handle_color: AwesomeColor;

	/** The handle shape. */
	slider_handle_shape: shape;

	/** The cursor icon while grabbing the handle. */
	slider_handle_cursor: string;

	/** The bar (background) shape. */
	slider_bar_shape: shape;

	/** The bar (background) height. */
	slider_bar_height: number;

	/** The bar (background) margins. */
	slider_bar_margins: table;

	/** The slider handle margins. */
	slider_handle_margins: table;

	/** The bar (background) color. */
	slider_bar_color: AwesomeColor;

	/** The bar (active) color. */
	slider_bar_active_color: AwesomeColor;
	// #endregion

	// #region wibox.widget.systray
	/** The systray background color. */
	bg_systray: string;

	/** The maximum number of rows for systray icons. */
	systray_max_rows: number;

	/** The systray icon spacing. */
	systray_icon_spacing: number;
	// #endregion

	// #region wibox.container.arcchart
	/** The progressbar border background color. */
	arcchart_border_color: AwesomeColor;

	/** The progressbar foreground color. */
	arcchart_color: AwesomeColor;

	/** The progressbar border width. */
	arcchart_border_width: number;

	/** The padding between the outline and the progressbar. */
	arcchart_paddings: table | number;

	/** The arc thickness. */
	arcchart_thickness: number;

	/** If the chart has rounded edges. */
	arcchart_rounded_edge: boolean;

	/** The radial background. */
	arcchart_bg: AwesomeColor;

	/** The (radiant) angle where the first value start. */
	arcchart_start_angle: number;
	// #endregion

	// #region wibox.container.radialprogressbar
	/** The progressbar border background color. */
	radialprogressbar_border_color: AwesomeColor;

	/** The progressbar foreground color. */
	radialprogressbar_color: AwesomeColor;

	/** The progressbar border width. */
	radialprogressbar_border_width: number;

	/** The padding between the outline and the progressbar. */
	radialprogressbar_paddings: table | number;
	// #endregion

	// #region awful.hotkeys_popup.widget
	/** Hotkeys widget background color. */
	hotkeys_bg: AwesomeColor;

	/** Hotkeys widget foreground color. */
	hotkeys_fg: AwesomeColor;

	/** Hotkeys widget border width. */
	hotkeys_border_width: number;

	/** Hotkeys widget border color. */
	hotkeys_border_color: AwesomeColor;

	/** Hotkeys widget shape. */
	hotkeys_shape: shape;

	/** Foreground color used for hotkey modifiers (Ctrl, Alt, Super, etc). */
	hotkeys_modifiers_fg: AwesomeColor;

	/** Background color used for miscellaneous labels of hotkeys widget. */
	hotkeys_label_bg: AwesomeColor;

	/** Foreground color used for hotkey groups and other labels. */
	hotkeys_label_fg: AwesomeColor;

	/** Override label background colors instead of cycling through xresources colors. */
	hotkeys_override_label_bgs: boolean;

	/** Main hotkeys widget font. */
	hotkeys_font: string | lgi.Pango.FontDescription;

	/** Font used for hotkeys' descriptions. */
	hotkeys_description_font: string | lgi.Pango.FontDescription;

	/** Margin between hotkeys groups. */
	hotkeys_group_margin: number;
	// #endregion

	// #region awful.menu
	/** The icon used for sub-menus. */
	menu_submenu_icon: string | cairo_image_surface;

	/** The menu text font. */
	menu_font: string;

	/** The item height. */
	menu_height: number;

	/** The default menu width. */
	menu_width: number;

	/** The menu item border color. */
	menu_border_color: number;

	/** The menu item border width. */
	menu_border_width: number;

	/** The default focused item foreground (text) color. */
	menu_fg_focus: AwesomeColor;

	/** The default focused item background color. */
	menu_bg_focus: AwesomeColor;

	/** The default foreground (text) color. */
	menu_fg_normal: AwesomeColor;

	/** The default background color. */
	menu_bg_normal: AwesomeColor;

	/** The default sub-menu indicator if no menu_submenu_icon is provided. */
	menu_submenu: string;
	// #endregion

	// #region awful.titlebar
	/** The titlebar foreground (text) color. */
	titlebar_fg_normal: AwesomeColor;

	/** The titlebar background color. */
	titlebar_bg_normal: AwesomeColor;

	/** The titlebar background image image. */
	titlebar_bgimage_normal: cairo_image_surface | string;

	/** The titlebar foreground (text) color. */
	titlebar_fg: AwesomeColor;

	/** The titlebar background color. */
	titlebar_bg: AwesomeColor;

	/** The titlebar background image image. */
	titlebar_bgimage: cairo_image_surface | string;

	/** The focused titlebar foreground (text) color. */
	titlebar_fg_focus: AwesomeColor;

	/** The focused titlebar background color. */
	titlebar_bg_focus: AwesomeColor;

	/** The focused titlebar background image image. */
	titlebar_bgimage_focus: cairo_image_surface | string;

	/** The urgent titlebar foreground (text) color. */
	titlebar_fg_urgent: AwesomeColor;

	/** The urgent titlebar background color. */
	titlebar_bg_urgent: AwesomeColor;

	/** The urgent titlebar background image. */
	titlebar_bgimage_urgent: cairo_image_surface | string;

	/** The normal non-floating button image. */
	titlebar_floating_button_normal: cairo_image_surface | string;

	/** The normal non-maximized button image. */
	titlebar_maximized_button_normal: cairo_image_surface | string;

	/** The normal minimize button image. */
	titlebar_minimize_button_normal: cairo_image_surface | string;

	/** The hovered minimize button image. */
	titlebar_minimize_button_normal_hover: cairo_image_surface | string;

	/** The pressed minimize button image. */
	titlebar_minimize_button_normal_press: cairo_image_surface | string;

	/** The normal close button image. */
	titlebar_close_button_normal: cairo_image_surface | string;

	/** The hovered close button image. */
	titlebar_close_button_normal_hover: cairo_image_surface | string;

	/** The pressed close button image. */
	titlebar_close_button_normal_press: cairo_image_surface | string;

	/** The normal non-ontop button image. */
	titlebar_ontop_button_normal: cairo_image_surface | string;

	/** The normal non-sticky button image. */
	titlebar_sticky_button_normal: cairo_image_surface | string;

	/** The focused client non-floating button image. */
	titlebar_floating_button_focus: cairo_image_surface | string;

	/** The focused client non-maximized button image. */
	titlebar_maximized_button_focus: cairo_image_surface | string;

	/** The focused client minimize button image. */
	titlebar_minimize_button_focus: cairo_image_surface | string;

	/** The hovered+focused client minimize button image. */
	titlebar_minimize_button_focus_hover: cairo_image_surface | string;

	/** The pressed+focused minimize button image. */
	titlebar_minimize_button_focus_press: cairo_image_surface | string;

	/** The focused client close button image. */
	titlebar_close_button_focus: cairo_image_surface | string;

	/** The hovered+focused close button image. */
	titlebar_close_button_focus_hover: cairo_image_surface | string;

	/** The pressed+focused close button image. */
	titlebar_close_button_focus_press: cairo_image_surface | string;

	/** The focused client non-ontop button image. */
	titlebar_ontop_button_focus: cairo_image_surface | string;

	/** The focused client sticky button image. */
	titlebar_sticky_button_focus: cairo_image_surface | string;

	/** The normal floating button image. */
	titlebar_floating_button_normal_active: cairo_image_surface | string;

	/** The hovered floating client button image. */
	titlebar_floating_button_normal_active_hover: cairo_image_surface | string;

	/** The pressed floating client button image. */
	titlebar_floating_button_normal_active_press: cairo_image_surface | string;

	/** The maximized client button image. */
	titlebar_maximized_button_normal_active: cairo_image_surface | string;

	/** The hozered+maximized client button image. */
	titlebar_maximized_button_normal_active_hover: cairo_image_surface | string;

	/** The pressed+maximized button image. */
	titlebar_maximized_button_normal_active_press: cairo_image_surface | string;

	/** The ontop button image. */
	titlebar_ontop_button_normal_active: cairo_image_surface | string;

	/** The hovered+ontop client button image. */
	titlebar_ontop_button_normal_active_hover: cairo_image_surface | string;

	/** The pressed+ontop client button image. */
	titlebar_ontop_button_normal_active_press: cairo_image_surface | string;

	/** The sticky button image. */
	titlebar_sticky_button_normal_active: cairo_image_surface | string;

	/** The hovered+sticky button image. */
	titlebar_sticky_button_normal_active_hover: cairo_image_surface | string;

	/** The pressed+sticky client button image. */
	titlebar_sticky_button_normal_active_press: cairo_image_surface | string;

	/** The floating+focused client button image. */
	titlebar_floating_button_focus_active: cairo_image_surface | string;

	/** The hovered+floating+focused button image. */
	titlebar_floating_button_focus_active_hover: cairo_image_surface | string;

	/** The pressed+floating+focused button image. */
	titlebar_floating_button_focus_active_press: cairo_image_surface | string;

	/** The maximized+focused button image. */
	titlebar_maximized_button_focus_active: cairo_image_surface | string;

	/** The hovered+maximized+focused button image. */
	titlebar_maximized_button_focus_active_hover: cairo_image_surface | string;

	/** The pressed+maximized+focused button image. */
	titlebar_maximized_button_focus_active_press: cairo_image_surface | string;

	/** The ontop+focused button image. */
	titlebar_ontop_button_focus_active: cairo_image_surface | string;

	/** The hovered+ontop+focused button image. */
	titlebar_ontop_button_focus_active_hover: cairo_image_surface | string;

	/** The pressed+ontop+focused button image. */
	titlebar_ontop_button_focus_active_press: cairo_image_surface | string;

	/** The sticky+focused button image. */
	titlebar_sticky_button_focus_active: cairo_image_surface | string;

	/** The hovered+sticky+focused button image. */
	titlebar_sticky_button_focus_active_hover: cairo_image_surface | string;

	/** The pressed+sticky+focused button image. */
	titlebar_sticky_button_focus_active_press: cairo_image_surface | string;

	/** The inactive+floating button image. */
	titlebar_floating_button_normal_inactive: cairo_image_surface | string;

	/** The hovered+inactive+floating button image. */
	titlebar_floating_button_normal_inactive_hover: cairo_image_surface | string;

	/** The pressed+inactive+floating button image. */
	titlebar_floating_button_normal_inactive_press: cairo_image_surface | string;

	/** The inactive+maximized button image. */
	titlebar_maximized_button_normal_inactive: cairo_image_surface | string;

	/** The hovered+inactive+maximized button image. */
	titlebar_maximized_button_normal_inactive_hover: cairo_image_surface | string;

	/** The pressed+maximized+inactive button image. */
	titlebar_maximized_button_normal_inactive_press: cairo_image_surface | string;

	/** The inactive+ontop button image. */
	titlebar_ontop_button_normal_inactive: cairo_image_surface | string;

	/** The hovered+inactive+ontop button image. */
	titlebar_ontop_button_normal_inactive_hover: cairo_image_surface | string;

	/** The pressed+inactive+ontop button image. */
	titlebar_ontop_button_normal_inactive_press: cairo_image_surface | string;

	/** The inactive+sticky button image. */
	titlebar_sticky_button_normal_inactive: cairo_image_surface | string;

	/** The hovered+inactive+sticky button image. */
	titlebar_sticky_button_normal_inactive_hover: cairo_image_surface | string;

	/** The pressed+inactive+sticky button image. */
	titlebar_sticky_button_normal_inactive_press: cairo_image_surface | string;

	/** The inactive+focused+floating button image. */
	titlebar_floating_button_focus_inactive: cairo_image_surface | string;

	/** The hovered+inactive+focused+floating button image. */
	titlebar_floating_button_focus_inactive_hover: cairo_image_surface | string;

	/** The pressed+inactive+focused+floating button image. */
	titlebar_floating_button_focus_inactive_press: cairo_image_surface | string;

	/** The inactive+focused+maximized button image. */
	titlebar_maximized_button_focus_inactive: cairo_image_surface | string;

	/** The hovered+inactive+focused+maximized button image. */
	titlebar_maximized_button_focus_inactive_hover: cairo_image_surface | string;

	/** The pressed+inactive+focused+maximized button image. */
	titlebar_maximized_button_focus_inactive_press: cairo_image_surface | string;

	/** The inactive+focused+ontop button image. */
	titlebar_ontop_button_focus_inactive: cairo_image_surface | string;

	/** The hovered+inactive+focused+ontop button image. */
	titlebar_ontop_button_focus_inactive_hover: cairo_image_surface | string;

	/** The pressed+inactive+focused+ontop button image. */
	titlebar_ontop_button_focus_inactive_press: cairo_image_surface | string;

	/** The inactive+focused+sticky button image. */
	titlebar_sticky_button_focus_inactive: cairo_image_surface | string;

	/** The hovered+inactive+focused+sticky button image. */
	titlebar_sticky_button_focus_inactive_hover: cairo_image_surface | string;

	/** The pressed+inactive+focused+sticky button image. */
	titlebar_sticky_button_focus_inactive_press: cairo_image_surface | string;

	/** The message in the close button tooltip. */
	titlebar_tooltip_messages_close: string;

	/** The message in the minimize button tooltip. */
	titlebar_tooltip_messages_minimize: string;

	/** The message in the maximize button tooltip when the client is maximized. */
	titlebar_tooltip_messages_maximized_active: string;

	/** The message in the maximize button tooltip when the client is unmaximized. */
	titlebar_tooltip_messages_maximized_inactive: string;

	/** The message in the floating button tooltip when then client is floating. */
	titlebar_tooltip_messages_floating_active: string;

	/** The message in the floating button tooltip when then client isn't floating. */
	titlebar_tooltip_messages_floating_inactive: string;

	/** The message in the onTop button tooltip when the client is onTop. */
	titlebar_tooltip_messages_ontop_active: string;

	/** The message in the onTop button tooltip when client isn't onTop. */
	titlebar_tooltip_messages_ontop_inactive: string;

	/** The message in the sticky button tooltip when the client is sticky. */
	titlebar_tooltip_messages_sticky_active: string;

	/** The message in the sticky button tooltip when the client isn't sticky. */
	titlebar_tooltip_messages_sticky_inactive: string;

	/** The delay in second before the titlebar buttons tooltip is shown. */
	titlebar_tooltip_delay_show: number;

	/** The inner left and right margins for tooltip messages. */
	titlebar_tooltip_margins_leftright: number;

	/** The inner top and bottom margins for the tooltip messages. */
	titlebar_tooltip_margins_topbottom: number;

	/** The time in second before invoking the timer_function callback. */
	titlebar_tooltip_timeout: number;

	/** The text horizontal alignment in tooltips. */
	titlebar_tooltip_align: string;
	// #endregion

	// #region awful.tooltip
	/** The tooltip border color. */
	tooltip_border_color: AwesomeColor;

	/** The tooltip background color. */
	tooltip_bg: AwesomeColor;

	/** The tooltip foregound (text) color. */
	tooltip_fg: AwesomeColor;

	/** The tooltip font. */
	tooltip_font: string;

	/** The tooltip border width. */
	tooltip_border_width: number;

	/** The tooltip opacity. */
	tooltip_opacity: number;

	/** The tooltip margins. */
	tooltip_gaps: table;

	/** The default tooltip shape. */
	tooltip_shape: shape;

	/** The default tooltip alignment. */
	tooltip_align: string;
	// #endregion

	// #region awful.wallpaper
	/** The default wallpaper background color. */
	wallpaper_bg: AwesomeColor;

	/** The default wallpaper foreground color. */
	wallpaper_fg: undefined;
	// #endregion

	// #region awful.wibar
	/** If the wibar needs to be stretched to fill the screen. */
	wibar_stretch: boolean;

	/** If there is both vertical and horizontal wibar, give more space to vertical ones. */
	wibar_favor_vertical: boolean;

	/** The wibar border width. */
	wibar_border_width: number;

	/** The wibar border color. */
	wibar_border_color: string;

	/** If the wibar is to be on top of other windows. */
	wibar_ontop: boolean;

	/** The wibar's mouse cursor. */
	wibar_cursor: string;

	/** The wibar opacity, between 0 and 1. */
	wibar_opacity: number;

	/** The window type (desktop, normal, dock, …). */
	wibar_type: string;

	/** The wibar's width. */
	wibar_width: number;

	/** The wibar's height. */
	wibar_height: number;

	/** The wibar's background color. */
	wibar_bg: AwesomeColor;

	/** The wibar's background image. */
	wibar_bgimage: cairo_image_surface;

	/** The wibar's foreground (text) color. */
	wibar_fg: AwesomeColor;

	/** The wibar's shape. */
	wibar_shape: shape;

	/** The wibar's margins. */
	wibar_margins: number | table;

	/** The wibar's alignments. */
	wibar_align: string;
	// #endregion

	// #region awful.widget.calendar_popup
	/** The generic calendar style table. */
	calendar_style: any;
	// #endregion

	// #region menubar
	/** Menubar normal text color. */
	menubar_fg_normal: AwesomeColor;

	/** Menubar normal background color. */
	menubar_bg_normal: AwesomeColor;

	/** Menubar border width. */
	menubar_border_width: number;

	/** Menubar border color. */
	menubar_border_color: AwesomeColor;

	/** Menubar selected item text color. */
	menubar_fg_focus: AwesomeColor;

	/** Menubar selected item background color. */
	menubar_bg_focus: AwesomeColor;

	/** Menubar font. */
	menubar_font: string;
	// #endregion

	// #region naughty.layout.box
	/** The maximum notification width. */
	notification_max_width: number;

	/** The maximum notification position. */
	notification_position: string;
	// #endregion

	// #region beautiful
	/** The default font. */
	font: string;

	/** The default background color. */
	bg_normal: AwesomeColor;

	/** The default focused element background color. */
	bg_focus: AwesomeColor;

	/** The default urgent element background color. */
	bg_urgent: AwesomeColor;

	/** The default minimized element background color. */
	bg_minimize: AwesomeColor;

	/** The default focused element foreground (text) color. */
	fg_normal: AwesomeColor;

	/** The default focused element foreground (text) color. */
	fg_focus: AwesomeColor;

	/** The default urgent element foreground (text) color. */
	fg_urgent: AwesomeColor;

	/** The default minimized element foreground (text) color. */
	fg_minimize: AwesomeColor;

	/** The wallpaper path. */
	wallpaper: string | cairo_image_surface;

	/** The icon theme name. */
	icon_theme: string;

	/** The Awesome icon path. */
	awesome_icon: string | cairo_image_surface;
	// #endregion

	// #region awful.layout
	/** The cornernw layout layoutbox icon. */
	layout_cornernw: cairo_image_surface;

	/** The cornerne layout layoutbox icon. */
	layout_cornerne: cairo_image_surface;

	/** The cornersw layout layoutbox icon. */
	layout_cornersw: cairo_image_surface;

	/** The cornerse layout layoutbox icon. */
	layout_cornerse: cairo_image_surface;

	/** The fairh layout layoutbox icon. */
	layout_fairh: cairo_image_surface;

	/** The fairv layout layoutbox icon. */
	layout_fairv: cairo_image_surface;

	/** The floating layout layoutbox icon. */
	layout_floating: cairo_image_surface;

	/** The magnifier layout layoutbox icon. */
	layout_magnifier: cairo_image_surface;

	/** The max layout layoutbox icon. */
	layout_max: cairo_image_surface;

	/** The fullscreen layout layoutbox icon. */
	layout_fullscreen: cairo_image_surface;

	/** The spiral layout layoutbox icon. */
	layout_spiral: cairo_image_surface;

	/** The dwindle layout layoutbox icon. */
	layout_dwindle: cairo_image_surface;

	/** The tile layout layoutbox icon. */
	layout_tile: cairo_image_surface;

	/** The tile top layout layoutbox icon. */
	layout_tiletop: cairo_image_surface;

	/** The tile bottom layout layoutbox icon. */
	layout_tilebottom: cairo_image_surface;

	/** The tile left layout layoutbox icon. */
	layout_tileleft: cairo_image_surface;
	// #endregion

	// #region awful.permissions
	/** Honor the screen padding when maximizing. */
	maximized_honor_padding: boolean;

	/** Hide the border on fullscreen clients. */
	fullscreen_hide_border: boolean;

	/** Hide the border on maximized clients. */
	maximized_hide_border: boolean;
	// #endregion

	// #region awful.prompt
	/** The prompt cursor foreground color. */
	prompt_fg_cursor: AwesomeColor;

	/** The prompt cursor background color. */
	prompt_bg_cursor: AwesomeColor;

	/** The prompt text font. */
	prompt_font: string;
	// #endregion

	// #region awful.screenshot
	/** The screenshot interactive frame color. */
	screenshot_frame_color: AwesomeColor;

	/** The screenshot interactive frame shape. */
	screenshot_frame_shape: shape;
	// #endregion
}
