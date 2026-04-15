import * as awful from "awful";

export default (s: AwesomeScreen) => {
	// Create a tasklist widget
	return awful.widget.tasklist({
		screen: s,
		filter: awful.widget.tasklist.filter.currenttags,
		buttons: [
			// Left-clicking a client indicator minimizes it if it's unminimized, or unminimizes
			// it if it's minimized.
			awful.button<AwesomeClient>(undefined, awful.button.names.LEFT, (c) => {
				c.activate({ context: "tasklist", action: "toggle_minimization" });
			}),

			// Right-clicking a client indicator shows the list of all open clients in all visible
			// tags.
			awful.button(undefined, awful.button.names.RIGHT, () => {
				awful.menu.client_list({
					theme: {
						width: 250,
					},
				});
			}),

			// Mousewheel scrolling cycles through clients.
			awful.button(undefined, awful.button.names.SCROLL_DOWN, () => {
				awful.client.focus.byidx(-1);
			}),
			awful.button(undefined, awful.button.names.SCROLL_UP, () => {
				awful.client.focus.byidx(1);
			}),
		],
	});
};
