------------------------------------------------------------
-- hi
------------------------------------------------------------
awful     = require('awful')
beautiful = require('beautiful')
gears     = require('gears')
naughty   = require('naughty')
ruled     = require('ruled')
wibox     = require('wibox')

------------------------------------------------------------
-- functions.lua
------------------------------------------------------------
function string.split(self, strChar)
	local tStrings = {}

	for i in self:gmatch('([^' .. strChar .. ']+)') do
		table.insert(tStrings, i)
	end
		
	return #tStrings > 0 and tStrings or {self}
end

function os.capture(strCmd)
	local hFile     = assert(io.popen(strCmd, 'r'))
	local strOutput = assert(hFile:read('*a'))
	hFile:close()

	return strOutput
end

function os.files(strDir)
	local tFiles  = {}
	local hFile   = io.popen(
		'printf "%s\\n" ' .. strDir .. '/*'
	)

	for i in hFile:lines() do
		table.insert(tFiles, i)
	end
	hFile:close()

	return string.sub(tFiles[1], -1) == '*' and {} or tFiles
end

------------------------------------------------------------
-- globals.lua
------------------------------------------------------------
-- 4 = super
g_strModKey  = 'Mod4'
g_strAwesome = os.getenv('XDG_CONFIG_HOME') .. '/awesome'

-- temp
env          = os.getenv
g_nPad       = 8

-- log file
--g_hLogFile = io.open(os.getenv('TMPDIR') .. '/awm.log', 'w')

-- apps
g_Apps = {
	terminal = os.getenv('TERMINAL') or 'xterm',
	editor   = os.getenv('EDITOR') or 'nano',
	browser  = os.getenv('BROWSER') or 'firefox'
}

-- xresources
g_Xresources = {}

local strOutput = os.capture('xrdb -query')
--io.lines(filename)
--css '^%s+..(.-):%s+(.+);$'
for i in string.gmatch(strOutput, '[^\r\n]*') do
	local _, _, strKey, strValue = string.find(
		i,
		'(.-):%s+(.+)'
	)

	if strKey then
		strKey = string.gsub(strKey, '^*.', '')
		g_Xresources[strKey] = strValue
	end
end

------------------------------------------------------------
-- menu.lua
------------------------------------------------------------
local strEditorCmd = string.format(
	'%s -e %s ',
	g_Apps.terminal,
	g_Apps.editor
)

local tEntries = {}
local tThemes  = os.files(g_strAwesome .. '/themes')

for i, t in ipairs(tThemes) do
	tEntries[i] = {
		string.gsub(
			string.gsub(strTheme, '.*/', ''),
			'.lua$',
			''
		),
		function() beautiful.init(strTheme) end
	}
end

local hMainMenu = awful.menu {
	{ 'Browser',  g_Apps.browser },
	{ 'Terminal', g_Apps.terminal },
	{ 'Editor',   strEditorCmd },

	{ 'Themes',   tEntries },
	{ 'Kill',     function()
		local tClients = client.get()

		if #tClients <= 0 then
			return
		end

		local tEntries = {}

		for i, hClient in ipairs(tClients) do
			tEntries[i] = {
				hClient.name,
				function() hClient:kill() end,
				hClient.icon
			}
		end

		return tEntries
	end },

	{ 'Edit',     strEditorCmd .. awesome.conffile },
	{ 'Restart',  awesome.restart }
}

awful.widget.launcher {
	menu = hMainMenu
}

awful.mouse.append_global_mousebindings {
	--awful.button({}, 1, function() end),

	awful.button({}, 3, function()
		hMainMenu:toggle()
	end)
}

------------------------------------------------------------
-- notifications.lua
------------------------------------------------------------
naughty.connect_signal('request::display', function(n)
	naughty.layout.box {
		notification    = n,
		widget_template = {
			{
				{
					widget        = naughty.widget.icon,
					forced_width  = 128,
					forced_height = 128,
				},
				{
					{
						{
							naughty.widget.title,
							layout = wibox.layout.align.horizontal,
						},
						widget  = wibox.container.margin,
						margins = g_nPad,
					},
					layout = wibox.layout.fixed.vertical
				},
				layout = wibox.layout.fixed.horizontal
			},
			{
				{
					naughty.widget.message,
					layout = wibox.layout.align.horizontal,
				},
				widget  = wibox.container.margin,
				margins = g_nPad,
			},
			layout = wibox.layout.fixed.vertical
		}
	}
end)

ruled.notification.connect_signal('request::rules', function()
	ruled.notification.append_rule {
		rule       = { urgency = 'critical' },
		properties = { timeout = 0 },
	}
end)

------------------------------------------------------------
-- panel.lua
------------------------------------------------------------
screen.connect_signal('request::desktop_decoration', function(s)
	awful.tag(
		{ '1', '2', '3', '4', '5' },
		s,
		awful.layout.layouts[1]
	)

	s.mylayoutbox = awful.widget.layoutbox {
		screen  = s,
		buttons = {
			awful.button({ }, 1, function()
				awful.layout.inc( 1)
			end),

			awful.button({ }, 3, function()
				awful.layout.inc(-1)
			end),
		}
	}

	s.mytasklist = awful.widget.tasklist {
		screen  = s,
		layout  = wibox.layout.flex.horizontal,
		filter  = awful.widget.tasklist.filter.alltags,
		buttons = {
			awful.button({}, 1, function(c)
				c:activate {
					context = 'tasklist',
					action  = 'toggle_minimization',
				}
			end),

			awful.button({}, 3, function()
				awful.menu.client_list { theme = { width = 250 } }
			end),
		},
		widget_template =  {
			{
				widget = wibox.widget.textbox,
				id     = 'text_role',
			},
			widget  = wibox.container.margin,
			margins = {
				left  = g_nPad * 2,
				right = g_nPad * 2,
			}
		}
	}

	s.myclock = {
		{
			widget = wibox.widget.textclock,
			format = '%H:%M',
		},
		widget  = wibox.container.margin,
		margins = {
			left  = g_nPad * 4,
			right = g_nPad * 4,
		}
	}

	s.mywibox = awful.wibar {
		screen   = s,
		position = 'bottom',
		widget   = {
			layout = wibox.layout.align.horizontal,
			-- Have to keep this, so the windows will grow
			{ layout = wibox.layout.fixed.horizontal },
			s.mytasklist,
			s.myclock,
		}
	}
end)

------------------------------------------------------------
-- window.lua
------------------------------------------------------------
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
