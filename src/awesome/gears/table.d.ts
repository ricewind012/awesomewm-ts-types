/**
 * Various functions to work with tables.
 * @noSelf
 */
export interface GearsTable {
	/**
	 * Join all tables given as arguments. This will iterate over all tables and
	 * insert their entries into a new table.
	 *
	 * @param tables Tables to join.
	 *
	 * @returns A new table containing all entries from the arguments.
	 */
	join<T>(...tables: T[]): T[];

	/**
	 * Override elements in the target table with values from the source table.
	 *
	 * Note that this method doesn't copy entries found in `__index`. Nested tables
	 * are copied by reference and not recursed into.
	 *
	 * @param target The target table. Values from `source` will be copied into this
	 * table.
	 * @param source The source table. Its values will be copied into `target`.
	 * @param raw If `true`, values will be assigned with rawset. This will bypass
	 * metamethods on `target`.
	 *
	 * @returns  The target table.
	 */
	crush<T extends Record<string, unknown>>(
		target: T,
		source: T,
		raw?: boolean,
	): T;

	/**
	 * Pack all elements with an integer key into a new table. While both lua and
	 * luajit implement `__len` over sparse tables, the standard defines it as an
	 * implementation detail.
	 *
	 * This function removes any entries with non-numeric keys.
	 *
	 * @param t A potentially sparse table.
	 *
	 * @returns A packed table with only numeric keys.
	 */
	from_sparse<T extends {}>(t: T): T;

	/**
	 * Check if a table has an item and return its key.
	 *
	 * @param t The table.
	 * @param item The item to look for in values of the table.
	 *
	 * @returns The key of the item.
	 */
	hasitem<T extends {}>(t: T[], item: T): string | number | undefined;

	/**
	 * Get all matching table keys for a `matcher` function.
	 *
	 * @param t The table.
	 * @param matcher A function taking the key and value as arguments and returning
	 * a boolean.
	 * @param ordered If true, only look for continuous numeric keys.
	 * @param max The maximum number of entries to find.
	 *
	 * @returns An ordered table with all the keys or `nil` if none were found.
	 */
	find_keys<K extends string | number, V>(
		t: Record<K, V>,
		matcher: (key: K, value: V) => boolean,
		ordered?: boolean,
		max?: number,
	): Record<K, V> | undefined;

	/**
	 * Find the first key that matches a function.
	 *
	 * @param t The table.
	 * @param matcher A function taking the key and value as arguments and returning
	 * a boolean.
	 * @param ordered If true, only look for continuous numeric keys.
	 *
	 * @returns The table key or `nil`.
	 */
	find_first_key<K extends string | number, V>(
		t: Record<K, V>,
		matcher: (key: K, value: V) => boolean,
		ordered?: boolean,
	): Record<K, V> | undefined;

	/**
	 * Get a sorted table with all keys from a table.
	 *
	 * @param t The table for which the keys to get.
	 *
	 * @returns A table with keys.
	 */
	keys<K extends string | number, V>(t: Record<K, V>): K[];

	/**
	 * Get the number of keys in a table, both integer and string indicies.
	 *
	 * This is functionally equivalent, but faster than `#gears.table.keys(t)`.
	 *
	 * @param t The table for which to count the keys.
	 * @example
	 * ```lua
	 * local tab = { 1, nil, "a", "b", foo = "bar" }
	 * local count = gears.table.count_keys(tab)
	 * print("The table has " .. count .. " keys")
	 * ```
	 *
	 * @returns The number of keys in the table.
	 */
	count_keys(t: Record<string, unknown>): number;

	/**
	 * Filter a table's keys for certain content type.
	 *
	 * @param t The table to retrieve the keys for.
	 * @param types The types to look for.
	 *
	 * @returns A filtered table.
	 */
	keys_filter(t: table, ...types: ("string" | "number" | "nil")[]): table;

	/**
	 * Reverse a table.
	 *
	 * @param t The table to reverse.
	 *
	 * @returns A reversed table.
	 */
	reverse<T extends any[]>(t: T[]): T[];

	/**
	 * Clone a table.
	 *
	 * @param t The table to clone.
	 * @param deep If `true`, recurse into nested tables to create a deep clone.
	 *
	 * @returns A clone of `t`.
	 */
	clone<T extends {}>(t: T, deep?: boolean): T;

	/**
	 * Get the next (or previous) value from a table and cycle if necessary.
	 *
	 * If the table contains the same value multiple type (aka, is not a set), the
	 * `first_index` has to be specified.
	 *
	 * @param t The input table.
	 * @param value The start value. Must be an element of the input table `t`.
	 * @param step_size The amount to increment the index by. When this is negative,
	 * the function will cycle through the table backwards.
	 * @param filter An optional filter function. It receives a value from the table
	 * as parameter and should return a boolean. If it returns `false`, the value is
	 * skipped and `cycle_value` tries the next one.
	 * @param start_at Where to start the lookup from.
	 *
	 * @returns The next eligible value. If no value matches, `nil` is returned.
	 *
	 *            number or `nil`
	 *         If a value is found, this is its index within the input
	 *    table.
	 */
	cycle_value<T>(
		t: T[],
		value: T,
		step_size?: number,
		filter?: (value: T) => boolean,
		start_at?: number,
	): number | undefined;

	/**
	 * Iterate over a table.
	 *
	 * Returns an iterator to cycle through all elements of a table that match a
	 * given criteria, starting from the first element or the given index.
	 *
	 * @param t The table to iterate.
	 * @param filter A function that returns true to indicate a positive match.
	 * @param start Index to start iterating from. Default is 1 (=> start of the
	 * table).
	 *
	 * @returns func
	 */
	iterate<T, F = (value: T) => boolean>(t: T[], filter: F, start?: number): F;

	/**
	 * Merge items from the source table into the target table.
	 *
	 * Note that this only considers the array part of source (same semantics as
	 * [ipairs](https://www.lua.org/manual/5.3/manual.html#pdf-ipairs)). Nested
	 * tables are copied by reference and not recursed into.
	 *
	 * @param target The target table. Values from `source` will be copied into this
	 * table.
	 * @param source The source table. Its values will be caopied into `target`.
	 *
	 * @returns The target table.
	 */
	merge<T>(target: T[], source: T[]): T[];

	/**
	 * Update the `target` table with entries from the `new_target` table.
	 *
	 * @param target The table to modify.
	 * @param new_target The table which contains the new content.
	 * @param identifier A function which take the table entry (either from the
	 * `target` or new table) and return an unique identifier. The identifier type
	 * isn't important as long as `==` works to compare them.
	 * @param merger A function takes the entry to modify as first parameter and the
	 * new entry as second. The function must return the merged value. If none is
	 * provided, there is no attempt to merge the content.
	 * @example
	 * ```lua
	 * local output, added, removed, updated = gears.table.diff_merge(
	 *     output, input, function(v) return v.id end, gears.table.crush,
	 * )
	 * ```
	 *
	 * @returns table
	 *         The target table (for daisy chaining).
	 *
	 *            table
	 *         The new entries.
	 *
	 *            table
	 *         The removed entries.
	 *
	 *            table
	 *         The updated entries.
	 */
	diff_merge<T>(
		target: T[],
		new_target: T[],
		identifier: (entry: T) => T,
		merger?: (entry_to_modify: T, new_entry: T) => T,
	): LuaMultiReturn<[T, T, T, T]>;

	/**
	 * Map a function to a table.
	 *
	 * The function is applied to each value in the table, returning a modified
	 * table.
	 *
	 * @param f The function to be applied to each value in the table.
	 * @param tbl The container table whose values will be operated on.
	 *
	 * @returns table
	 */
	map<T, R>(f: (value: T) => R, tbl: T[]): R[];
}
