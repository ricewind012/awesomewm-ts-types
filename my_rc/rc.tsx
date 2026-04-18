import * as awful from "awful";
import * as beautiful from "beautiful";
import * as gears from "gears";
import * as naughty from "naughty";
import * as ruled from "ruled";
import * as wibox from "wibox";

import make_widget from "./jsx";

const awesome_dir = gears.filesystem.get_configuration_dir();
if (awesome.startup) {
	const cmd = `sh -c "while inotifywait -e modify ${awesome_dir}; do printf "\n"; done`;
	awful.spawn.with_line_callback(cmd, {
		stdout: () => awesome.restart(),
	});
}

const theme_file = `${awesome_dir}/themes/light-line.lua`;
if (gears.filesystem.file_readable(theme_file)) {
	beautiful.init(theme_file);
}
beautiful.init({
	wallpaper: `${os.getenv("XDG_PICTURES_DIR")}/wal/photo-1773937826151-3eb018f9787c.jpg`,
});

awesome.connect_signal("startup", () => {
	naughty.notification({
		icon: `${os.getenv("HOME")}/1697911331072543.png`,
		title: "Reloaded",
		urgency: "low",
		timeout: 5,
	});
});

awesome.connect_signal("debug::error", (err) => {
	naughty.notification({ title: tostring(err) });
});

client.connect_signal("request::manage", (c) => {
	c.move_to_screen(awful.screen.focused());
	c.activate({ raise: true });

	const { size_hints } = c;
	if (!size_hints) {
		print("size_hints is null, wtf");
		return;
	}

	if (!size_hints.user_position && !size_hints.program_position) {
		awful.placement.no_offscreen(c);
	}
});

client.connect_signal("mouse::enter", (c) => {
	c.activate({
		context: "mouse_enter",
		raise: false,
	});
});

function wdg(widget: stuff) {
	if (widget.children === undefined) {
		return gears.table.join(widget, widget.children);
	}

	return widget;
}

client.connect_signal("request::titlebars", (c) => {
	const titlebar = awful.titlebar(c, {
		size: 16,
		position: "bottom",
	});

	titlebar.setup(
		wdg({
			layout: wibox.layout.flex.horizontal,
			children: [
				wdg({ layout: wibox.layout.flex.horizontal }),
				wdg({
					layout: wibox.layout.flex.horizontal,
					buttons: gears.table.join(
						awful.button([], awful.button.names.LEFT, () => {
							c.activate();
							awful.mouse.client.move(c);
						}),
						awful.button([], awful.button.names.RIGHT, () => {
							c.activate();
							awful.mouse.client.resize(c);
						}),
					),
				}),
			],
		}),
		/*
		<wibox.layout.align.horizontal>
			<wibox.layout.flex.horizontal />
			<wibox.layout.flex.horizontal
				buttons={gears.table.join(
					awful.button([], awful.button.names.LEFT, () => {
						c.activate();
						awful.mouse.client.move(c);
					}),
					awful.button([], awful.button.names.RIGHT, () => {
						c.activate();
						awful.mouse.client.resize(c);
					}),
				)}
			/>
		</wibox.layout.align.horizontal>,
		*/
	);
});

client.connect_signal("request::default_mousebindings", () => {
	awful.mouse.append_client_mousebindings([
		awful.button<AwesomeClient>(["Mod4"], awful.button.names.LEFT, (c) => {
			c.activate({
				context: "mouse_click",
				action: "mouse_move",
			});
		}),
		awful.button<AwesomeClient>(["Mod4"], awful.button.names.RIGHT, (c) => {
			c.activate({
				context: "mouse_click",
				action: "mouse_resize",
			});
		}),
	]);
});

ruled.client.connect_signal("request::rules", () => {
	const p = awful.placement;

	ruled.client.append_rule({
		id: "global",
		rule: {},
		properties: {
			focus: awful.client.focus.filter,
			raise: true,
			screen: awful.screen.preferred,
			// @ts-expect-error: Just Lua things
			placement: p.no_overlap + p.no_offscreen + p.centered,
		},
	});
	ruled.client.append_rule({
		id: "titlebars",
		rule_any: {
			type: ["normal", "dialog"],
		},
		properties: {
			titlebars_enabled: true,
		},
	});
});

/*
tag.connect_signal('request::default_layouts', function()
	awful.layout.append_default_layouts {
		awful.layout.suit.floating,
	}
end)
*/
