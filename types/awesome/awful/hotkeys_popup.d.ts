/**
 * Popup widget which shows current hotkeys and their descriptions.
 */
interface AwfulHotkeysPopup {
	/**
	 * This is the same as `awful.hotkeys_popup.widget.show_help`.
	 *
	 *  example usage:
	 *
	 *      local hotkeys_popup = require("awful.hotkeys_popup")
	 *      myawesomemenu = {{ "hotkeys", function() hotkeys_popup.show_help() end },
	 *                       -- <more entries>
	 *      }
	 *
	 *  see `awful.hotkeys_popup.widget.show_help` for more information
	 *
	 * @param c The hostkeys for the client "c".
	 * @param s The screen.
	 */
	show_help(c?: client, s?: screen): void;

	/**
	 * Add rules to match tmux session.
	 *
	 *  For example:
	 *
	 *      tmux.add_rules_for_terminal({ rule = { name = { "tmux" }}})
	 *
	 *  will show tmux hotkeys for any window that has 'tmux' in its title.
	 *  If no rules are provided then tmux hotkeys will be shown always!
	 *
	 * @param rule Rules to match a window containing a tmux session.
	 */
	add_rules_for_terminal(rule: table): void;
}
