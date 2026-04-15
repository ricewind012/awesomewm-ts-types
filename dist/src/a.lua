local ____exports = {}
signal.connect_signal(
    "signal2",
    function(____, text)
        print(text)
    end
)
return ____exports
