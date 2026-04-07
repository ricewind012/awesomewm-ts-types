type SignalMap = Record<string, (...args: unknown[]) => void>;

interface WithSignals<M extends SignalMap> {
	/**
	 * Add a signal.
	 * @param name A string with the event name.
	 * @param func The function to call.
	 */
	connect_signal<K extends keyof M>(name: K, func: M[K]): void;

	/**
	 * Remove a signal.
	 * @param name A string with the event name.
	 * @param func The function to call.
	 */
	disconnect_signal<K extends keyof M>(name: K, func: M[K]): void;

	/**
	 * Emit a signal.
	 * @param name A string with the event name.
	 * @param args The signal arguments.
	 */
	emit_signal<K extends keyof M>(name: K, ...args: Parameters<M[K]>): void;
}
