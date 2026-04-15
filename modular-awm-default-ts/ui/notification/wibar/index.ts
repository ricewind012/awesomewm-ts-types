import * as awful from "awful";
import * as wibox from "wibox";

import * as module from "./module";

export default (s: AwesomeScreen) => {
	s.mypromptbox = awful.widget.prompt(); // Create a promptbox.

	// Create the wibox
	s.mywibox = awful.wibar({
		position: "top",
		screen: s,
		widget: {
			layout: wibox.layout.align.horizontal,
			// Left widgets.
			1: {
				layout: wibox.layout.fixed.horizontal,
				1: module.launcher(),
				2: module.taglist(s),
				3: s.mypromptbox,
			},
			// Middle widgets.
			2: module.tasklist(s),
			// Right widgets.
			3: {
				layout: wibox.layout.fixed.horizontal,
				1: awful.widget.keyboardlayout(), // Keyboard map indicator and switcher.
				2: wibox.widget.systray(),
				3: wibox.widget.textclock(), // Create a textclock widget.
				4: module.layoutbox(s),
			},
		},
	});
};
