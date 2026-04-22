declare enum UnixSignal {
	SIGHUP = 1,
	SIGINT = 2,
	SIGQUIT = 3,
	SIGILL = 4,
	SIGTRAP = 5,
	SIGABRT = 6,
	SIGBUS = 7,
	SIGFPE = 8,
	SIGKILL = 9,
	SIGUSR1 = 10,
	SIGSEGV = 11,
	SIGUSR2 = 12,
	SIGPIPE = 13,
	SIGALRM = 14,
	SIGTERM = 15,
	SIGSTKFLT = 16,
	SIGCHLD = 17,
	SIGCONT = 18,
	SIGSTOP = 19,
	SIGTSTP = 20,
	SIGTTIN = 21,
	SIGTTOU = 22,
	SIGURG = 23,
	SIGXCPU = 24,
	SIGXFSZ = 25,
	SIGVTALRM = 26,
	SIGPROF = 27,
	SIGWINCH = 28,
	SIGPOLL = 29,
	SIGPWR = 30,
	SIGSYS = 31,
}

type AwesomeGlobalSignal =
	| "debug::error"
	| "debug::deprecation"
	| "debug::index::miss"
	| "debug::newindex::miss"
	| "systray::update"
	| "wallpaper_changed"
	| "xkb::map_changed"
	| "xkb::group_changed."
	| "refresh"
	| "startup"
	| "exit"
	| "screen::change"
	| "spawn::canceled"
	| "spawn::change"
	| "spawn::completed"
	| "spawn::initiated"
	| "spawn::timeout";

interface AwesomeGlobalSignalMap extends SignalMap<AwesomeGlobalSignal> {
	/**
	 * A call into the Lua code aborted with an error.
	 *
	 * This signal is used in the example configuration,
	 * [05-awesomerc.md](https://awesomewm.org/apidoc/documentation/05-awesomerc.md.html#),
	 * to let a notification box pop up.
	 *
	 * @param err Table with the error object, can be converted to a string with
	 * `tostring(err)`.
	 */
	"debug::error": (this: void, err: table) => void;

	/**
	 * A deprecated Lua function was called.
	 *
	 * @param hint String with a hint on what to use instead of the deprecated
	 * functionality.
	 * @param see The name of the newer API
	 * @param args The name of the newer API
	 */
	"debug::deprecation": (
		this: void,
		hint: string,
		see?: string,
		args?: table,
	) => void;

	/**
	 * An invalid key was read from an object.
	 *
	 * This can happen if `foo` in an `c.foo` access does not exist.
	 *
	 * @param unknown1 Class?
	 * @param unknown2 Key?
	 */
	"debug::index::miss": (
		this: void,
		unknown1: unknown,
		unknown2: unknown,
	) => void;

	/**
	 * An invalid key was written to an object.
	 *
	 * This can happen if `foo` in an `c.foo = "bar"` assignment doesn't exist.
	 *
	 * @param unknown1 Class?
	 * @param unknown2 Key?
	 * @param unknown3 Value?
	 */
	"debug::newindex::miss": (
		this: void,
		unknown1: unknown,
		unknown2: unknown,
		unknown3: unknown,
	) => void;

	/**
	 * The systray should be updated.
	 *
	 * This signal is used in [wibox.widget.systray](TODO).
	 */
	"systray::update": (this: void) => void;

	/**
	 * The wallpaper has changed.
	 *
	 * This signal is used for pseudo-transparency in {@link wibox.drawable} if
	 * no composite manager is running.
	 */
	wallpaper_changed: (this: void) => void;

	/**
	 * Keyboard map has changed.
	 *
	 * This signal is sent after the new keymap has been loaded. It is used in
	 * [awful.widget.keyboardlayout](https://awesomewm.org/apidoc/widgets/awful.widget.keyboardlayout.html#)
	 * to redraw the layout.
	 */
	"xkb::map_changed": (this: void) => void;

	/**
	 * Keyboard group has changed.
	 *
	 * It's used in
	 * [awful.widget.keyboardlayout](https://awesomewm.org/apidoc/widgets/awful.widget.keyboardlayout.html#)
	 * to redraw the layout.
	 *
	 * @param group Integer containing the changed group
	 */
	"xkb::group_changed.": (this: void, group: number) => void;

	/**
	 * Refresh.
	 *
	 * This signal is emitted as a kind of idle signal in the event loop. One
	 * example usage is in {@link gears.timer} to executed delayed calls.
	 */
	refresh: (this: void) => void;

	/**
	 * AwesomeWM is about to enter the event loop.
	 *
	 * This means all initialization has been done.
	 */
	startup: (this: void) => void;

	/**
	 * AwesomeWM is exiting / about to restart.
	 *
	 * This signal is emitted in the `atexit` handler as well when awesome
	 * restarts.
	 *
	 * @param reason_restart Boolean value is true if the signal was sent
	 * because of a restart.
	 */
	exit: (this: void, reason_restart: boolean) => void;

	/**
	 * The output status of a screen has changed.
	 *
	 * @param output String containing which output has changed.
	 * @param connection_state String containing the connection status of the
	 * output.
	 */
	"screen::change": (
		this: void,
		output: string,
		connection_state: "Connected" | "Disconnected" | "Unknown",
	) => void;

	/**
	 * For some reason the application aborted startup
	 *
	 * @param arg Table which only got the "id" key set
	 */
	"spawn::canceled": (this: void, arg: table) => void;

	/**
	 * When one of the fields from the {@link spawn::initiated} table changes
	 *
	 * @param arg Table which describes the spawn event
	 */
	"spawn::change": (this: void, arg: table) => void;

	/**
	 * An application finished starting
	 *
	 * @param arg Table which only got the "id" key set
	 */
	"spawn::completed": (this: void, arg: table) => void;

	/**
	 * When a new client is beginning to start
	 *
	 * @param arg Table which describes the spawn event
	 */
	"spawn::initiated": (this: void, arg: table) => void;

	/**
	 * An application started a spawn event but didn't start in time.
	 *
	 * @param arg Table which only got the "id" key set
	 */
	"spawn::timeout": (this: void, arg: table) => void;
}

interface AwesomeGlobal
	extends SignalObject<AwesomeGlobalSignal, AwesomeGlobalSignalMap> {
	/**
	 * Execute another application, probably a window manager, to replace awesome.
	 * @param cmd The command line to execute.
	 */
	exec(cmd: string): void;

	/**
	 * Send a signal to a process.
	 * @param pid Process identifier. 0 and negative values have special
	 * meaning. See `man 3 kill`.
	 * @param sig Signal number. See {@link unix_signal} for a list of signals.
	 */
	kill(pid: number, sig: number): boolean;

	/**
	 * Load an image from a given path.
	 * @param name The file name.
	 * @returns a [cairo surface as light user datum, the error message] tuple.
	 */
	load_image(name: string): LuaMultiReturn<[LuaUserdata, string | undefined]>;

	/**
	 *
	 * @param pixbuf The pixbuf as a light user datum.
	 * @param path The pixbuf origin path
	 * @returns A cairo surface as light user datum.
	 */
	pixbuf_to_surface(pixbuf: LuaUserdata, path: any): LuaUserdata;

	/**
	 * Quit awesome.
	 * @param code The exit code to use when exiting.
	 */
	quit(code?: number): void;

	/**
	 * Register a new xproperty.
	 * @param name The name of the X11 property.
	 * @param type
	 */
	register_xproperty(name: string, type: "string" | "number" | "boolean"): void;

	/**
	 * Restart awesome.
	 */
	restart(): void;

	/**
	 * Set the preferred size for client icons.
	 *
	 * The closest equal or bigger size is picked if present, otherwise the
	 * closest smaller size is picked. The default is 0 pixels, ie. the smallest
	 * icon.
	 * @param size The size of the icons in pixels.
	 */
	set_preferred_icon_size(size: number): void;

	/**
	 * Spawn a program. The program will be started on the default screen.
	 * @param cmd The environment to use for the spawned program. Without this
	 * the spawned process `INHERIT`s awesome's environment.
	 * @param use_sn Use startup-notification?
	 * @param stdin Pass `true` to return a fd for stdin. Use `DEV_NULL` to
	 * redirect to /dev/null, or `INHERIT` to inherit the parent's stdin.
	 * @param stdout Implementation note: Pre-2.74 glib doesn't support explicit
	 * DEV_NULL. When DEV_NULL is passed on glib <2.74, Awesome will use glib's
	 * default behaviour. Implementation note: Pre-2.74 glib doesn't support
	 * explicit `INHERIT`. When `INHERIT` is passed on glib <2.74, Awesome will use
	 * glib's default behaviour.
	 * @param stderr Pass `true` to return a fd for stderr. Use "DEV_NULL" to
	 * redirect to /dev/null, or `INHERIT` to inherit the parent's stderr.
	 * Implementation note: Pre-2.74 glib doesn't support explicit `INHERIT`. When
	 * `INHERIT` is passed on glib <2.74, Awesome will use glib's default
	 * behaviour.
	 * @param exit_callback Function to call on process exit. The function
	 * arguments will be type of exit (`exit` or `signal`) and the exit code /
	 * the signal number causing process termination.
	 * @param cmd2 The environment to use for the spawned program. Without this
	 * the spawned process `INHERIT`s awesome's environment.
	 * @returns
	 * - `number` process ID if everything is OK
	 * - `string` startup-notification ID, if `use_sn` is true
	 * - `number` stdin if `stdin` is true
	 * - `number` stdout if `stdout` is true
	 * - `number` stderr if `stderr` is true
	 *
	 * ...or an error string if an error occused.
	 */
	spawn<T extends boolean = true>(
		cmd: string,
		use_sn?: T,
		stdin?: boolean | string,
		stdout?: boolean | string,
		stderr?: boolean | string,
		exit_callback?: (...args: unknown[]) => void,
		cmd2?: string,
	):
		| LuaMultiReturn<
				T extends true
					? [number, string, number, number, number]
					: [number, undefined, undefined, undefined, undefined]
		  >
		| string;

	/**
	 * Synchronize with the X11 server. This is needed in the test suite to
	 * avoid some race conditions. You should never need to use this function.
	 */
	sync(): void;

	/**
	 * Get layout short names.
	 * @returns A string describing the current layout settings, e.g.:
	 * 'pc+us+de:2+inet(evdev)+group(altshifttoggle)+ctrl(nocaps)'
	 */
	xkb_get_group_names(): string[];

	/**
	 * Get current layout number.
	 * @returns Current layout number, integer from 0 to 3.
	 */
	xkb_get_layout_group(): number;

	/**
	 * Switch keyboard layout.
	 * @param num Keyboard layout number, integer from 0 to 3
	 */
	xkb_set_layout_group(num: number): void;

	/**
	 * The AwesomeWM API level.
	 *
	 * By default, this matches the major version (first component of the version).
	 *
	 * API levels are used to allow newer version of AwesomeWM to alter the
	 * behavior and subset deprecated APIs. Using an older API level than the
	 * current major version allows to use legacy rc.lua with little porting.
	 * However, they won't be able to use all the new features. Attempting to
	 * use a newer feature along with an older API level is not and will not be
	 * supported, even if it almost works. Keeping up to date with the newer API
	 * levels is highly recommended.
	 *
	 * Going the other direction, setting an higher API level allows to take
	 * advantage of experimental feature. It will also be much harsher when it
	 * comes to deprecation. Setting the API level value beyond `current+3` will
	 * treat using APIs currently pending deprecation as fatal errors. All new
	 * code submitted to the upstream AwesomeWM codebase is forbidden to use
	 * deprecated APIs. Testing your patches with mode and the default config is
	 * recommended before submitting a patch.
	 *
	 * You can use the
	 * [-l](https://awesomewm.org/apidoc/core_components/awesome.html#kill)
	 * command line option or `api-level` modeline key to set the API level for
	 * your [rc.lua](https://awesomewm.org/apidoc/sample%20files/rc.lua.html#).
	 * This setting is global and read only, individual modules cannot set their
	 * own API level.
	 */
	readonly api_level: string;

	/**
	 * True if a composite manager is running.
	 */
	composite_manager_running: boolean;

	/**
	 * The configuration file which has been loaded.
	 */
	conffile: string;

	/**
	 * The hostname of the computer on which we are running.
	 */
	hostname: string;

	/**
	 * The path where icons were installed to.
	 */
	icon_path: string;

	/**
	 * True if we are still in startup, false otherwise.
	 */
	startup: boolean;

	/**
	 * Error message for errors that occurred during startup.
	 */
	startup_errors: string;

	/**
	 * The path where themes were installed to.
	 */
	themes_path: string;

	/**
	 * Table mapping between signal numbers and signal identifiers.
	 */
	unix_signal: typeof UnixSignal;

	/**
	 * The AwesomeWM release name.
	 */
	version: string;
}
