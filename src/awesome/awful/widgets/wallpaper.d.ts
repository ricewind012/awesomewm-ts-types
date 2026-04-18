interface WallpaperInstanceOptions {
	/**
	 * The wallpaper widget.
	 *
	 * When set, instead of using the `image_path` or `surface` properties, the
	 * wallpaper will be defined as a normal `wibox` widget tree.
	 */
	widget: BaseWidget | undefined;

	/**
	 * The wallpaper DPI (dots per inch).
	 *
	 * Each screen has a DPI. This value will be used by default, but sometime
	 * it is useful to override the screen DPI and use a custom one. This makes
	 * possible, for example, to draw the widgets bigger than they would
	 * otherwise be.
	 *
	 * If not DPI is defined, it will use the smallest DPI from any of the
	 * screen.
	 */
	dpi: number;

	/**
	 * The wallpaper screen.
	 *
	 * Note that there can only be one wallpaper per screen. If there is more,
	 * one will be chosen and all other ignored.
	 */
	screen: AwesomeScreen | string;

	/**
	 * A list of screen for this wallpaper.
	 */
	screens: AwesomeScreen[];

	/**
	 * The background color.
	 *
	 * It will be used as the "fill" color if the `image` doesn't take all the
	 * screen space. It will also be the default background for the widget.
	 */
	bg: cairo_solid_pattern;

	/**
	 * The foreground color.
	 *
	 * This will be used by the {@link widget} (if any).
	 */
	fg: cairo_solid_pattern;

	/**
	 * Honor the workarea.
	 *
	 * When set to `true`, the wallpaper will only fill the workarea space
	 * instead of the entire screen. This means it wont be drawn below the
	 * `awful.wibar` or docked clients. This is useful when using opaque bars.
	 * Note that it can cause aspect ratio issues for the wallpaper `image` and
	 * add bars colored with the bg color on the sides.
	 */
	honor_workarea: boolean;

	/**
	 * Honor the screen padding.
	 *
	 * When set, this will look at the `screen.padding` property to restrict the
	 * area where the wallpaper is rendered.
	 */
	honor_padding: boolean;

	/**
	 * Returns the list of screen(s) area which won't be covered by the
	 * wallpaper.
	 *
	 * When {@link honor_workarea}, {@link honor_padding} or panning are used,
	 * some section of the screen won't have a wallpaper.
	 */
	uncovered_areas: Rectangle;

	/**
	 * The color for the uncovered areas.
	 */
	uncovered_areas_color: cairo_solid_pattern;

	/**
	 * Defines where the wallpaper is placed when there is multiple screens.
	 *
	 * When there is more than 1 screen, it is possible they don't have the same
	 * resolution, position or orientation. Panning the wallpaper over them may
	 * look better if a continuous rectangle is used rather than creating a
	 * virtual rectangle around all screens.
	 */
	panning_area:
		| "outer"
		| "inner"
		| "inner_horizontal"
		| "inner_vertical"
		| ((wp: WallpaperInstance) => Rectangle);
}

interface WallpaperInstance extends WallpaperInstanceOptions {
	/**
	 * Add another screen (enable panning).
	 *
	 * @param screen The screen object.
	 */
	add_screen(screen: AwesomeScreen): void;

	/**
	 * Detach the wallpaper from all screens. Adding a new wallpaper to a screen
	 * will automatically detach the older one. However there is some case when
	 * it is useful to call this manually. For example, when adding a new panned
	 * wallpaper, it is possible that 2 wallpaper will have an overlap.
	 */
	detach(): void;

	/**
	 * Repaint the wallpaper.
	 *
	 * By default, even if the widget changes, the wallpaper will **NOT** be
	 * automatically repainted. Repainting the native X11 wallpaper is slow and
	 * it would be too easy to accidentally cause a performance problem. If you
	 * really need to repaint the wallpaper, call this method.
	 */
	repaint(): void;

	/**
	 * Remove a screen.
	 *
	 * Calling this will remove a screen, but will **not** repaint its area. In
	 * this example, the wallpaper was spanning all 3 screens and the first
	 * screen was removed:
	 *
	 * ```lua
	 * wall:remove_screen(screen[1])
	 * ```
	 *
	 * As you can see, the content of screen 1 still looks like it is part of
	 * the 3 screen wallpaper. The only use case for calling this method is if
	 * you use a 3rd party tools to change the wallpaper.
	 *
	 * If you wish to simply remove a screen and not have leftover content, it
	 * is simpler to just create a new wallpaper for that screen:
	 *
	 * ```lua
	 * awful.wallpaper {
	 *     screen = screen[1],
	 *     bg     = "#00ffff",
	 * }
	 * ```
	 *
	 * @param screen The screen to remove.
	 *
	 * @returns `true` if the screen was removed and `false` if the screen
	 * wasn't found.
	 */
	remove_screen(screen: AwesomeScreen): boolean;
}

/**
 * @noSelf
 */
interface AwfulWallpaper {
	(
		// https://github.com/TypeScriptToLua/TypeScriptToLua/issues/1661
		this: void,
		args: Partial<WallpaperInstanceOptions>,
	): WallpaperInstance;
}
