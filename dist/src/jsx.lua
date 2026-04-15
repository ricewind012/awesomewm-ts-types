local ____exports = {}
function ____exports.default(self, ____type, props, ...)
    local children = {...}
    print((((("Got widget " .. tostring(____type)) .. " with props ") .. tostring(props)) .. " and children ") .. tostring(children))
    return nil
end
return ____exports
