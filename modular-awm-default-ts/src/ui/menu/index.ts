import * as awful from "awful";
import * as beautiful from "beautiful";

import { apps } from "~/config/apps";

/// Menu
const awesome_menu: MenuItem[] = [
	[
		"hotkeys",
		() => awful.hotkeys_popup.show_help(undefined, awful.screen.focused()),
	],
	["manual", `${apps.terminal} -e man awesome`],
	// Not part of the original config but extremely useful, especially as the example
	// config is meant to serve as an example to build your own environment upon.
	["docs", "xdg-open https://awesomewm.org/apidoc"],
	["edit config", `${apps.editor_cmd} ${awesome.conffile}`],
	["restart", awesome.restart],
	["quit", awesome.quit],
];

// Create a main menu.
export const menu = {
	main: awful.menu({
		items: [
			["awesome", awesome_menu, beautiful.get().awesome_icon],
			["open terminal", apps.terminal],
		],
	}),
};
