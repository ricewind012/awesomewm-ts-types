import * as awful from "awful";
import * as beautiful from "beautiful";
import * as wibox from "wibox";

import { user } from "~/config/user";
import make_widget from "~/jsx";
import { Wibar } from "~/ui/wibar";

/// Attach tags and widgets to all screens.
screen.connect_signal("request::desktop_decoration", (s) => {
	// Create all tags and attach the layouts to each of them.
	awful.tag(user.tags, s, awful.layout.layouts[1]);
	// Attach a wibar to each screen.
	s.bar = <Wibar s={s} />;
});

/// Wallpaper.
screen.connect_signal("request::wallpaper", (s) => {
	const widget = (
		<wibox.container.tile halign="center" valign="center" tiled={false}>
			<wibox.widget.imagebox
				image={beautiful.get().wallpaper}
				upscale={true}
				downscale={true}
			/>
		</wibox.container.tile>
	);
	// NOTE: `awful.wallpaper` is ideal for creating a wallpaper IF YOU
	// BENEFIT FROM IT BEING A WIDGET and not just the root window
	// background. IF YOU JUST WISH TO SET THE ROOT WINDOW BACKGROUND, you
	// may want to use the deprecated `gears.wallpaper` instead. This is
	// the most common case of just wanting to set an image as wallpaper.
	s.mywallpaper = <awful.wallpaper screen={s} widget={widget} />;
});
// An example of what's mentioned above. For more information, see:
// https://awesomewm.org/apidoc/utility_libraries/gears.wallpaper.html
// gears.wallpaper.maximized(beautiful.wallpaper)
