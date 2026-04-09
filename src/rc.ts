import * as awesome from "awesome";
import * as awful from "awful";
import * as beautiful from "beautiful";
import * as dbus from "dbus";
import * as gears from "gears";
import * as naughty from "naughty";

const awesome_dir = gears.filesystem.get_configuration_dir();
if (awesome.startup) {
	const cmd = `sh -c "while inotifywait -e modify ${awesome_dir}; do printf "\n"; done`;
	awful.spawn.with_line_callback(cmd, {
		stdout: () => awesome.restart(),
	});
}

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
