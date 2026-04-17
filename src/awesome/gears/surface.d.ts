/**
 * @noSelf
 */
interface GearsSurface {
	/**
	 * Try to convert the argument into an lgi cairo surface. This is usually
	 * needed for loading images by file name. Errors are handled via
	 * [gears.debug.print_error](https://awesomewm.org/apidoc/utility_libraries/gears.debug.html#print_error).
	 *
	 * @param surface The surface to load or `nil`.
	 */
	(surface: any): any | undefined;

	/**
	 * Try to convert the argument into an lgi cairo surface. This is usually
	 * needed for loading images by file name.
	 *
	 * @param surface The surface to load or nil
	 * @param def The default value to return on error; when `nil`, then a
	 * surface in an error state is returned.
	 *
	 * @returns
	 * - The loaded surface, or the replacement default
	 * - An error message, or nil on success.
	 */
	load_uncached_silently(
		surface: any,
		def: any,
	): LuaMultiReturn<[any, string | undefined]>;

	/**
	 * Try to convert the argument into an lgi cairo surface. This is usually
	 * needed for loading images by file name and uses a cache. In contrast to
	 * `load()`, errors are returned to the caller.
	 *
	 * @param surface The surface to load or `nil`.
	 * @param def The default value to return on error; when `nil`, then a
	 * surface in an error state is returned.
	 *
	 * @returns
	 * - The loaded surface, or the replacement default, or `nil` if called with `nil`.
	 * - An error message, or `nil` on success.
	 */
	load_silently(
		surface: any,
		def: any,
	): LuaMultiReturn<[any, string | undefined]>;

	/**
	 * Try to convert the argument into an lgi cairo surface. This is usually
	 * needed for loading images by file name. Errors are handled via
	 * [gears.debug.print_error](https://awesomewm.org/apidoc/utility_libraries/gears.debug.html#print_error).
	 *
	 * @param surface The surface to load or `nil`.
	 */
	load_uncached(surface: any): any | undefined;

	/**
	 * Get the size of a cairo surface
	 *
	 * @param surf The surface you are interested in
	 */
	get_size(surf: any): any;

	/**
	 * Create a copy of a cairo surface modified to avoid unintended
	 * side-effects. This function allows to create a copy of a cairo surface.
	 * This copy can then be freely modified. The surface returned will be as
	 * compatible as possible to the input surface. For example, it will likely
	 * be of the same surface type as the input. The details are explained in
	 * the `create_similar` function on a cairo surface.
	 *
	 * @param s Source surface.
	 */
	duplicate_surface(s: any): any;

	/**
	 * Create a surface from a
	 * [gears.shape](https://awesomewm.org/apidoc/theme_related_libraries/gears.shape.html#).
	 * Any additional parameters will be passed to the shape function
	 *
	 * @param width The surface width
	 * @param height The surface height
	 * @param shape A `gears.shape` compatible function
	 * @param shape_color The shape color or pattern
	 * @param bg_color The surface background color
	 *
	 * @returns the new surface
	 */
	load_from_shape(
		width: number,
		height: number,
		shape: shape,
		shape_color?: cairo_solid_pattern,
		bg_color?: cairo_solid_pattern,
	): any;

	/**
	 * Apply a shape to a client or a wibox.
	 *
	 * If the wibox or client size change, this function need to be called
	 * again.
	 *
	 * @param draw A wibox or a client.
	 * @param shape The shape.
	 * @param args Any additional parameters will be passed to the shape
	 * function.
	 */
	apply_shape_bounding(draw: AwesomeClient, shape: shape, ...args: any[]): void;

	/**
	 * Crop a surface on its edges.
	 */
	crop_surface(args: {
		/**
		 * Left cutoff, cannot be negative
		 */
		left?: number;

		/**
		 * Right cutoff, cannot be negative
		 */
		right?: number;

		/**
		 * Top cutoff, cannot be negative
		 */
		top?: number;

		/**
		 * Bottom cutoff, cannot be negative
		 */
		bottom?: number;

		/**
		 * Ratio to crop the image to. If edge cutoffs and ratio are given, the
		 * edge cutoffs are computed first. Using ratio will crop the center out
		 * of an image, similar to what "zoomed-fill" does in wallpaper setter
		 * programs. Cannot be negative
		 */
		ratio?: number;

		/**
		 * The surface to crop
		 */
		surface?: any;
	}): any;
}
