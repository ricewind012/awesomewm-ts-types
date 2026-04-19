/// <reference types="../shared.d.ts" />

/**
 * The object oriented programming base class used by various Awesome widgets
 * and components. It provide basic observer pattern, signaling and dynamic
 * properties.
 *
 * It provides basic observer pattern, signaling and dynamic properties.
 * @noSelf
 */
interface GearsObject {
	<S extends string, M extends SignalMap<S>, C extends {}>(args: {
		/**
		 * Automatically call getters and setters
		 */
		enable_properties?: boolean;

		/**
		 * Generate "property::xxxx" signals when an unknown property is set.
		 */
		enable_auto_signals?: boolean;

		class?: C;
	}): SignalObject<S, M> & C;

	/**
	 * Helper function to get the module name out of {@link debug.getinfo}.
	 *
	 * @param level Level for `debug.getinfo(level, "S")`. Typically 2 or 3.
	 * @returns The module name, e.g. "wibox.container.background".
	 */
	modulename(level?: number): string;
}
