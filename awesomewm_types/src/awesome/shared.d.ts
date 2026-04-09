type Direction = "up" | "down" | "left" | "right";

interface Rectangle {
	x: number;
	y: number;
	width: number;
	height: number;
}

type SignalMap = Record<string, (...args: unknown[]) => void>;

interface SignalObject<M extends SignalMap> {
	/**
	 * Add a signal.
	 * @param name A string with the event name.
	 * @param func The function to call.
	 */
	connect_signal<K extends keyof M>(this: void, name: K, func: M[K]): void;

	/**
	 * Remove a signal.
	 * @param name A string with the event name.
	 * @param func The function to call.
	 */
	disconnect_signal<K extends keyof M>(this: void, name: K, func: M[K]): void;

	/**
	 * Emit a signal.
	 * @param name A string with the event name.
	 * @param args The signal arguments.
	 */
	emit_signal<K extends keyof M>(
		this: void,
		name: K,
		...args: Parameters<M[K]>
	): void;

	/**
	 * Connect to a signal weakly.
	 *
	 * This allows the callback function to be garbage collected and
	 * automatically disconnects the signal when that happens.
	 *
	 * **Warning**: Only use this function if you really, really, really know
	 * what you are doing.
	 *
	 * @param name A string with the event name.
	 * @param func The function to call.
	 */
	weak_connect_signal<K extends keyof M>(this: void, name: K, func: M[K]): void;
}
