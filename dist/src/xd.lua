local ____lualib = require("lualib_bundle")
local __TS__StringAccess = ____lualib.__TS__StringAccess
function capture(self, cmd)
    local file = assert({io.popen(cmd, "r")})
    if not file then
        print("no file")
        return
    end
    local output = unpack(
        assert(file:read("*a")),
        1,
        1
    )
    file:close()
    return output
end
function files(self, dir)
    local files = {}
    local file = io.popen(("printf \"%s\\n\" " .. dir) .. "/*")
    if not file then
        print("no file")
        return
    end
    for i in file:lines() do
        table.insert(files, i)
    end
    file:close()
    return __TS__StringAccess(files[1], 0) == "*" and ({}) or files
end
