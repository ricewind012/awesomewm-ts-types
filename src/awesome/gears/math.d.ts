/**
 * Various math related functions.
 * @noSelf
 */
interface GearsMath {
	/**
	 * Return all subsets of a specific set. This function, giving a set, will
	 * return all subset it.
	 *
	 * For example, if we consider a set with value `{ 10, 15, 34 }`, it will
	 * return a table containing 2^n set `{ }, { 10 }, { 15 }, { 34 }, { 10, 15
	 * }, { 10, 34 }`, etc.
	 *
	 * @param set A set.
	 *
	 * @returns A table with all subset.
	 */
	subsets(set: number[]): number[][];

	/**
	 * Make i cycle.
	 *
	 * @param t A length. Must be greater than zero.
	 * @param i An absolute index to fit into `#t`.
	 *
	 * @returns An integer in (1, t) or nil if t is less than or equal to zero.
	 */
	cycle(t: number, i: number): number | null;

	/**
	 * Round a number to an integer.
	 *
	 * @param x
	 *
	 * @returns integer
	 */
	round(x: number): number;

	/**
	 * Return the sign of the number `x` return 1 if `x` is positive, -1 if
	 * negative and 0 if `x` is 0
	 *
	 * @param x
	 *
	 * @returns integer
	 */
	sign(x: number): number;
}
