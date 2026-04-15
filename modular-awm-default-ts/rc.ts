// awesome_mode: api-level=4:screen=on
// Notification library.
import * as naughty from "naughty";

// If LuaRocks is installed, make sure that packages installed through it are
// found (e.g. lgi). If LuaRocks is not installed, do nothing.
pcall(require, "luarocks.loader");

/// Error handling.
// Check if awesome encountered an error during startup and fell back to
// another config (This code will only ever execute for the fallback config).
naughty.connect_signal("request::display_error", (message, startup) => {
	naughty.notification({
		urgency: "critical",
		title: `Oops, an error happened ${startup ? " during startup!" : "!"}`,
		message,
	});
});

// Allow Awesome to automatically focus a client upon changing tags or loading.
import "awful/autofocus";
// Enable hotkeys help widget for VIM and other apps when client with a matching
// name is opened:
import "awful/hotkeys_popup/keys";

// Load the theme. In other words, defines the variables within the `beautiful`
// table.
import "./theme";

// Treat all signals. Bear in mind this implies creating all tags, attaching
// their layouts, setting client behavior and loading UI.
import "./signal";

// Set all keybinds.
import "./binds";

// Load all client rules.
import "./config/rules";
