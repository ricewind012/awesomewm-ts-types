/**
 * @param t The tag to accept/reject.
 * @returns `true` if the tag is accepted or `false` if it is rejected.
 */
type AwfulWidgetTagListFilter = (t: AwesomeTag) => boolean;

type AwfulWidgetTagListSource = (
	s: AwesomeScreen,
	metadata: table,
) => AwesomeClient[];

interface AwfulWidgetTagListSharedProps {
	// TODO: XD
	/**
	 * A table with buttons binding to set.
	 */
	buttons: AwfulButtonInstance[];

	/**
	 * Set the taglist layout.
	 */
	base_layout: BaseWidget;

	/**
	 * The taglist screen.
	 */
	screen: AwesomeScreen | string;

	/**
	 * A function to narrow down the list of clients.
	 */
	filter: AwfulWidgetTagListFilter;

	/**
	 * A function called when the taglist is refreshed.
	 *
	 * This is a very low level API, prefer {@link widget_template} whenever you
	 * can.
	 */
	update_function?: (
		layout: BaseWidget,
		buttons: AwfulButtonInstance[],
		label: string,
		data: table,
		clients: AwesomeClient[],
		metadata: table,
	) => void;

	/**
	 * A template used to generate the individual tag widgets.
	 */
	widget_template?: BaseWidget;

	/**
	 * A function to gather the group of tags.
	 *
	 * @param s The taglist screen.
	 * @param metadata Various metadata
	 * @returns the list of tags.
	 */
	source: AwfulWidgetTagListSource;
}

interface AwfulWidgetTagList extends BaseWidget, AwfulWidgetTagListSharedProps {
	/**
	 * The current number of clients.
	 */
	readonly count: number;
}

interface AwfulWidgetTagListStyle {
	fg_focus?: AwesomeColor;
	bg_focus?: AwesomeColor;
	fg_urgent?: AwesomeColor;
	bg_urgent?: AwesomeColor;
	bg_occupied?: AwesomeColor;
	fg_occupied?: AwesomeColor;
	bg_empty?: AwesomeColor;
	fg_empty?: AwesomeColor;
	bg_volatile?: AwesomeColor;
	fg_volatile?: AwesomeColor;
	squares_sel?: string;
	squares_unsel?: string;
	squares_sel_empty?: string;
	squares_unsel_empty?: string;
	squares_resize?: boolean;
	disable_icon?: string;
	font?: string;
	spacing?: number;
	shape?: shape;
	shape_border_width?: number;
	shape_border_color?: AwesomeColor;
	shape_empty?: shape;
	shape_border_width_empty?: number;
	border_color_empty?: AwesomeColor;
	shape_focus?: shape;
	shape_border_width_focus?: number;
	shape_border_color_focus?: AwesomeColor;
	shape_urgent?: shape;
	shape_border_width_urgent?: number;
	shape_border_color_urgent?: AwesomeColor;
	shape_volatile?: shape;
	shape_border_width_volatile?: number;
	shape_border_color_volatile?: AwesomeColor;
}

/**
 * @noSelf
 */
interface AwfulWidgetTagListConstructor {
	/**
	 * Create a new taglist widget. The last two arguments (`update_function`
	 * and `layout`) serve to customize the layout of the taglist (eg. to make
	 * it vertical). For that, you will need to copy the
	 * `awful.widget.common.list_update` function, make your changes to it and
	 * pass it as `update_function` here. Also change the layout if the default
	 * is not what you want.
	 */
	(
		args: Partial<AwfulWidgetTagListSharedProps> & {
			/**
			 * Container widget for tag widgets. Default is
			 * `wibox.layout.flex.horizontal`.
			 */
			layout?: AwesomeLayout[];

			/**
			 * The style overrides default theme.
			 */
			style?: AwfulWidgetTagListStyle;
		},
	): AwfulWidgetTagList;

	filter: {
		/**
		 * Filtering function to include all nonempty tags on the screen.
		 */
		noempty: AwfulWidgetTagListFilter;

		/**
		 * Filtering function to include selected tags on the screen.
		 */
		selected: AwfulWidgetTagListFilter;

		/**
		 * Filtering function to include all tags on the screen.
		 */
		all: AwfulWidgetTagListFilter;
	};

	source: {
		/**
		 * All tags for the defined screen ordered by indices
		 */
		for_screen: AwfulWidgetTagListSource;
	};
}
