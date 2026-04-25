import * as awful from "awful";
import * as wibox from "wibox";

import make_widget from "~/jsx";

interface NormalTitlebarProps {
	c: AwesomeClient;
}

/**
 * The titlebar to be used on normal clients.
 */
export function NormalTitlebar(props: NormalTitlebarProps) {
	const { c } = props;

	// Buttons for the titlebar.
	const buttons = [
		awful.button(undefined, awful.button.names.LEFT, () => {
			c.activate({
				action: "mouse_move",
				context: "titlebar",
			});
		}),
		awful.button(undefined, awful.button.names.RIGHT, () => {
			c.activate({
				action: "mouse_resize",
				context: "titlebar",
			});
		}),
	];

	// Draws the client titlebar at the default position (top) and size.
	const widget = (
		<wibox.layout.align.horizontal>
			{/* Left */}
			<wibox.layout.fixed.horizontal buttons={buttons}>
				{awful.titlebar.widget.iconwidget(c)}
			</wibox.layout.fixed.horizontal>

			{/* Middle */}
			<wibox.layout.flex.horizontal buttons={buttons}>
				{{
					halign: "center",
					widget: awful.titlebar.widget.titlewidget(c),
				}}
			</wibox.layout.flex.horizontal>

			{/* Right */}
			<wibox.layout.fixed.horizontal>
				{awful.titlebar.widget.floatingbutton(c)}
				{awful.titlebar.widget.maximizedbutton(c)}
				{awful.titlebar.widget.stickybutton(c)}
				{awful.titlebar.widget.ontopbutton(c)}
				{awful.titlebar.widget.closebutton(c)}
			</wibox.layout.fixed.horizontal>
		</wibox.layout.align.horizontal>
	);
	const titlebar = awful.titlebar(c);
	titlebar.widget = widget;
	return titlebar;
}
