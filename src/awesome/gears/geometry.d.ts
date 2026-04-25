/**
 * Helper functions used to compute geometries.
 * @noSelf
 */
interface GearsGeometry {
	rectangle: {
		/**
		 * Get the square distance between a rectangle and a point.
		 *
		 * @param geom A rectangle
		 * @param x X coordinate of point
		 * @param y Y coordinate of point
		 *
		 * @returns The squared distance of the rectangle to the provided point.
		 */
		get_square_distance(geom: Geometry, x: number, y: number): number;

		/**
		 * Return the closest rectangle from `list` for a given point.
		 *
		 * @param list A list of geometry tables.e
		 * @param x The x coordinate.
		 * @param y The y coordinate.
		 *
		 * @returns The key from the closest geometry.
		 */
		get_closest_by_coord(
			list: Geometry[],
			x: number,
			y: number,
		): number | undefined;

		/**
		 * Return the rectangle containing the [x, y] point.
		 *
		 * Note that if multiple element from the geometry list contains the
		 * point, the returned result is nondeterministic.
		 *
		 * @param list A list of geometry tables.e
		 * @param x The x coordinate.
		 * @param y The y coordinate.
		 *
		 * @returns The key from the closest geometry. In case no result is
		 * found, `nil` is returned.
		 */
		get_by_coord(list: Geometry[], x: number, y: number): number | undefined;

		/**
		 * Get the nearest rectangle in the given direction.
		 *
		 * @param dir The direction.
		 * @param recttbl A table of rectangle specifications.
		 * @param cur The current rectangle.
		 *
		 * @returns The index for the rectangle in `recttbl` closer to `cur` in
		 * the given direction. `nil` if none found.
		 */
		get_in_direction(
			dir: Direction,
			recttbl: Geometry,
			cur: Geometry,
		): number | undefined;

		/**
		 * Return true if the area are exactly identical.
		 *
		 * @param a The area.
		 * @param b The other area.
		 *
		 * @returns If the areas are identical.
		 */
		are_equal(a: Geometry, b: Geometry): boolean;

		/**
		 * Return if rectangle `a` is within rectangle `b`.
		 *
		 * This includes the edges. 100% of `a` area has to be within `b` for
		 * this function to return true. If you wish to know if any part of `a`
		 * intersect with `b`, use {@link get_intersection}.
		 *
		 * @param a The smaller area.
		 * @param b The larger areal
		 *
		 * @returns If the areas are identical.
		 */
		is_inside(a: Geometry, b: Geometry): boolean;

		/**
		 * Check if an area intersect another area.
		 *
		 * @param a The area.
		 * @param b The other area.
		 *
		 * @returns True if they intersect, false otherwise.
		 */
		area_intersect_area(a: Geometry, b: Geometry): boolean;

		/**
		 * Get the intersect area between `a` and `b`.
		 *
		 * @param a The area.
		 * @param b The other area.
		 *
		 * @returns The intersect area.
		 */
		get_intersection(a: Geometry, b: Geometry): table;

		/**
		 * Remove an area from a list, splitting the space between several area
		 * that can overlap.
		 *
		 * @param areas Table of areas.
		 * @param elem Area to remove.
		 *
		 * @returns The new area list.
		 */
		area_remove(areas: table, elem: Geometry): table;
	};
}
