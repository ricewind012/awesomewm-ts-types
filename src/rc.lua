--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local awesome = require("awesome")
local naughty = require("naughty")
local ____awesome_0 = awesome
local connect_signal = ____awesome_0.connect_signal
print(connect_signal)
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
    function(____, err)
        naughty.notification({title = tostring(err)})
    end
)
return ____exports
