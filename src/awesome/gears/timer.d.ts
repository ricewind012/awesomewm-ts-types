/// <reference types="../shared.d.ts" />

type TimerSignal = "start" | "stop" | "timeout";

interface TimerSignalMap extends SignalMap<TimerSignal> {
	/**
	 * Emitted when the timer is started.
	 */
	start: () => void;

	/**
	 *  Emitted when the timer is stopped.
	 */
	stop: () => void;

	/**
	 * Emitted when timeout seconds have elapsed.
	 *
	 * This will be emitted repeatedly, unless `single_shot` has been set to
	 * `true` for the timer.
	 */
	timeout: () => void;
}

interface Timer
	extends Exclude<
		SignalObject<TimerSignal, TimerSignalMap>,
		"disconnect_signal"
	> {
	/**
	 * Start the timer.
	 */
	start(): void;

	/**
	 * Stop the timer.
	 */
	stop(): void;

	/**
	 * Restart the timer. This is equivalent to stopping the timer if it is
	 * running and then starting it.
	 */
	again(): void;

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
	weak_connect_signal<K extends keyof TimerSignalMap>(
		name: K,
		func: TimerSignalMap[K],
	): void;

	/**
	 * The timer is started.
	 *
	 * For this to be `true` by default, pass `autostart` to the constructor.
	 */
	started: boolean;

	/**
	 * The timer timeout value in seconds.
	 */
	timeout: number;
}

/**
 * Class to execute code at specific intervals.
 * @noSelf
 */
interface GearsTimer {
	/**
	 * Create a new timer object.
	 *
	 * `call_now` only takes effect when a callback is provided. `single_shot`,
	 * on the other hand, also stops signals connected to the {@link timeout}
	 * signal.
	 *
	 * Specifying a function `func` as `args.callback` is equivalent to calling
	 * `:connect_signal(func)` on the timer object.
	 */
	(
		// https://github.com/TypeScriptToLua/TypeScriptToLua/issues/1661
		this: void,
		args: {
			/**
			 * Timeout in seconds (e.g. 1.5).
			 */
			timeout: number;

			/**
			 * Immediately start the timer countdown.
			 */
			autostart?: boolean;

			/**
			 * Immediately call the callback function.
			 */
			call_now?: boolean;

			/**
			 * Callback function to connect to the "timeout" signal.
			 */
			callback?: () => void;

			/**
			 * Run only once then stop.
			 * @default false
			 */
			single_shot?: boolean;
		},
	): Timer;

	/**
	 * Create a simple timer for calling the `callback` function continuously.
	 *
	 * @param timeout Timeout in seconds (e.g. 1.5).
	 * @param callback Function to run.
	 *
	 * @returns The new timer object.
	 */
	start_new(timeout: number, callback: () => void): Timer;

	/**
	 * Create a simple timer for calling the `callback` function continuously.
	 *
	 * @param timeout Timeout in seconds (e.g. 1.5).
	 * @param callback Function to run.
	 *
	 * @returns The new timer object.
	 */
	weak_start_new(timeout: number, callback: () => void): Timer;

	/**
	 * Run all pending delayed calls now.  This function should best not be used
	 * at all, because it means that less batching happens and the delayed
	 * calls run prematurely.
	 */
	run_delayed_calls_now(): void;

	/**
	 * Call the given function at the end of the current GLib event loop
	 * iteration.
	 *
	 * @param callback The function that should be called
	 * @param args Arguments to the callback function
	 */
	delayed_call(
		callback: (...args: unknown[]) => void,
		...args: unknown[]
	): void;

	// TODO: ?
	timer: unknown;
}
