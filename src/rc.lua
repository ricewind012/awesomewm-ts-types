--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local awesome = require("awesome")
local awful = require("awful")
local gears = require("gears")
local naughty = require("naughty")
local awesome_dir = gears.filesystem.get_configuration_dir()
if awesome.startup then
    local cmd = ("sh -c \"while inotifywait -e modify " .. awesome_dir) .. "; do printf \"\n\"; done"
    awful.spawn:with_line_callback(
        cmd,
        {stdout = function() return awesome.restart() end}
    )
end
awesome.connect_signal(
    "startup",
    function()
        naughty.notification({
            icon = os.getenv("HOME") .. "/1697911331072543.png",
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
return ____exports
