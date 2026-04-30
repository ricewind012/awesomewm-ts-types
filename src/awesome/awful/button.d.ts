declare enum MouseButtonName {
	LEFT,
	MIDDLE,
	RIGHT,
	SCROLL_UP,
	SCROLL_DOWN,
}

type ButtonModifier =
	| "Any"
	| `Mod${1 | 2 | 3 | 4 | 5}`
	| "Shift"
	| "Lock"
	| "Control";

interface AwfulButtonInstance {
	/**
	 * Execute this mousebindnig.
	 */
	trigger(): void;
}

/**
 * @noSelf
 */
interface AwfulButton {
	/**
	 * Create a new button to use as binding.
	 */
	<T = never>(
		// https://github.com/TypeScriptToLua/TypeScriptToLua/issues/1661
		this: void,
		mod: ButtonModifier[] | undefined,
		button: MouseButtonName,
		press: (this: void, arg: T) => void,
		release?: (this: void, arg: T) => void,
	): AwfulButtonInstance;
	<T = never>(args: {
		modifiers: ButtonModifier[] | undefined;
		button: MouseButtonName;
		on_press: (this: void, arg: T) => void;
		on_release: (this: void, arg: T) => void;
	}): AwfulButtonInstance;

	/**
	 * Modifiers to ignore.
	 *
	 * By default this is initialized as `{ "Lock", "Mod2" }` so the Caps Lock
	 * or Num Lock modifier are not taking into account by awesome when pressing
	 * keys.
	 */
	ignore_modifiers: ButtonModifier[];

	/**
	 * The mouse buttons names.
	 */
	names: typeof MouseButtonName;
}
