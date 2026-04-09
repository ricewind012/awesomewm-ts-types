/// <reference types="./shared.d.ts" />

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

type AwesomeScreenSignalMap = SignalMap & {
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
};

interface AwesomeScreen extends SignalObject<AwesomeScreenSignalMap> {}
