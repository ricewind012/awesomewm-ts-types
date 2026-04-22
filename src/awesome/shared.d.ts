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

type Cursor =
	| "num_glyphs"
	| "arrow"
	| "based_arrow_down"
	| "based_arrow_up"
	| "boat"
	| "bogosity"
	| "bottom_left_corner"
	| "bottom_right_corner"
	| "bottom_side"
	| "bottom_tee"
	| "box_spiral"
	| "center_ptr"
	| "circle"
	| "clock"
	| "coffee_mug"
	| "cross"
	| "crosshair"
	| "cross_reverse"
	| "cursor"
	| "diamond_cross"
	| "dotbox"
	| "dot"
	| "double_arrow"
	| "draft_large"
	| "draft_small"
	| "draped_box"
	| "exchange"
	| "fleur"
	| "gobbler"
	| "gumby"
	| "hand"
	| "hand"
	| "heart"
	| "icon"
	| "iron_cross"
	| "leftbutton"
	| "left_ptr"
	| "left_side"
	| "left_tee"
	| "ll_angle"
	| "lr_angle"
	| "man"
	| "middlebutton"
	| "mouse"
	| "pencil"
	| "pirate"
	| "plus"
	| "question_arrow"
	| "rightbutton"
	| "right_ptr"
	| "right_side"
	| "right_tee"
	| "rtl_logo"
	| "sailboat"
	| "sb_down_arrow"
	| "sb_h_double_arrow"
	| "sb_left_arrow"
	| "sb_right_arrow"
	| "sb_up_arrow"
	| "sb_v_double_arrow"
	| "shuttle"
	| "sizing"
	| "spider"
	| "spraycan"
	| "star"
	| "target"
	| "tcross"
	| "top_left_arrow"
	| "top_left_corner"
	| "top_right_corner"
	| "top_side"
	| "top_tee"
	| "trek"
	| "ul_angle"
	| "umbrella"
	| "ur_angle"
	| "watch"
	| "xterm";

// bruh
type Position = "left" | "right" | "top" | "bottom";
type ClientPosition =
	| Position
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
	weak_connect_signal<K extends keyof M>(name: K, func: M[K]): void;
}
