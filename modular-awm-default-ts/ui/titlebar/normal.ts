import * as awful from "awful";
import * as wibox from "wibox";

/// The titlebar to be used on normal clients.
/** @noSelf */
export default (c: AwesomeClient) => {
	// Buttons for the titlebar.
	const buttons = [
		awful.button(undefined, awful.button.names.LEFT, () => {
			c.activate({
				context: "titlebar",
				action: "mouse_move",
			});
		}),
		awful.button(undefined, awful.button.names.RIGHT, () => {
			c.activate({
				context: "titlebar",
				action: "mouse_resize",
			});
		}),
	];

	// Draws the client titlebar at the default position (top) and size.
	const titlebar = awful.titlebar(c);
	awful.titlebar(c).widget = wibox.widget({
		layout: wibox.layout.align.horizontal,
		// Left
		1: {
			layout: wibox.layout.fixed.horizontal,
			1: awful.titlebar.widget.iconwidget(c),
			buttons,
		},
		// Middle
		2: {
			layout: wibox.layout.flex.horizontal,
			1: {
				// Title
				widget: awful.titlebar.widget.titlewidget(c),
				halign: "center",
			},
			buttons,
		},
		// Right
		3: {
			layout: wibox.layout.fixed.horizontal,
			1: awful.titlebar.widget.floatingbutton(c),
			2: awful.titlebar.widget.maximizedbutton(c),
			3: awful.titlebar.widget.stickybutton(c),
			4: awful.titlebar.widget.ontopbutton(c),
			5: awful.titlebar.widget.closebutton(c),
		},
	});

	titlebar.setup(widget);
};
