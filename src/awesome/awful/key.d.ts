declare enum KeyGroupName {
	/**
	 * The row above the letters in the US PC-105/PC-104 keyboards and its
	 * derivative. This is usually the number 1-9 followed by 0.
	 */
	NUMROW = "numrow",

	/**
	 * The Left/Right/Top/Bottom keys usually located right of the spacebar.
	 */
	ARROWS = "arrows",

	/**
	 * The keys F1 through F12 located at the topmost row of any keyboard, plus
	 * F13 through F35 on specialist keyboards.
	 */
	FKEYS = "fkeys",

	/**
	 * The number keys on the keypad to the right of the letters and the arrow
	 * keys. Not present in every keyboard.
	 */
	NUMPAD = "numpad",
}

interface AwfulKeyData {
	/**
	 * The description of the function run from a key binding.
	 *
	 * This is used, for example, by {@link AwfulHotkeysPopup}
	 */
	description: string;

	/**
	 * The key group bound to a function in a key binding.
	 *
	 * This is used, for example, by {@link AwfulHotkeysPopup}
	 */
	group: string;

	/**
	 * The key name.
	 *
	 * This can be useful when searching for keybindings by keywords.
	 */
	name: string;
}

interface AwfulKeyInstance extends AwfulButtonInstance {
	/**
	 * Compare a key object with modifiers and key.
	 *
	 * @param pressed_mod The modifiers to compare with.
	 * @param pressed_key The key to compare with.
	 *
	 * @returns If the key and modifier match.
	 */
	match(pressed_mod: ButtonModifier[], pressed_key: string): boolean;

	/**
	 * Execute a key combination. If an awesome keybinding is assigned to the
	 * combination, it should be executed.
	 *
	 * To limit the chances of accidentally leaving a modifier key locked when
	 * calling this function from a keybinding, make sure is attached to the
	 * release event and not the press event.
	 *
	 * @deprecated Use {@link AwesomeRoot.fake_input}
	 *
	 * @param mod A modifier table.
	 * @param k
	 */
	execute(mod: ButtonModifier[], k: string): void;
}

/**
 * @noSelf
 */
export interface AwfulKey {
	/**
	 * Create a new key binding.
	 */
	// OH MY GOD https://github.com/awesomeWM/awesome/blob/master/lib/awful/key.lua#L282
	<T = never>(
		// https://github.com/TypeScriptToLua/TypeScriptToLua/issues/1661
		this: void,
		mod: ButtonModifier[] | undefined,
		_key: string,
		press: (this: void, arg: T) => void,
		release?: (this: void, arg: T) => void,
		data?: Partial<AwfulKeyData>,
	): AwfulKeyInstance;
	<T = never>(
		// https://github.com/TypeScriptToLua/TypeScriptToLua/issues/1661
		this: void,
		mod: ButtonModifier[] | undefined,
		_key: string,
		press: (this: void, arg: T) => void,
		data?: Partial<AwfulKeyData>,
	): AwfulKeyInstance;
	<T = never>(
		// https://github.com/TypeScriptToLua/TypeScriptToLua/issues/1661
		this: void,
		args: Partial<AwfulKeyData> & {
			key?: string;
			keygroup?: KeyGroupName;
			modifiers: ButtonModifier[] | undefined;
			on_press: (this: void, arg: T) => void;
			on_release?: (this: void, arg: T) => void;
		},
	): AwfulKeyInstance;

	/**
	 * Modifiers to ignore.
	 *
	 * By default this is initialized as `{ "Lock", "Mod2" }` so the Caps Lock
	 * or Num Lock modifier are not taking into account by awesome when pressing
	 * keys.
	 */
	ignore_modifiers: ButtonModifier[];

	/**
	 * The keygroups names.
	 */
	keygroup: typeof KeyGroupName;

	/**
	 * The default definitions of keygroups.
	 *
	 * Every definition is given as an array, where every element is another
	 * array with the following structure:
	 *
	 * - The first element is a string representing a key, in any format the
	 *   property key will allow.
	 * - The second element is a value. Key bindings created by awful.key and a
	 *   keygroup are bound to a 1-parameter function, whose parameter is this
	 *   second element.
	 *
	 * This table is accessed internally by Awesome. Users will usually use key
	 * bindings with the property {@link keygroup} instead of accessing this
	 * table directly.
	 */
	keygroups: {
		[group in KeyGroupName]: string[][];
	};
}
