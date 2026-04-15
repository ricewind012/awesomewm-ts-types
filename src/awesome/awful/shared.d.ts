interface AwfulInputHandler {
	/**
	 * Add an
	 * [awful.button](https://awesomewm.org/apidoc/input_handling/awful.button.html#)
	 * based mousebinding to the global set. A **global** mousebinding is one
	 * which is always present, even when there is no focused client. If your
	 * intent is too add a mousebinding which acts on the focused client do
	 * **not** use this.
	 *
	 * @param button The button object.
	 */
	append_global_mousebinding(button: AwfulButtonInstance): void;

	/**
	 * Add multiple
	 * [awful.button](https://awesomewm.org/apidoc/input_handling/awful.button.html#)
	 * based mousebindings to the global set. A **global** mousebinding is one
	 * which is always present, even when there is no focused client. If your
	 * intent is too add a mousebinding which acts on the focused client do
	 * **not** use this
	 *
	 * @param buttons A table of `awful.button` objects. Optionally, it can have
	 * a `group` entry. If set, the `group` property will be set on all
	 * `awful.buttons` objects.
	 */
	append_global_mousebindings(buttons: AwfulButtonInstance[]): void;

	/**
	 * Remove a mousebinding from the global set.
	 *
	 * @param button The button object.
	 */
	remove_global_mousebinding(button: AwfulButtonInstance): void;

	/**
	 * Add an
	 * [awful.button](https://awesomewm.org/apidoc/input_handling/awful.button.html#)
	 * to the default client buttons.
	 *
	 * @param button The button.
	 */
	append_client_mousebinding(button: AwfulButtonInstance): void;

	/**
	 * Add a
	 * [awful.button](https://awesomewm.org/apidoc/input_handling/awful.button.html#)
	 * s to the default client buttons.
	 *
	 * @param buttons A table containing awful.button objects.
	 */
	append_client_mousebindings(buttons: AwfulButtonInstance[]): void;

	/**
	 * Remove a mousebinding from the default client buttons.
	 *
	 * @param button The button.
	 *
	 * @returns True if the button was removed and false if it wasn't found.
	 */
	remove_client_mousebinding(button: AwfulButtonInstance): boolean;
}
