/// <reference types="../client.d.ts" />
/// <reference types="./button.d.ts" />
/// <reference types="./shared.d.ts" />

/**
 * @noSelf
 */
interface AwfulKeyboard extends AwfulInputHandler {
	/**
	 * Execute a key combination.
	 *
	 * If an awesome keybinding is assigned to the combination, it should be
	 * executed.
	 *
	 * To limit the chances of accidentally leaving a modifier key locked when
	 * calling this function from a keybinding, make sure is attached to the
	 * release event and not the press event.
	 *
	 * @param modifiers A modifier table
	 * @param key The key.
	 */
	emulate_key_combination(modifiers: ButtonModifier[], key: string): void;

	/**
	 * Get X11 keysym and a one-character representation from an Awesome
	 * keycode.
	 *
	 * A "one-character representation" is a single UTF-8 representing the
	 * typical output from that keysym in a text editor (e.g. " " for space, "ñ"
	 * for ntilde, "Ā" for Amacron). It usually matches the main engraving of
	 * the key for level-0 symbols (but lowercase).
	 *
	 * Keycodes may be given in a string in any valid format for `awful.key`:
	 * "#" + keycode, the symkey name and the UTF-8 representation will all
	 * work.
	 *
	 * If no suitable keysym is found, or a malformed keycode is given as an
	 * argument, this function will return (nil, nil)
	 */
	get_key_name(): LuaMultiReturn<[string | undefined, undefined]>;
}
