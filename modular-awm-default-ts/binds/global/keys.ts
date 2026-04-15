import * as awful from "awful";
import * as gears from "gears";

import { apps } from "../../config/apps";
import { mod } from "../mod";

const { modkey } = mod;

/// Global key bindings
awful.keyboard.append_global_keybindings([
	// General Awesome keys.
	awful.key([modkey], "s", require("awful.hotkeys_popup").show_help, {
		description: "show help",
		group: "awesome",
	}),
	awful.key(
		[modkey],
		"w",
		() => {
			require("ui.menu").main.show();
		},
		{ description: "show main menu", group: "awesome" },
	),
	awful.key([modkey, mod.ctrl], "r", awesome.restart, {
		description: "reload awesome",
		group: "awesome",
	}),
	awful.key([modkey, mod.shift], "q", awesome.quit, {
		description: "quit awesome",
		group: "awesome",
	}),
	awful.key(
		[modkey],
		"x",
		() => {
			awful.prompt.run({
				prompt: "Run Lua code: ",
				textbox: awful.screen.focused().mypromptbox.widget,
				exe_callback: awful.util.eval,
				history_path: `${gears.filesystem.get_cache_dir()}/history_eval`,
			});
		},
		{ description: "lua execute prompt", group: "awesome" },
	),
	awful.key(
		[modkey],
		"Return",
		() => {
			awful.spawn(apps.terminal);
		},
		{ description: "open a terminal", group: "launcher" },
	),
	awful.key(
		[modkey],
		"r",
		() => {
			awful.screen.focused().mypromptbox.run();
		},
		{ description: "run prompt", group: "launcher" },
	),
	awful.key(
		[modkey],
		"p",
		() => {
			require("menubar").show();
		},
		{ description: "show the menubar", group: "launcher" },
	),

	// Tags related keybindings.
	awful.key([modkey], "Left", awful.tag.viewprev, {
		description: "view previous",
		group: "tag",
	}),
	awful.key([modkey], "Right", awful.tag.viewnext, {
		description: "view next",
		group: "tag",
	}),
	awful.key([modkey], "Escape", awful.tag.history.restore, {
		description: "go back",
		group: "tag",
	}),

	// Focus related keybindings.
	awful.key(
		[modkey],
		"j",
		() => {
			awful.client.focus.byidx(1);
		},
		{ description: "focus next by index", group: "client" },
	),
	awful.key(
		[modkey],
		"k",
		() => {
			awful.client.focus.byidx(-1);
		},
		{ description: "focus previous by index", group: "client" },
	),
	awful.key(
		[modkey],
		"Tab",
		() => {
			awful.client.focus.history.previous();
			if (client.focus) {
				client.focus.raise();
			}
		},
		{ description: "go back", group: "client" },
	),
	awful.key(
		[modkey, mod.ctrl],
		"j",
		() => {
			awful.screen.focus_relative(1);
		},
		{ description: "focus the next screen", group: "screen" },
	),
	awful.key(
		[modkey, mod.ctrl],
		"k",
		() => {
			awful.screen.focus_relative(-1);
		},
		{ description: "focus the previous screen", group: "screen" },
	),
	awful.key(
		[modkey, mod.ctrl],
		"n",
		() => {
			const c = awful.client.restore();
			// Focus restored client
			if (c) {
				c.activate({ raise: true, context: "key.unminimize" });
			}
		},
		{ description: "restore minimized", group: "client" },
	),

	// Layout related keybindings.
	awful.key(
		[modkey, mod.shift],
		"j",
		() => {
			awful.client.swap.byidx(1);
		},
		{ description: "swap with next client by index", group: "client" },
	),
	awful.key(
		[modkey, mod.shift],
		"k",
		() => {
			awful.client.swap.byidx(-1);
		},
		{ description: "swap with previous client by index", group: "client" },
	),
	awful.key([modkey], "u", awful.client.urgent.jumpto, {
		description: "jump to urgent client",
		group: "client",
	}),
	awful.key(
		[modkey],
		"l",
		() => {
			awful.tag.incmwfact(0.05);
		},
		{ description: "increase master width factor", group: "layout" },
	),
	awful.key(
		[modkey],
		"h",
		() => {
			awful.tag.incmwfact(-0.05);
		},
		{ description: "decrease master width factor", group: "layout" },
	),
	awful.key(
		[modkey, mod.shift],
		"h",
		() => {
			awful.tag.incnmaster(1, undefined, true);
		},
		{ description: "increase the number of master clients", group: "layout" },
	),
	awful.key(
		[modkey, mod.shift],
		"l",
		() => {
			awful.tag.incnmaster(-1, undefined, true);
		},
		{ description: "decrease the number of master clients", group: "layout" },
	),
	awful.key(
		[modkey, mod.ctrl],
		"h",
		() => {
			awful.tag.incncol(1, undefined, true);
		},
		{ description: "increase the number of columns", group: "layout" },
	),
	awful.key(
		[modkey, mod.ctrl],
		"l",
		() => {
			awful.tag.incncol(-1, undefined, true);
		},
		{ description: "decrease the number of columns", group: "layout" },
	),
	awful.key(
		[modkey],
		"space",
		() => {
			awful.layout.inc(1);
		},
		{ description: "select next", group: "layout" },
	),
	awful.key(
		[modkey, mod.shift],
		"space",
		() => {
			awful.layout.inc(-1);
		},
		{ description: "select previous", group: "layout" },
	),
	awful.key({
		modifiers: [modkey],
		keygroup: awful.key.keygroup.NUMROW,
		description: "only view tag",
		group: "tag",
		on_press: (index) => {
			const tag = awful.screen.focused().tags[index];
			if (tag) {
				tag.view_only();
			}
		},
	}),
	awful.key({
		modifiers: [modkey, mod.ctrl],
		keygroup: awful.key.keygroup.NUMROW,
		description: "toggle tag",
		group: "tag",
		on_press: (index) => {
			const tag = awful.screen.focused().tags[index];
			if (tag) {
				awful.tag.viewtoggle(tag);
			}
		},
	}),
	awful.key({
		modifiers: [modkey, mod.shift],
		keygroup: awful.key.keygroup.NUMROW,
		description: "move focused client to tag",
		group: "tag",
		on_press: (index) => {
			if (client.focus) {
				const tag = client.focus.screen.tags[index];
				if (tag) {
					client.focus.move_to_tag(tag);
				}
			}
		},
	}),
	awful.key({
		modifiers: [modkey, mod.ctrl, mod.shift],
		keygroup: awful.key.keygroup.NUMROW,
		description: "toggle focused client on tag",
		group: "tag",
		on_press: (index) => {
			if (client.focus) {
				const tag = client.focus.screen.tags[index];
				if (tag) {
					client.focus.toggle_tag(tag);
				}
			}
		},
	}),
	awful.key({
		modifiers: [modkey],
		keygroup: awful.key.keygroup.NUMPAD,
		description: "select layout directly",
		group: "layout",
		on_press: (index: number) => {
			const t = awful.screen.focused().selected_tag;
			if (t) {
				t.layout = t.layouts[index] || t.layout;
			}
		},
	}),
]);
