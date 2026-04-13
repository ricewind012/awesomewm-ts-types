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
	(
		mod: ButtonModifier[],
		button: MouseButtonName,
		press: () => void,
		release?: () => void,
	): AwfulButtonInstance;
	(args: {
		modifiers: ButtonModifier[];
		button: MouseButtonName;
		on_press: () => void;
		on_release: () => void;
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
