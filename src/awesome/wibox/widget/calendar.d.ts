declare enum CalendarEmptyCellMode {
	/**
	 * Merge all cells and display the `empty_widget` or `empty_color`.
	 */
	MERGED = "merged",

	/**
	 * Display one `empty_widget` per day rather than merge them.
	 */
	SPLIT = "split",

	/**
	 * Display the dates from the previous or next month.
	 */
	ROLLING = "rolling",
}

interface CalendarDate {
	year: number;
	month?: number;
	day?: number;
}

interface WiboxWidgetCalendarProps {
	/**
	 * The calendar date.
	 */
	date: CalendarDate | undefined;

	/**
	 * The calendar font.
	 */
	font: string | lgi.Pango.FontDescription;

	/**
	 * The calendar spacing.
	 *
	 * The spacing between cells in the month. The spacing between months in a
	 * year calendar is twice this value.
	 */
	spacing: number;

	/**
	 * Display the calendar week numbers.
	 */
	week_numbers: boolean;

	/**
	 * Start the week on Sunday.
	 */
	start_sunday: boolean;

	/**
	 * Format the weekdays with three characters instead of two
	 */
	long_weekdays: boolean;

	/**
	 * The widget encapsulating function.
	 */
	fn_embed: (
		widget: BaseWidget,
		flag?:
			| "header"
			| "monthheader"
			| "weeknumber"
			| "weekday"
			| "focus"
			| "month"
			| "normal",
		date?: CalendarDate,
	) => BaseWidget | undefined;

	/**
	 * Allow cells to have flexible height
	 */
	flex_height: boolean;

	/**
	 * Set the calendar border width.
	 */
	border_width: number | table;

	/**
	 * Set the calendar border color.
	 */
	border_color: AwesomeColor | table;

	/**
	 * Set the color for the empty cells.
	 */
	empty_color: AwesomeColor | undefined;

	/**
	 * Set a widget for the empty cells.
	 */
	empty_widget: BaseWidget | undefined;

	/**
	 * How should the cells outside of the current month should be handled.
	 */
	empty_cell_mode: CalendarEmptyCellMode;
}

interface WiboxWidgetCalendar extends BaseWidget {}

/**
 * @noSelf
 */
interface WiboxWidgetCalendarConstructor {
	month(props: Partial<WiboxWidgetCalendarProps>): WiboxWidgetCalendar;
	year(props: Partial<WiboxWidgetCalendarProps>): WiboxWidgetCalendar;
}
