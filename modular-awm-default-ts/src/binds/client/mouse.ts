import * as awful from "awful";

import { mod } from "~/binds/mod";

const { modkey } = mod;

/// Client mouse bindings.
client.connect_signal("request::default_mousebindings", () => {
	awful.mouse.append_client_mousebindings([
		awful.button(undefined, awful.button.names.LEFT, (c: AwesomeClient) => {
			c.activate({
				context: "mouse_click",
			});
		}),
		awful.button([modkey], awful.button.names.LEFT, (c: AwesomeClient) => {
			c.activate({
				action: "mouse_move",
				context: "mouse_click",
			});
		}),
		awful.button([modkey], awful.button.names.RIGHT, (c: AwesomeClient) => {
			c.activate({
				action: "mouse_resize",
				context: "mouse_click",
			});
		}),
	]);
});
