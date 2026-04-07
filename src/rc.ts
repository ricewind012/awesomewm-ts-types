import * as awesome from "awesome";
import * as awful from "awful";
import * as beautiful from "beautiful";
import * as dbus from "dbus";
import * as gears from "gears";
import * as naughty from "naughty";
import * as ruled from "ruled";
import * as wibox from "wibox";

/*
const awesome_dir = "/tmp";
if (awesome.startup) {
	awful.spawn.with_line_callback(
		`sh -c "while inotifywait -e modify ${awesome_dir}; do printf "\n"; done`,
		{ stdout: () => awesome.restart() },
	);
}
    */

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
