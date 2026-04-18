/**
 * @noSelf
 */
export interface AwfulKeyboard {
	/**
	 * Add an
	 * [awful.button](https://awesomewm.org/apidoc/input_handling/awful.button.html#)
	 * based keybinding to the global set. A **global** keybinding is one
	 * which is always present, even when there is no focused client. If your
	 * intent is too add a keybinding which acts on the focused client do
	 * **not** use this.
	 *
	 * @param button The button object.
	 */
	append_global_keybinding(button: AwfulButtonInstance): void;

	/**
	 * Add multiple
	 * [awful.button](https://awesomewm.org/apidoc/input_handling/awful.button.html#)
	 * based keybindings to the global set. A **global** keybinding is one
	 * which is always present, even when there is no focused client. If your
	 * intent is too add a keybinding which acts on the focused client do
	 * **not** use this
	 *
	 * @param buttons A table of `awful.button` objects. Optionally, it can have
	 * a `group` entry. If set, the `group` property will be set on all
	 * `awful.buttons` objects.
	 */
	append_global_keybindings(buttons: AwfulButtonInstance[]): void;

	/**
	 * Remove a keybinding from the global set.
	 *
	 * @param button The button object.
	 */
	remove_global_keybinding(button: AwfulButtonInstance): void;

	/**
	 * Add an
	 * [awful.button](https://awesomewm.org/apidoc/input_handling/awful.button.html#)
	 * to the default client buttons.
	 *
	 * @param button The button.
	 */
	append_client_keybinding(button: AwfulButtonInstance): void;

	/**
	 * Add a
	 * [awful.button](https://awesomewm.org/apidoc/input_handling/awful.button.html#)
	 * s to the default client buttons.
	 *
	 * @param buttons A table containing awful.button objects.
	 */
	append_client_keybindings(buttons: AwfulButtonInstance[]): void;

	/**
	 * Remove a keybinding from the default client buttons.
	 *
	 * @param button The button.
	 *
	 * @returns True if the button was removed and false if it wasn't found.
	 */
	remove_client_keybinding(button: AwfulButtonInstance): boolean;

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
