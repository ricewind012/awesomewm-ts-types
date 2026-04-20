import * as awful from "awful";
import * as wibox from "wibox";

import make_widget from "../../jsx";
import * as module from "./module";

/** @noSelf */
export default (s: AwesomeScreen) => {
	s.mypromptbox = awful.widget.prompt(); // Create a promptbox.

	// Create the wibox
	s.mywibox = awful.wibar({
		position: "top",
		screen: s,
		widget: (
			<wibox.layout.align.horizontal>
				{/* Left */}
				<wibox.layout.fixed.horizontal>
					{module.launcher()}
					{module.taglist(s)}
					{s.mypromptbox}
				</wibox.layout.fixed.horizontal>

				{/* Middle */}
				{module.tasklist(s)}

				{/* Right */}
				<wibox.layout.fixed.horizontal>
					{/* Keyboard map indicator and switcher. */}
					{awful.widget.keyboardlayout()}
					<wibox.widget.systray />
					{/* Create a textclock widget. */}
					<wibox.widget.textclock />
					{module.layoutbox(s)}
				</wibox.layout.fixed.horizontal>
			</wibox.layout.align.horizontal>
		),
	});
};
