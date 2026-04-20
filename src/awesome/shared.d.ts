/// <reference types="./client.d.ts" />

/**
 * - `string` A hexadecimal color code, such as "#ff0000" for red.
 * - `string` A color name, such as "red".
 * - `table` A gradient table.
 * - `cairo_solid_pattern` Any valid [Cairo
 *   pattern](https://cairographics.org/manual/cairo-cairo-pattern-t.html).
 * - `cairo_solid_pattern` A texture build from an image by
 *   `gears.color.create_png_pattern`.
 */
type AwesomeColor = string | table | cairo_solid_pattern;

// bruh
type BaseCorner = "left" | "right" | "top" | "bottom";
type ClientCorner =
	| BaseCorner
	| "auto"
	| "top_left"
	| "top_right"
	| "bottom_left"
	| "bottom_right";
type Direction = "up" | "down" | "left" | "right";

type AwesomeMouse = any;
type Drawable = AwesomeClient | AwesomeMouse | BaseWidget;

interface Coords {
	x: number;
	y: number;
}

interface Rectangle extends Coords {
	width: number;
	height: number;
}

type SignalMap<S extends string> = Record<S, (...args: any[]) => void>;

interface SignalObject<S extends string, M extends SignalMap<S>> {
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
