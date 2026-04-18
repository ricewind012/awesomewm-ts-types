interface ColorPattern<T extends string> {
	type: T;
	from: [number, number, number];
	to: [number, number, number];
}

/**
 * @noSelf
 */
export interface GearsColor {
	(): cairo_solid_pattern;

	/**
	 * Parse a HTML-color. This function can parse colors like `#rrggbb` and
	 * `#rrggbbaa` and also `red`. Max 4 chars per channel.
	 *
	 * @param col The color to parse
	 * @returns
	 * - `number` between 0 and 1 for the 'red' value (1st channel)
	 * - `number` between 0 and 1 for the 'green' value (2nd channel)
	 * - `number` between 0 and 1 for the 'blue' value (3rd channel)
	 * - `number` between 0 and 1 for the 'opacity' value (4th channel). If the
	 *   incoming color code only has 3 values (only rgb, not opacity) the 4th
	 *   return value is 1.
	 * - `nil` for all numbers if input is incorrect
	 */
	parse_color(
		col: string,
	): LuaMultiReturn<
		[
			number | undefined,
			number | undefined,
			number | undefined,
			number | undefined,
		]
	>;

	/**
	 * Create a solid pattern
	 *
	 * @param col The color for the pattern
	 * @returns a cairo pattern object
	 */
	create_solid_pattern(col: string): cairo_solid_pattern;

	/**
	 * Create an image pattern from a png file
	 *
	 * @param file The filename of the file
	 * @returns a cairo pattern object
	 */
	create_png_pattern(file: string): cairo_solid_pattern;

	/**
	 * Create a linear pattern object. The pattern is created from a string.
	 * This string should have the following form: `"x0, y0:x1, y1:<stops>"`.
	 * Alternatively, the pattern can be specified as a table:
	 *
	 * ```lua
	 * { type = "linear", from = { x0, y0 }, to = { x1, y1 },
	 *   stops = { <stops> } }
	 * ```
	 *
	 * `x0,y0` and `x1,y1` are the start and stop point of the pattern. For the
	 * explanation of `<stops>`, see {@link create_pattern}.
	 *
	 * @param arg The argument describing the pattern.
	 * @returns a cairo pattern object
	 */
	create_linear_pattern(
		arg: string | ColorPattern<"linear">,
	): cairo_solid_pattern;

	/**
	 * Create a radial pattern object. The pattern is created from a string. This string should have the following form: `"x0, y0, r0:x1, y1, r1:<stops>"`. Alternatively, the pattern can be specified as a table:
	 *
	 * ```lua
	 * { type = "radial", from = { x0, y0, r0 }, to = { x1, y1, r1 },
	 *   stops = { <stops> } }
	 * ```
	 *
	 * `x0,y0` and `x1,y1` are the start and stop point of the pattern. `r0` and
	 * `r1` are the radii of the start / stop circle. For the explanation of
	 * `<stops>`, see {@link create_pattern}.
	 *
	 * @param arg The argument describing the pattern
	 * @returns a cairo pattern object
	 */
	create_radial_pattern(
		arg: string | ColorPattern<"radial">,
	): cairo_solid_pattern;

	/**
	 * Create a pattern from a given string. For full documentation of this
	 * function, please refer to {@link create_pattern}. The difference between
	 * {@link create_pattern} and this function is that this function does not
	 * insert the generated objects into the pattern cache. Thus, you are
	 * allowed to modify the returned object.
	 *
	 * @param col The string describing the pattern.
	 * @returns a cairo pattern object
	 */
	create_pattern_uncached(col: string): cairo_solid_pattern;

	/**
	 * Create a pattern from a given string.
	 *
	 * @returns a cairo pattern object
	 */
	create_pattern(): cairo_solid_pattern;

	/**
	 * Check if a pattern is opaque. A pattern is transparent if the background
	 * on which it gets drawn (with operator OVER) doesn't influence the visual
	 * result.
	 *
	 * @param col An argument that {@link create_pattern} accepts.
	 * @returns The pattern if it is surely opaque, else `nil`.
	 */
	create_opaque_pattern(
		col: cairo_solid_pattern,
	): cairo_solid_pattern | undefined;

	/**
	 * Fill non-transparent area of an image with a given color.
	 *
	 * @param image Image or path to it.
	 * @param new_color New color.
	 * @returns Recolored image.
	 */
	recolor_image(
		image: string | awesome_image,
		new_color: string | cairo_solid_pattern,
	): awesome_image;

	/**
	 * Take an input color and set a different opacity.
	 *
	 * @param input The input color.
	 * @param opacity A floating point number between 0 and 1.
	 *
	 * @returns The new color if successful or `input` if invalid.
	 */
	change_opacity(
		input: string | cairo_solid_pattern,
		opacity: number,
	): cairo_solid_pattern;

	/**
	 * Convert a color back to an hexadecimal color code. This takes an input
	 * color, pattern or gradient and attempt to convert it to a color. If this
	 * fails, `fallback` is returned. This is useful when a color needs to be
	 * concatenated into a Pango markup string.
	 *
	 * @param color Note that only solid colors can be convedted to the RGBA
	 * format.
	 * @param fallback The color to return if color cannot be converted to a
	 * string.
	 *
	 * @returns The color in #rrggbbaa format.
	 */
	to_rgba_string(
		color: string | cairo_solid_pattern,
		fallback?: string | cairo_solid_pattern,
	): string;

	/**
	 * Get a valid color for Pango markup
	 *
	 * @param check_color The color to check.
	 * @param fallback The color to return if the first is invalid. (default:
	 * black)
	 *
	 * @returns color if it is valid, else `fallback`.
	 */
	ensure_pango_color(
		check_color: cairo_solid_pattern,
		fallback: string,
	): string;
}
