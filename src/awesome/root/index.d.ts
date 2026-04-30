type RootInputEventType =
	| "key_press"
	| "key_release"
	| "button_press"
	| "button_release"
	| "motion_notify";

interface RootInputEventMap {
	key_press: string;
	key_release: string;
	button_press: MouseButtonName;
	button_release: MouseButtonName;
	motion_notify: boolean;
}

declare module "root" {
	/**
	 * Send fake keyboard or mouse events.
	 *
	 * Usually the currently focused client or the keybindings will receive
	 * those events. If a `keygrabber` or `mousegrabber` is running, then it
	 * will get them.
	 *
	 * Some keys have different names compared to the ones generally used in
	 * Awesome. For example, Awesome uses "modifier keys" for keybindings using
	 * their X11 names such as "Control" or "Mod1" (for "Alt"). These are not
	 * the name of the key but is only the name of the modifier they represent.
	 * Some modifiers are even present twice on some keyboard like the left and
	 * right "Shift".
	 *
	 * This function is very low level, to be more useful, it can be wrapped
	 * into higher level constructs such as:
	 *
	 * **Sending strings:**
	 *
	 * ```lua
	 * local function send_string_to_client(s, c)
	 *     local old_c = client.focus
	 *     client.focus = c
	 *     for i=1, #s do
	 *         local char = s:sub(i,i)
	 *         root.fake_input("key_press"  , char)
	 *         root.fake_input("key_release", char)
	 *     end
	 *     client.focus = old_c
	 * end
	 *
	 * send_string_to_client("Hello world!")
	 * ```
	 *
	 * Note that this example works for most ASCII inputs but may fail depending
	 * on how the string is encoded. Some multi-byte characters may not
	 * represent keys and some UTF-8 encoding format create characters by
	 * combining multiple elements such as accent + base character or various
	 * escape sequences. If you wish to use this example for "real world" i18n
	 * use cases, learning about XKB event and UTF-8 encoding is a
	 * prerequisites.
	 *
	 * **Clicking:**
	 *
	 * ```lua
	 * local function click(button_id, x, y)
	 *     mouse.coords {x = x, y = y}
	 *     root.fake_input("button_press" , button_id)
	 *     root.fake_input("button_release", button_id)
	 * end
	 *
	 * click(1, 42, 42)
	 * ```
	 *
	 * @param event_type The event type.
	 * @param detail The detail: in case of a key event, this is the keycode to
	 * send, in case of a button event this is the number of the button. In case
	 * of a motion event, this is a boolean value which if true makes the
	 * coordinates relatives.
	 * @param x In case of a motion event, this is the X coordinate.
	 * @param y In case of a motion event, this is the Y coordinate.
	 */
	export function fake_input<K extends RootInputEventType>(
		event_type: K,
		detail: RootInputEventMap[K],
		x: K extends "motion_notify" ? number : never,
		y: K extends "motion_notify" ? number : never,
	): void;

	/**
	 * Set the root cursor
	 *
	 * @param cursor_name A X cursor name.
	 */
	export function cursor(cursor_name: Cursor): void;

	/**
	 * Get the drawins attached to a screen.
	 *
	 * @returns A table with all drawins.
	 */
	export function drawins(): any[];

	/**
	 * Get the size of the root window.
	 *
	 * @returns
	 * - `number` Width of the root window.
	 * - `number` height of the root window.
	 */
	export function size(): LuaMultiReturn<[number, number]>;

	/**
	 * Get the physical size of the root window, in millimeter.
	 *
	 * @returns
	 * - `number` Width of the root window, in millimeters.
	 * - `number` height of the root window, in millimeters.
	 */
	export function size_mm(): LuaMultiReturn<[number, number]>;

	/**
	 * Get the attached tags.
	 *
	 * @returns A table with all tags.
	 */
	export function tags(): AwesomeTag[];
}
