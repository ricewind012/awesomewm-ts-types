interface GearsMatrixInstance {
	/**
	 * Translate this matrix
	 *
	 * @param x The translation in x direction.
	 * @param y The translation in y direction.
	 *
	 * @returns A new matrix describing the new transformation.
	 */
	translate(x: number, y: number): GearsMatrixInstance;

	/**
	 * Scale this matrix
	 *
	 * @param sx The scaling in x direction.
	 * @param sy The scaling in y direction.
	 *
	 * @returns A new matrix describing the new transformation.
	 */
	scale(sx: number, sy: number): GearsMatrixInstance;

	/**
	 * Rotate this matrix
	 *
	 * @param angle
	 *
	 * @returns A new matrix describing the new transformation.
	 */
	rotate(angle: number): GearsMatrixInstance;

	/**
	 * Rotate a shape from a custom point
	 *
	 * @param x The horizontal rotation point
	 * @param y The vertical rotation point
	 * @param angle The angle (in radiant: -2math.pi to 2math.pi)
	 *
	 * @returns A transformation object
	 */
	rotate_at(x: number, y: number, angle: number): any;

	/**
	 * Invert this matrix
	 *
	 * @returns A new matrix describing the inverse transformation.
	 */
	invert(): GearsMatrixInstance;

	/**
	 * Multiply this matrix with another matrix.
	 * The resulting matrix describes a transformation that is equivalent to first
	 * applying this transformation and then the transformation from `other`.
	 * Note that this function can also be called by directly multiplicating two
	 * matrix instances: `a * b == a:multiply(b)`.
	 *
	 * @param other The other matrix to multiply with.
	 *
	 * @returns The multiplication result.
	 */
	multiply(other: GearsMatrixInstance | cairo.Matrix): any;

	/**
	 * Check if two matrices are equal.
	 * Note that this function call also be called by directly comparing two
	 * matrix instances: `a == b`
	 *
	 * @param other The matrix to compare with.
	 *
	 * @returns True if this and the other matrix are equal.
	 */
	equals(other: GearsMatrixInstance | cairo.Matrix): boolean;

	/**
	 * Get a string representation of this matrix
	 *
	 * @returns A string showing this matrix in column form.
	 */
	tostring(): string;

	/**
	 * Transform a distance by this matrix. The difference to
	 * {@link transform_point} is that the translation part of this matrix is
	 * ignored.
	 *
	 * @param x The x coordinate of the point.
	 * @param y The y coordinate of the point.
	 *
	 * @returns number
	 *         The x coordinate of the transformed point.
	 *
	 *            number
	 *         The x coordinate of the transformed point.
	 */
	transform_distance(x: number, y: number): LuaMultiReturn<[number, number]>;

	/**
	 * Transform a point by this matrix.
	 *
	 * @param x
	 * @param y
	 *
	 * @returns number
	 *         The x coordinate of the transformed point.
	 *
	 *            number
	 *         The y coordinate of the transformed point.
	 */
	transform_point(x: number, y: number): LuaMultiReturn<[number, number]>;

	/**
	 * Calculate a bounding rectangle for transforming a rectangle by a matrix.
	 *
	 * @param x The x coordinate of the rectangle.
	 * @param y The y coordinate of the rectangle.
	 * @param width The width of the rectangle.
	 * @param height The height of the rectangle.
	 *
	 * @returns number
	 *         X coordinate of the bounding rectangle.
	 *
	 *            number
	 *         Y coordinate of the bounding rectangle.
	 *
	 *            number
	 *         Width of the bounding rectangle.
	 *
	 *            number
	 *         Height of the bounding rectangle.
	 */
	transform_rectangle(
		x: number,
		y: number,
		width: number,
		height: number,
	): LuaMultiReturn<[number, number, number, number]>;

	/**
	 * Convert to a cairo matrix
	 *
	 * @returns A cairo matrix describing the same transformation.
	 */
	to_cairo_matrix(): cairo.Matrix;

	/**
	 * Convert to a cairo matrix
	 *
	 * @param mat A cairo matrix describing the sought transformation
	 *
	 * @returns A matrix instance describing the same transformation.
	 */
	from_cairo_matrix(mat: cairo.Matrix): GearsMatrixInstance;
}

/**
 * @noSelf
 */
interface GearsMatrix {
	identity: GearsMatrixInstance;
}
