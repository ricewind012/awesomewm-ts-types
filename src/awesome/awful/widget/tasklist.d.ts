/**
 * @param c The client to accept or reject.
 * @param s The value of the tasklist `screen` property.
 * @returns `true` if the client is accepted or `false` if it is rejected.
 */
type AwfulWidgetTaskListFilter = (
	c: AwesomeClient,
	s: AwesomeScreen,
) => boolean;

type AwfulWidgetTaskListSource = (
	s: AwesomeScreen,
	metadata: table,
) => AwesomeClient[];

interface AwfulWidgetTaskListSharedProps {
	// TODO: XD
	/**
	 * A table with buttons binding to set.
	 */
	buttons: AwfulButtonInstance[];

	/**
	 * Set the tasklist layout.
	 */
	base_layout: BaseWidget;

	/**
	 * The tasklist screen.
	 */
	screen: AwesomeScreen | string;

	/**
	 * A function to narrow down the list of clients.
	 */
	filter: AwfulWidgetTaskListFilter;

	/**
	 * A function called when the tasklist is refreshed.
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
	 * A template for creating the client widgets.
	 */
	widget_template?: BaseWidget;

	/**
	 * A function to gather the clients to display.
	 *
	 * @param s The tasklist screen.
	 * @param metadata Various metadata
	 * @returns the list of clients.
	 */
	source: AwfulWidgetTaskListSource;
}

interface AwfulWidgetTaskList
	extends BaseWidget,
		AwfulWidgetTaskListSharedProps {
	/**
	 * The current number of clients.
	 */
	readonly count: number;
}

interface AwfulWidgetTaskListStyle {
	fg_normal?: string;
	bg_normal?: string;
	fg_focus?: string;
	bg_focus?: string;
	fg_urgent?: string;
	bg_urgent?: string;
	fg_minimize?: string;
	bg_minimize?: string;
	bg_image_normal?: string;
	bg_image_focus?: string;
	bg_image_urgent?: string;
	bg_image_minimize?: string;
	disable_icon?: boolean;
	icon_size?: number;
	sticky?: string;
	ontop?: string;
	above?: string;
	below?: string;
	floating?: string;
	maximized?: string;
	maximized_horizontal?: string;
	maximized_vertical?: string;
	disable_task_name?: boolean;
	font?: string;
	align?: string;
	font_focus?: string;
	font_minimized?: string;
	font_urgent?: string;
	spacing?: number;
	shape?: shape;
	shape_border_width?: number;
	shape_border_color?: string;
	shape_focus?: shape;
	shape_border_width_focus?: number;
	shape_border_color_focus?: string;
	shape_minimized?: shape;
	shape_border_width_minimized?: number;
	shape_border_color_minimized?: string;
	shape_urgent?: shape;
	shape_border_width_urgent?: number;
	shape_border_color_urgent?: string;
	minimized?: string;
}

/**
 * @noSelf
 */
interface AwfulWidgetTaskListConstructor {
	/**
	 * Create a new tasklist widget. The last two arguments (`update_function`
	 * and `layout`) serve to customize the layout of the tasklist (eg. to make
	 * it vertical). For that, you will need to copy the
	 * `awful.widget.common.list_update` function, make your changes to it and
	 * pass it as `update_function` here. Also change the layout if the default
	 * is not what you want.
	 */
	(
		args: Partial<AwfulWidgetTaskListSharedProps> & {
			/**
			 * Container widget for tag widgets. Default is
			 * `wibox.layout.flex.horizontal`.
			 */
			layout?: AwesomeLayout[];

			/**
			 * The style overrides default theme.
			 */
			style?: AwfulWidgetTaskListStyle;
		},
	): AwfulWidgetTaskList;

	filter: {
		/**
		 * Filtering function to include all clients.
		 */
		allscreen: AwfulWidgetTaskListFilter;

		/**
		 * Filtering function to include the clients from all tags on the
		 * screen.
		 */
		alltags: AwfulWidgetTaskListFilter;

		/**
		 * Filtering function to include only the clients from currently
		 * selected tags.
		 */
		currenttags: AwfulWidgetTaskListFilter;

		/**
		 * Filtering function to include only the minimized clients from
		 * currently selected tags.
		 */
		minimizedcurrenttags: AwfulWidgetTaskListFilter;

		/**
		 * Filtering function to include only the currently focused client.
		 */
		focused: AwfulWidgetTaskListFilter;
	};

	screen: {
		for_screen: AwfulWidgetTaskListSource;
	};
}
