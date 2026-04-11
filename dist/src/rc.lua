local ____exports = {}
local awful = require("src.awful")
local beautiful = require("src.beautiful")
local gears = require("src.gears")
local naughty = require("src.naughty")
local awesome_dir = gears.filesystem.get_configuration_dir()
if awesome.startup then
    local cmd = ("sh -c \"while inotifywait -e modify " .. awesome_dir) .. "; do printf \"\n\"; done"
    awful.spawn.with_line_callback(
        cmd,
        {stdout = function() return awesome.restart() end}
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
            awful.placement:no_offscreen(c)
        end
    end
)
client.connect_signal(
    "mouse::enter",
    function(c)
        c:activate({context = "mouse_enter", raise = false})
    end
)
client.connect_signal(
    "request::titlebars",
    function(c)
        local titlebar = awful:titlebar(c, {size = 16, position = "bottom"})
        titlebar:setup()
    end
)
return ____exports
