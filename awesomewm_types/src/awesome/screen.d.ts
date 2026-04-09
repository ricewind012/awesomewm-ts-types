/// <reference types="./shared.d.ts" />

interface AwesomeScreenOutput {
	/**
	 * The screen physical width.
	 */
	mm_width: number;

	/**
	 * The screen physical height.
	 */
	mm_height: number;

	/**
	 * The output name.
	 */
	name: string;

	/**
	 * The identifier of the viewport this output corresponds to.
	 */
	viewport_id: string;
}

interface AwesomeScreenViewport {
	geometry: Rectangle;

	/**
	 * An identifier for this viewport (by pixel resolution). It will not change
	 * when outputs are modified, but will change when the resolution changes.
	 * Note that if it fully disappear, the next time an viewport with the same
	 * resolution appears, it will have a different `id`.
	 */
	id?: number;

	/**
	 * All outputs sharing this viewport.
	 */
	outputs: table;

	/**
	 * The DPI of the most dense output.
	 */
	maximum_dpi: number;

	/**
	 * The DPI of the most least output.
	 */
	minimum_dpi: number;

	/**
	 * The optimal DPI.
	 */
	preferred_dpi: number;
}

/**
 * @noSelf
 */
interface AwesomeScreenSignalMap extends SignalMap {
	/**
	 * AwesomeWM is done scanning for screens.
	 *
	 * Connect to this signal when code needs to be executed after the Lua
	 * context is initialized and modules are loaded, but before screens are
	 * added.
	 *
	 * To manage screens manually, set @link AwesomeScreen.automatic_factory} to
	 * `false` and connect to the `property::viewports` signal. It is then
	 * possible to use {@link AwesomeScreen.fake_add} to create virtual screens.
	 * Be careful when using this, when done incorrectly, no screens will be
	 * created. Using Awesome with zero screens is **not** supported.
	 */
	scanning: () => void;

	/**
	 * AwesomeWM is done scanning for screens.
	 *
	 * Connect to this signal to execute code after the screens have been
	 * created, but before the clients are added. This signal can also be used
	 * to split physical screens into multiple virtual screens before the
	 * clients (and their rules) are executed.
	 *
	 * Note that if no screens exist at this point, the fallback code will be
	 * triggered and the default (detected) screens will be added.
	 */
	scanned: () => void;

	/**
	 *
	 */
	primary_changed: () => void;

	/**
	 * This signal is emitted when a new screen is added to the current setup.
	 */
	added: () => void;

	/**
	 * This signal is emitted when a screen is removed from the setup.
	 */
	removed: () => void;

	/**
	 * This signal is emitted when the list of available screens changes.
	 */
	list: () => void;

	/**
	 * When 2 screens are swapped
	 *
	 * @param screen The other screen
	 * @param is_source If self is the source or the destination of the swap
	 */
	swapped: (screen: AwesomeScreen, is_source: boolean) => void;

	/**
	 * This signal is emitted when the list of physical screen viewport changes.
	 *
	 * Each viewport in the list corresponds to a physical screen rectangle,
	 * which is **not** the `viewports` property of the `screen` objects.
	 */
	"property::viewports": (viewports: AwesomeScreenViewport[]) => void;

	/**
	 * Emitted when a new screen is added.
	 *
	 * The handler(s) of this signal are responsible of adding elements such as
	 * bars, docks or other elements to a screen. The signal is emitted when a
	 * screen is added, including during startup.
	 *
	 * The only default implementation is the one provided by
	 * [rc.lua](https://awesomewm.org/apidoc/sample%20files/rc.lua.html#).
	 *
	 * @param context The context.
	 */
	"request::desktop_decoration": (context: string) => void;

	/**
	 * Emitted when a new screen needs a wallpaper.
	 *
	 * The handler(s) of this signal are responsible to set the wallpaper. The
	 * signal is emitted when a screen is added (including at startup), when its
	 * DPI changes or when its geometry changes.
	 *
	 * The only default implementation is the one provided by
	 * [rc.lua](https://awesomewm.org/apidoc/sample%20files/rc.lua.html#).
	 *
	 * @param context The context.
	 */
	"request::wallpaper": (context: string) => void;

	/**
	 * When a new (physical) screen area has been added.
	 *
	 * **Important**: This only exists when Awesome is started with `--screen
	 * off`. Please also note that this doesn't mean it will appear when a
	 * screen is physically plugged. Depending on the configuration a tool like
	 * `arandr` or the `xrandr` command is needed.
	 *
	 * The default handler will create a screen that fills the area. To
	 * disconnect the default handler, use:
	 * ```lua
	 * screen.disconnect_signal(
	 *     "request::create", awful.screen.create_screen_handler
	 * )
	 * ```
	 *
	 * @param viewport
	 * @param args
	 */
	"request::create": (
		viewport: AwesomeScreenViewport,
		args: {
			/**
			 * Why was this signal sent.
			 */
			context: string;
		},
	) => void;

	/**
	 * When a physical monitor viewport has been removed.
	 *
	 * **Important**: This only exists when Awesome is started with `--screen
	 * off`.
	 *
	 * If you replace the default handler, it is up to you to find the screen(s)
	 * associated with this viewport.
	 *
	 * To disconnect the default handler, use:
	 * ```lua
	 * screen.disconnect_signal(
	 *     "request::create", awful.screen.create_screen_handler
	 * )
	 * ```
	 *
	 * @param viewport
	 * @param args
	 */
	"request::remove": (
		viewport: AwesomeScreenViewport,
		args: {
			/**
			 * Why was this signal sent.
			 */
			context: string;
		},
	) => void;

	/**
	 * When a physical viewport resolution has changed or it has been replaced.
	 *
	 * **Important**: This only exists when Awesome is started with `--screen
	 * off`.
	 *
	 * Note that given the viewports are not the same, the `id` won't be the
	 * same. Also note that if multiple new viewports fit within a single "old"
	 * viewport, the resized screen will be the one with the largest total
	 * overlapping viewport (`intersection.width * intersection.height`),
	 * regardless of the outputs names.
	 *
	 * To disconnect the default handler, use:
	 * ```lua
	 * screen.disconnect_signal(
	 *     "request::create", awful.screen.create_screen_handler
	 * )
	 * ```
	 */
	"request::resize": (
		old_viewport: AwesomeScreenViewport,
		new_viewport: AwesomeScreenViewport,
		args: {
			/**
			 * Why was this signal sent.
			 */
			context: string;
		},
	) => void;

	/**
	 * When the tag history changed.
	 */
	"tag::history::update": () => void;
}

interface AwesomeScreen extends SignalObject<AwesomeScreenSignalMap> {
	/**
	 * Remove a screen.
	 */
	fake_remove(): void;

	/**
	 * Resize a screen.
	 *
	 * Calling this will resize the screen even if it no longer matches the viewport
	 * size.
	 *
	 * @param x The new X coordinate for screen.
	 * @param y The new Y coordinate for screen.
	 * @param width The new width for screen.
	 * @param height The new height for screen.
	 */
	fake_resize(x: number, y: number, width: number, height: number): void;

	/**
	 * Swap a screen with another one in global screen list.
	 *
	 * @param s A screen to swap with.
	 */
	swap(s: AwesomeScreen): void;

	/**
	 * Get the square distance between a
	 *
	 * @param x X coordinate of point.
	 * @param y Y coordinate of point.
	 *
	 * @returns The squared distance of the screen to the provided point.
	 */
	get_square_distance(x: number, y: number): number;

	/**
	 * Get the next screen in a specific direction.
	 *
	 * @param dir The direction.
	 *
	 * @returns The next screen.
	 */
	get_next_in_direction(dir: Direction): AwesomeScreen;

	/**
	 * Get a placement bounding geometry.
	 *
	 * This method computes the different variants of the "usable" screen geometry.
	 *
	 * @returns A table with x, y, width and height.
	 */
	get_bounding_geometry(args: {
		/**
		 * Whether to honor the screen's padding.
		 */
		honor_padding?: boolean;

		/**
		 * Whether to honor the screen's workarea.
		 */
		honor_workarea?: boolean;

		/**
		 * Apply some margins on the output.
		 */
		margins?: number | AwesomeClientGeometry;

		/**
		 * Use this tag's screen.
		 */
		tag?: awesome_tag;

		/**
		 * A parent drawable to use as base geometry.
		 */
		parent?: awesome_drawable;

		/**
		 * A bounding rectangle. This parameter is incompatible with
		 * {@link honor_workarea}.
		 */
		bounding_rect?: Rectangle;
	}): AwesomeClientGeometry;

	/**
	 * Get the list of visible clients for the screen.
	 *
	 * @param stacked Use stacking order? (top to bottom)
	 *
	 * @returns The clients list.
	 */
	get_clients(stacked?: boolean): AwesomeClient[];

	/**
	 * Get all clients assigned to the screen.
	 *
	 * @param stacked Use stacking order? (top to bottom)
	 *
	 * @returns The clients list.
	 */
	get_all_clients(stacked?: boolean): AwesomeClient[];

	/**
	 * Get tiled clients for the screen.
	 *
	 * @param stacked Use stacking order? (top to bottom)
	 *
	 * @returns The clients list.
	 */
	get_tiled_clients(stacked?: boolean): AwesomeClient[];

	/**
	 * Split the screen into multiple screens.
	 *
	 * @param ratios The different ratios to split into. If none is provided, it
	 * is split in half.
	 * @param mode If none is specified, it will split along the longest axis.
	 *
	 * @returns A table with the screen objects. The first value is the original
	 * screen object (s) and the following one(s) are the new screen objects.
	 * The values are ordered from left to right or top to bottom depending on
	 * the value of `mode`.
	 */
	split(ratios: number[], mode: "vertical" | "horizontal"): AwesomeScreen[];

	/**
	 * The screen coordinates.
	 */
	readonly geometry: AwesomeClientGeometry;

	/**
	 * The internal screen number.
	 *
	 * - The indeces are a continuous sequence from 1 to `screen.count()`.
	 * - It is **NOT** related to the actual screen position relative to each
	 *   other.
	 * - 1 is **NOT** necessarily the primary screen.
	 * - When screens are added and removed indices **CAN** change.
	 *
	 * If you really want to keep an array of screens you should use something
	 * along:
	 * ```lua
	 * local myscreens = setmetatable({}, {__mode="k"})
	 * myscreens[ screen[1] ] = "mydata"
	 * ```
	 * But it might be a better option to simply store the data directly in the
	 * screen object as:
	 * ```lua
	 * screen[1].mydata = "mydata"
	 * ```
	 * Remember that screens are also objects, so if you only want to store a
	 * simple property, you can do it directly:
	 * ```lua
	 * screen[1].answer = 42
	 * ```
	 */
	readonly index: number;

	/**
	 * The screen workarea.
	 *
	 * The workarea is a subsection of the screen where clients can be placed.
	 * It usually excludes the toolbars (see `awful.wibar`) and dockable clients
	 * (see {@link AwesomeClient.dockable}) like WindowMaker DockAPP.
	 *
	 * It can be modified be altering the `wibox` or `client` struts.
	 */
	readonly workarea: AwesomeClientGeometry;

	/**
	 * The area where clients can be tiled.
	 *
	 * This property holds the area where clients can be tiled. Use the
	 * {@link padding} property, `wibox.struts` and {@link AwesomeClient.struts}
	 * to modify this area.
	 */
	readonly tiling_area: AwesomeClientGeometry;

	/**
	 * Take a screenshot of the physical screen.
	 */
	readonly content: awesome_raw_surface;

	/**
	 * The screen padding.
	 *
	 * This adds a "buffer" section on each side of the screen.
	 */
	padding: AwesomeClientGeometry | number;

	/**
	 * A list of outputs for this screen with their size in mm.
	 */
	readonly outputs: AwesomeScreenOutput[];

	/**
	 * The list of visible clients for the screen.
	 *
	 * Minimized and unmanaged clients are not included in this list as they are
	 * technically not on the screen. The clients on tags that are currently not
	 * visible are not part of this list.
	 *
	 * Clients are returned using the stacking order (from top to bottom). See
	 * {@link get_clients} if you want them in the order used in the tasklist by
	 * default.
	 */
	clients: AwesomeClient[];

	/**
	 * Get the list of clients assigned to the screen but not currently visible.
	 * This includes minimized clients and clients on hidden tags.
	 */
	hidden_clients: AwesomeClient[];

	/**
	 * All clients assigned to the screen.
	 */
	all_clients: AwesomeClient[];

	/**
	 * Tiled clients for the screen.
	 */
	tiled_clients: AwesomeClient[];

	/**
	 * A list of all tags on the screen.
	 *
	 * Use `tag.screen`, `awful.tag.add`, `awful.tag.new` or `t:delete()` to
	 * alter this list.
	 */
	readonly tags: awesome_tag[];

	/**
	 * A list of all selected tags on the screen.
	 */
	readonly selected_tags: awesome_tag[];

	/**
	 * The first selected tag.
	 */
	readonly selected_tag: awesome_tag | null;

	/**
	 * The number of pixels per inch of the screen.
	 *
	 * The default DPI comes from the X11 server. In most case, it will be 96.
	 * If `autodpi` is set to `true` on the screen, it will use the least dense
	 * dpi from the screen outputs. Most of the time, screens only have a single
	 * output, however it will have two (or more) when "clone mode" is used (eg,
	 * when a screen is duplicated on a projector).
	 */
	dpi: number;

	/**
	 * The lowest density DPI from all of the (physical) outputs.
	 */
	readonly minimum_dpi: number;

	/**
	 * The highest density DPI from all of the (physical) outputs.
	 */
	readonly maximum_dpi: number;

	/**
	 * The preferred DPI from all of the (physical) outputs.
	 *
	 * This is computed by normalizing all output to fill the area, then picking
	 * the lowest of the resulting virtual DPIs.
	 */
	readonly preferred_dpi: number;

	/**
	 * The maximum diagonal size in millimeters.
	 */
	mm_maximum_size: number;

	/**
	 * The minimum diagonal size in millimeters.
	 */
	mm_minimum_size: number;

	/**
	 * The maximum diagonal size in inches.
	 */
	inch_maximum_size: number;

	/**
	 * The minimum diagonal size in inches.
	 */
	inch_minimum_size: number;
}

interface AwesomeGlobalScreen {
	/**
	 * Add a fake screen.
	 *
	 * @param x X coordinate for screen.
	 * @param y Y coordinate for screen.
	 * @param width Width for screen.
	 * @param height Height for screen.
	 * @returns The new screen.
	 */
	fake_add(x: number, y: number, width: number, height: number): AwesomeScreen;

	/**
	 * Get the number of instances.
	 * @returns The number of screen objects alive.
	 */
	instances(): number;

	/**
	 * Iterate over screens.
	 * TODO: this is just `screen` XD
	 * @returns A lua iterator function
	 */
	screen(): Function;

	/**
	 * Get the number of screens.
	 * @returns The screen count.
	 */
	count(): number;

	/**
	 * The primary screen.
	 */
	primary: AwesomeScreen;

	/**
	 * If `screen` objects are created automatically when new viewports are detected.
	 */
	automatic_factory: any;
}
