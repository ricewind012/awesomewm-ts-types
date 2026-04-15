local ____exports = {}
local awful = require("awful")
local beautiful = require("beautiful")
local gears = require("gears")
local naughty = require("naughty")
local ruled = require("ruled")
local wibox = require("wibox")
local awesome_dir = gears.filesystem.get_configuration_dir()
if awesome.startup then
    local cmd = ("sh -c \"while inotifywait -e modify " .. awesome_dir) .. "; do printf \"\n\"; done"
    awful.spawn.with_line_callback(
        cmd,
        {stdout = function() return awesome:restart() end}
    )
end
local theme_file = awesome_dir .. "/themes/light-line.lua"
if gears.filesystem.file_readable(theme_file) then
    beautiful.init(theme_file)
end
beautiful.init({wallpaper = tostring(os.getenv("XDG_PICTURES_DIR")) .. "/wal/photo-1773937826151-3eb018f9787c.jpg"})
awesome.connect_signal(
    "startup",
    function()
        naughty.notification({
            icon = tostring(os.getenv("HOME")) .. "/1697911331072543.png",
            title = "Reloaded",
            urgency = "low",
            timeout = 5
        })
    end
)
awesome.connect_signal(
    "debug::error",
    function(err)
        naughty.notification({title = tostring(err)})
    end
)
client.connect_signal(
    "request::manage",
    function(c)
        c:move_to_screen(awful.screen.focused())
        c:activate({raise = true})
        local ____c_0 = c
        local size_hints = ____c_0.size_hints
        if not size_hints then
            print("size_hints is null, wtf")
            return
        end
        if not size_hints.user_position and not size_hints.program_position then
            awful.placement.no_offscreen(c)
        end
    end
)
client.connect_signal(
    "mouse::enter",
    function(c)
        c:activate({context = "mouse_enter", raise = false})
    end
)
local function wdg(self, widget)
    if widget.children == nil then
        return gears.table.join(widget, widget.children)
    end
    return widget
end
client.connect_signal(
    "request::titlebars",
    function(c)
        local titlebar = awful.titlebar(c, {size = 16, position = "bottom"})
        titlebar:setup(wdg(
            nil,
            {
                layout = wibox.layout.flex.horizontal,
                children = {
                    wdg(nil, {layout = wibox.layout.flex.horizontal}),
                    wdg(
                        nil,
                        {
                            layout = wibox.layout.flex.horizontal,
                            buttons = gears.table.join(
                                awful.button(
                                    {},
                                    awful.button.names.LEFT,
                                    function()
                                        c:activate()
                                        awful.mouse.client.move(c)
                                    end
                                ),
                                awful.button(
                                    {},
                                    awful.button.names.RIGHT,
                                    function()
                                        c:activate()
                                        awful.mouse.client.resize(c)
                                    end
                                )
                            )
                        }
                    )
                }
            }
        ))
    end
)
client.connect_signal(
    "request::default_mousebindings",
    function()
        awful.mouse.append_client_mousebindings({
            awful.button(
                {"Mod4"},
                awful.button.names.LEFT,
                function(c)
                    c:activate({context = "mouse_click", action = "mouse_move"})
                end
            ),
            awful.button(
                {"Mod4"},
                awful.button.names.RIGHT,
                function(c)
                    c:activate({context = "mouse_click", action = "mouse_resize"})
                end
            )
        })
    end
)
ruled.client.connect_signal(
    "request::rules",
    function()
        local p = awful.placement
        ruled.client.append_rule({id = "global", rule = {}, properties = {focus = awful.client.focus.filter, raise = true, screen = awful.screen.preferred, placement = p.no_overlap + p.no_offscreen + p.centered}})
        ruled.client.append_rule({id = "titlebars", rule_any = {type = {"normal", "dialog"}}, properties = {titlebars_enabled = true}})
    end
)
return ____exports
