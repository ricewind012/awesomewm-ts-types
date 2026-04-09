/**
 * @noSelf
 */
interface BeautifulGtk {
	/**
	 * Get GTK+3 theme variables from GtkStyleCotext.
	 */
	get_theme_variables(): {
		/** Label font-size */
		font_size: string;
		/** Label font-family */
		font_family: string;
		/** Window bg */
		bg_color: string;
		/** Window fg */
		fg_color: string;
		/** Entry bg */
		base_color: string;
		/** Entry fg */
		text_color: string;
		/** Button bg */
		button_bg_color: string;
		/** Button fg */
		button_fg_color: string;
		/** Button border-color */
		button_border_color: string;
		/** Button border-radius */
		button_border_radius: string;
		/** Button border-top-width */
		button_border_width: string;
		/** ToggleButton bg */
		selected_bg_color: string;
		/** ToggleButton fg */
		selected_fg_color: string;
		/** HeaderBar bg */
		menubar_bg_color: string;
		/** HeaderBar fg */
		menubar_fg_color: string;
		/** HeaderBar > Button bg */
		header_button_bg_color: string;
		/** HeaderBar > Button fg */
		header_button_fg_color: string;
		/** HeaderBar > Button border-color */
		header_button_border_color: string;
		/** destructive Button bg */
		error_color: string;
		/** destructive Button bg */
		error_bg_color: string;
		/** destructive Button fg */
		error_fg_color: string;
		/**  */
		warning_color: string;
		/**  */
		warning_bg_color: string;
		/**  */
		warning_fg_color: string;
		/**  */
		success_color: string;
		/**  */
		success_bg_color: string;
		/**  */
		success_fg_color: string;
		/**  */
		tooltip_bg_color: string;
		/**  */
		tooltip_fg_color: string;
		/**  */
		osd_bg_color: string;
		/**  */
		osd_fg_color: string;
		/**  */
		osd_border_color: string;
		/** HeaderBar bg */
		wm_bg_color: string;
		/** ToggleButton bg */
		wm_border_focused_color: string;
		/** HeaderBar bg */
		wm_border_unfocused_color: string;
		/** ToggleButton fg */
		wm_title_focused_color: string;
		/** HeaderBar fg */
		wm_title_unfocused_color: string;
		/** ToggleButton fg */
		wm_icons_focused_color: string;
		/** HeaderBar fg */
		wm_icons_unfocused_color: string;
	};
}
