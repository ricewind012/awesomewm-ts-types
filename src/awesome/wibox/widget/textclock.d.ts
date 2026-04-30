interface WiboxWidgetTextClockProps extends WiboxWidgetTextBoxProps {
	/**
	 * Set the clock's format.
	 */
	format?: string;

	/**
	 * Set the clock's timezone. e.g. "Z" for UTC, "±hh:mm" or
	 * "Europe/Amsterdam". See `GTimeZone` in GLib docs.
	 */
	timezone?: string;

	/**
	 * Set the clock's refresh rate.
	 */
	refresh?: number;
}

interface WiboxWidgetTextClock extends WiboxWidgetTextBox {
	/**
	 * Force a textclock to update now.
	 */
	force_update(): void;
}

/**
 * @noSelf
 */
interface WiboxWidgetTextClockConstructor {
	/**
	 * @see [GLib
	 * docs](https://developer.gnome.org/glib/stable/glib-GDateTime.html#g-date-time-format)
	 */
	(props: WiboxWidgetTextClockProps): WiboxWidgetTextClock;
}
