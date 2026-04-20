interface WiboxWidgetTextBoxProps {
	/**
	 * Set the HTML text of the textbox.
	 *
	 * The main difference between {@link text} and markup is that markup is
	 * able to render a small subset of HTML tags. See the [Pango
	 * markup](https://docs.gtk.org/Pango/pango_markup.html) documentation to
	 * see what is and isn't valid in this property.
	 */
	markup?: string;

	/**
	 * Set a textbox plain text.
	 */
	text?: string;

	/**
	 * Set the text ellipsize mode.
	 */
	ellipsize?: "start" | "middle" | "end" | "none";

	/**
	 * Set a textbox wrap mode.
	 */
	wrap?: "word" | "char" | "word_char";

	/**
	 * The vertical text alignment.
	 */
	valign?: VerticalAlignment;

	/**
	 * The horizontal text alignment.
	 */
	halign?: HorizontalAlignment;

	/**
	 * Set a textbox font.
	 */
	font?: string | lgi.Pango.FontDescription;

	/**
	 * Set the distance between the lines.
	 */
	line_spacing_factor?: number;

	/**
	 * Justify the text when there is more space.
	 */
	justify?: boolean;

	/**
	 * How to indent text with multiple lines.
	 */
	indent?: number;
}

interface WiboxWidgetTextBox extends BaseWidget {
	/**
	 * Get the preferred size of a textbox. This returns the size that the
	 * textbox would use if infinite space were available.
	 *
	 * @param s The screen on which the textbox will be displayed.
	 *
	 * @returns
	 * - `number` The preferred width.
	 * - `number` The preferred height.
	 */
	get_preferred_size(s: number): LuaMultiReturn<[number, number]>;

	/**
	 * Get the preferred height of a textbox at a given width. This returns the
	 * height that the textbox would use when it is limited to the given width.
	 *
	 * @param width The available width.
	 * @param s The screen on which the textbox will be displayed.
	 *
	 * @returns The needed height.
	 */
	get_height_for_width(width: number, s: number): number;

	/**
	 * Get the preferred size of a textbox. This returns the size that the
	 * textbox would use if infinite space were available.
	 *
	 * @param dpi The DPI value to render at.
	 *
	 * @returns
	 * - `number` The preferred width.
	 * - `number` The preferred height.
	 */
	get_preferred_size_at_dpi(dpi: number): LuaMultiReturn<[number, number]>;

	/**
	 * Get the preferred height of a textbox at a given width. This returns the
	 * height that the textbox would use when it is limited to the given width.
	 *
	 * @param width The available width.
	 * @param dpi The DPI value to render at.
	 *
	 * @returns The needed height.
	 */
	get_height_for_width_at_dpi(width: number, dpi: number): number;

	/**
	 * Set the text of the textbox (with [Pango
	 * markup](https://docs.gtk.org/Pango/pango_markup.html)).
	 *
	 * @param text The text to set. This can contain pango markup (e.g.
	 * `<b>bold</b>`). You can use `gears.string.escape` to escape parts of it.
	 *
	 * @returns true
	 */
	set_markup_silently(text: string): boolean;
}

/**
 * @noSelf
 */
interface WiboxWidgetTextBoxConstructor {
	(props: WiboxWidgetTextBoxProps): WiboxWidgetTextBox;
}
