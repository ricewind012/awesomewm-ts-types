import * as awful from "awful";
import * as beautiful from "beautiful";
import * as wibox from "wibox";

import { user } from "~/config/user";
import make_widget from "~/jsx";
import { Wibar } from "~/ui/wibar";

/// Attach tags and widgets to all screens.
screen.connect_signal("request::desktop_decoration", (s) => {
	// TODO(ts): apparently this signal returns a screen, but not context?
	const scr = s as unknown as AwesomeScreen;
	// Create all tags and attach the layouts to each of them.
	awful.tag(user.tags, s, awful.layout.layouts[1]);
	// Attach a wibar to each screen.
	scr.bar = <Wibar s={scr} />;
});

/// Wallpaper.
// NOTE: `awful.wallpaper` is ideal for creating a wallpaper IF YOU
// BENEFIT FROM IT BEING A WIDGET and not just the root window
// background. IF YOU JUST WISH TO SET THE ROOT WINDOW BACKGROUND, you
// may want to use the deprecated `gears.wallpaper` instead. This is
// the most common case of just wanting to set an image as wallpaper.
screen.connect_signal("request::wallpaper", (s) => {
	// TODO(ts): apparently this signal returns a screen, but not context?
	const scr = s as unknown as AwesomeScreen;
	const widget = (
		<wibox.container.tile halign="center" valign="center" tiled={false}>
			<wibox.widget.imagebox
				image={beautiful.get().wallpaper}
				upscale={true}
				downscale={true}
			/>
		</wibox.container.tile>
	);
	scr.mywallpaper = <awful.wallpaper screen={scr} widget={widget} />;
});
// An example of what's mentioned above. For more information, see:
// https://awesomewm.org/apidoc/utility_libraries/gears.wallpaper.html
// gears.wallpaper.maximized(beautiful.wallpaper)
