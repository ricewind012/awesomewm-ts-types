import * as awful from "awful";

import { mod } from "~/binds/mod";

const { modkey } = mod;

/// Client keybindings.
client.connect_signal("request::default_keybindings", () => {
	awful.keyboard.append_client_keybindings([
		// Client state management.
		awful.key(
			[modkey],
			"f",
			(c: AwesomeClient) => {
				c.fullscreen = !c.fullscreen;
				c.raise();
			},
			undefined,
			{ description: "toggle fullscreen", group: "client" },
		),
		awful.key(
			[modkey, mod.shift],
			"c",
			(c: AwesomeClient) => {
				c.kill();
			},
			undefined,
			{ description: "close", group: "client" },
		),
		awful.key(
			[modkey, mod.ctrl],
			"space",
			awful.client.floating.toggle,
			undefined,
			{
				description: "toggle floating",
				group: "client",
			},
		),
		awful.key(
			[modkey],
			"n",
			(c: AwesomeClient) => {
				// The client currently has the input focus, so it cannot be
				// minimized, since minimized clients can't have the focus.
				c.minimized = true;
			},
			undefined,
			{ description: "minimize", group: "client" },
		),
		awful.key(
			[modkey],
			"m",
			(c: AwesomeClient) => {
				c.maximized = !c.maximized;
				c.raise();
			},
			undefined,
			{ description: "(un)maximize", group: "client" },
		),
		awful.key(
			[modkey, mod.ctrl],
			"m",
			(c: AwesomeClient) => {
				c.maximized_vertical = !c.maximized_vertical;
				c.raise();
			},
			undefined,
			{ description: "(un)maximize vertically", group: "client" },
		),
		awful.key(
			[modkey, mod.shift],
			"m",
			(c: AwesomeClient) => {
				c.maximized_horizontal = !c.maximized_horizontal;
				c.raise();
			},
			undefined,
			{ description: "(un)maximize horizontally", group: "client" },
		),

		// Client position in tiling management.
		awful.key(
			[modkey, mod.ctrl],
			"Return",
			(c: AwesomeClient) => {
				c.swap(awful.client.getmaster());
			},
			undefined,
			{ description: "move to master", group: "client" },
		),
		awful.key(
			[modkey],
			"o",
			(c: AwesomeClient) => {
				c.move_to_screen();
			},
			undefined,
			{ description: "move to screen", group: "client" },
		),
		awful.key(
			[modkey],
			"t",
			(c: AwesomeClient) => {
				c.ontop = !c.ontop;
			},
			undefined,
			{ description: "toggle keep on top", group: "client" },
		),
	]);
});
