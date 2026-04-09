import * as awful from "awful";
import * as beautiful from "beautiful";
import * as gears from "gears";
import * as naughty from "naughty";

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

/*
client.connect_signal('request::titlebars', function(c)
	local hTitlebar = awful.titlebar(c, {
		size     = 16,
		position = 'bottom',
	})

	hTitlebar:setup {
		{
			layout  = wibox.layout.flex.horizontal,
		},
		{
			buttons = gears.table.join(
				awful.button({}, 1, function()
					client.focus = c
					c:raise()
					awful.mouse.client.move(c)
				end),

				awful.button({}, 3, function()
					client.focus = c
					c:raise()
					awful.mouse.client.resize(c)
				end)
			),
			layout  = wibox.layout.flex.horizontal,
		},
		layout = wibox.layout.align.horizontal
	}
end)

-- TODO is this neeeded
client.connect_signal('request::default_mousebindings', function()
	awful.mouse.append_client_mousebindings {
		awful.button({ g_strModKey }, 1, function(c)
			c:activate {
				context = 'mouse_click',
				action  = 'mouse_move',
			}
		end),

		awful.button({ g_strModKey }, 3, function(c)
			c:activate {
				context = 'mouse_click',
				action  = 'mouse_resize',
			}
		end)
	}
end)

-- TODO same ^
ruled.client.connect_signal('request::rules', function()
	local p = awful.placement

	ruled.client.append_rule {
		id         = 'global',
		rule       = {},
		properties = {
			focus     = awful.client.focus.filter,
			raise     = true,
			screen    = awful.screen.preferred,
			placement = p.no_overlap + p.no_offscreen + p.centered
		}
	}

	ruled.client.append_rule {
		id         = 'titlebars',
		rule_any   = { type = { 'normal', 'dialog' } },
		properties = { titlebars_enabled = true },
	}
end)

tag.connect_signal('request::default_layouts', function()
	awful.layout.append_default_layouts {
		awful.layout.suit.floating,
	}
end)
*/
