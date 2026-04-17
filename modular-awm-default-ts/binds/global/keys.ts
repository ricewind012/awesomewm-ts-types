import * as awful from "awful";
import * as gears from "gears";
import * as menubar from "menubar";

import { apps } from "../../config/apps";
import { menu } from "../../ui/menu";
import { mod } from "../mod";

const { modkey } = mod;

/// Global key bindings
awful.keyboard.append_global_keybindings([
	// General Awesome keys.
	awful.key([modkey], "s", awful.hotkeys_popup.show_help, {
		description: "show help",
		group: "awesome",
	}),
	awful.key(
		[modkey],
		"w",
		() => {
			menu.main.show();
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
			const s = awful.screen.focused();
			if (s !== undefined) {
				awful.prompt.run({
					exe_callback: awful.util.eval,
					history_path: `${gears.filesystem.get_cache_dir()}/history_eval`,
					prompt: "Run Lua code: ",
					textbox: s.mypromptbox.widget,
				});
			}
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
			const s = awful.screen.focused();
			if (s) {
				s.mypromptbox.run();
			}
		},
		{ description: "run prompt", group: "launcher" },
	),
	awful.key(
		[modkey],
		"p",
		() => {
			menubar.show();
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
			if (client.focus !== undefined) {
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
			if (c !== undefined) {
				c.activate({
					context: "key.unminimize",
					raise: true,
				});
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
		description: "only view tag",
		group: "tag",
		keygroup: awful.key.keygroup.NUMROW,
		modifiers: [modkey],
		on_press: (index) => {
			const s = awful.screen.focused();
			if (s === undefined) {
				return;
			}

			const tag = s.tags[index];
			if (tag !== undefined) {
				tag.view_only();
			}
		},
	}),
	awful.key({
		description: "toggle tag",
		group: "tag",
		keygroup: awful.key.keygroup.NUMROW,
		modifiers: [modkey, mod.ctrl],
		on_press: (index) => {
			const s = awful.screen.focused();
			if (s === undefined) {
				return;
			}

			const tag = s.tags[index];
			if (tag !== undefined) {
				awful.tag.viewtoggle(tag);
			}
		},
	}),
	awful.key({
		description: "move focused client to tag",
		group: "tag",
		keygroup: awful.key.keygroup.NUMROW,
		modifiers: [modkey, mod.shift],
		on_press: (index) => {
			if (client.focus !== undefined) {
				const tag = client.focus.screen.tags[index];
				if (tag !== undefined) {
					client.focus.move_to_tag(tag);
				}
			}
		},
	}),
	awful.key({
		description: "toggle focused client on tag",
		group: "tag",
		keygroup: awful.key.keygroup.NUMROW,
		modifiers: [modkey, mod.ctrl, mod.shift],
		on_press: (index) => {
			if (client.focus !== undefined) {
				const tag = client.focus.screen.tags[index];
				if (tag !== undefined) {
					client.focus.toggle_tag(tag);
				}
			}
		},
	}),
	awful.key({
		description: "select layout directly",
		group: "layout",
		keygroup: awful.key.keygroup.NUMPAD,
		modifiers: [modkey],
		on_press: (index: number) => {
			const s = awful.screen.focused();
			if (s === undefined) {
				return;
			}

			const t = s.selected_tag;
			if (t?.layouts !== undefined) {
				t.layout = t.layouts[index] || t.layout;
			}
		},
	}),
]);
