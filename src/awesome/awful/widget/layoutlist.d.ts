type AwfulWidgetLayoutListSource = (
	s: AwesomeScreen,
	metadata: table,
) => AwesomeLayout[];

interface AwfulWidgetLayoutListSharedProps {
	// TODO: XD
	/**
	 * A table with buttons binding to set.
	 */
	buttons: AwfulButtonInstance[];

	/**
	 * Set the layoutlist layout.
	 */
	base_layout: BaseWidget;

	/**
	 * The layoutlist screen.
	 */
	screen: AwesomeScreen | string;

	/**
	 * A template used to generate the individual tag widgets.
	 */
	widget_template?: BaseWidget;

	/**
	 * A function to gather the group of layouts.
	 *
	 * @param s The layoutlist screen.
	 * @param metadata Various metadata
	 * @returns the list of layouts.
	 */
	source: AwfulWidgetLayoutListSource;
}

interface AwfulWidgetLayoutList
	extends BaseWidget,
		AwfulWidgetLayoutListSharedProps {
	/**
	 * The current number of layouts.
	 */
	readonly count: number;

	/**
	 * The currently selected layout.
	 */
	readonly current_layout: AwesomeLayout | undefined;
}

interface AwfulWidgetLayoutListStyle {
	disable_icon?: string;
	disable_name?: string;
	fg_normal?: AwesomeColor;
	bg_normal?: AwesomeColor;
	fg_selected?: AwesomeColor;
	bg_selected?: AwesomeColor;
	font?: string;
	font_selected?: string;
	align?: HorizontalAlignment;
	spacing?: number;
	shape?: shape;
	shape_border_width?: number;
	shape_border_color?: AwesomeColor;
	shape_selected?: shape;
	shape_border_width_selected?: number;
	shape_border_color_selected?: AwesomeColor;
}

/**
 * @noSelf
 */
interface AwfulWidgetLayoutListConstructor {
	/**
	 * Create a layout list.
	 */
	(
		args: AwfulWidgetLayoutListSharedProps & {
			/**
			 * The style overrides default theme.
			 */
			style?: AwfulWidgetLayoutListStyle;
		},
	): AwfulWidgetLayoutList;

	source: {
		/**
		 * All tags for the defined screen ordered by indices
		 */
		for_screen: (s: AwesomeScreen) => AwesomeLayout[];

		/**
		 * All tags for the defined screen ordered by indices
		 */
		current_screen: AwesomeLayout[];

		/**
		 * All tags for the defined screen ordered by indices
		 */
		default_layouts: AwesomeLayout[];
	};
}
