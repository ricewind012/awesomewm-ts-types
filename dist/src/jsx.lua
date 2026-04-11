local ____exports = {}
function ____exports.make_widget(widget, props, ...)
    local children = {...}
    return {widget, props, children}
end
return ____exports
