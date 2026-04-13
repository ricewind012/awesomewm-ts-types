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

/**
 * @noResolution
 * @noSelf
 */
declare module "mousegrabber" {
	/**
	 * Check if mousegrabber is running.
	 */
	export function isrunning(): boolean;

	/**
	 * Grab the mouse pointer and list motions, calling callback function at
	 * each motion.
	 *
	 * @param func The callback function must return a boolean value: true to
	 * continue grabbing, false to stop. The function is called with one argument: a
	 * table containing modifiers pointer coordinates.
	 * @param cursor The name of an X cursor to use while grabbing  or `nil` to
	 * not change the cursor.
	 */
	export function run(func: (coords: table) => boolean, cursor?: Cursor): void;

	/**
	 * Stop grabbing the mouse pointer.
	 */
	export function stop(): void;
}
