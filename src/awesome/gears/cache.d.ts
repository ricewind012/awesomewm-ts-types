// biome-ignore lint/suspicious/noExplicitAny: intentional
type GearsCacheCallback = (...args: any[]) => void;

interface GearsCacheObject<T extends GearsCacheCallback> {
	get(...args: Parameters<T>): unknown;
}

/**
 * Cache object with data that can be garbage-collected.
 * @noSelf
 */
export interface GearsCache {
	/**
	 * Create a new cache object. A cache keeps some data that can be
	 * garbage-collected at any time, but might be useful to keep.
	 * @param creation_cb Callback that is used for creating missing cache
	 * entries.
	 */
	<T extends GearsCacheCallback>(creation_cb: T): GearsCacheObject<T>;
	new: <T extends GearsCacheCallback>(creation_cb: T) => GearsCacheObject<T>;
}
