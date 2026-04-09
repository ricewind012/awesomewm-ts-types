/// <reference types="../todo.d.ts" />
/// <reference types="../utils.d.ts" />
/// <reference types="./screen.d.ts" />
/// <reference types="./shared.d.ts" />

/**
 * @noSelf
 */
interface AwesomeClientSignalMap extends SignalMap {
	/**
	 * Emitted when AwesomeWM is about to scan for existing clients.
	 *
	 * Connect to this signal when code needs to be executed after screens are
	 * initialized, but before clients are added.
	 */
	scanning: () => void;

	/**
	 * Emitted when AwesomeWM is done scanning for clients.
	 *
	 * This is emitted before the `startup` signal and after the `scanning`
	 * signal.
	 */
	scanned: () => void;

	/**
	 * Emitted when a client gains focus.
	 */
	focus: () => void;

	/**
	 * Emitted before `request::manage`, after `request::unmanage`, and when
	 * clients swap.
	 */
	list: () => void;

	/**
	 * Emitted when 2 clients are swapped
	 *
	 * @param client The other client
	 * @param is_source If self is the source or the destination of the swap
	 */
	swapped: (client: AwesomeClient, is_source: boolean) => void;

	/**
	 * Emitted when a new client appears and gets managed by Awesome.
	 *
	 * This request should be implemented by code which track the client. It
	 * isn't recommended to use this to initialize the client content. This use
	 * case is a better fit for {@link ruled.client}, which has built-in
	 * dependency management. Using this request to mutate the client state will
	 * likely conflict with {@link ruled.client}.
	 *
	 * @param c The client.
	 * @param context What created the client.
	 * @param hints More metadata (currently empty, it exists for compliance
	 * with the other `request::` signals).
	 */
	"request::manage": (
		c: AwesomeClient,
		context: "new" | "startup",
		hints: table,
	) => void;

	/**
	 * Emitted when a client is going away.
	 *
	 * Each places which store `client` objects in non-weak table or whose state depend on the current client should answer this request.
	 *
	 * The contexts are:
	 *
	 * - **user**: `c:unmanage()` was called.
	 * - **reparented**: The window was reparented to another window. It is no
	 *   longer a stand alone client.
	 * - **destroyed**: The window was closed.
	 *
	 * @param c The client.
	 * @param context Why was the client unmanaged.
	 * @param hints More metadata (currently empty, it exists for compliance
	 * with the other `request::` signals).
	 */
	"request::unmanage": (
		c: AwesomeClient,
		context: "user" | "reparented" | "destroyed",
		hints: table,
	) => void;

	/**
	 * Emitted when a mouse button is pressed in a client.
	 */
	"button::press": () => void;

	/**
	 * Emitted when a mouse button is released in a client.
	 */
	"button::release": () => void;

	/**
	 * Emitted when the mouse enters a client.
	 */
	"mouse::enter": (c: AwesomeClient) => void;

	/**
	 * Emitted when the mouse leaves a client.
	 */
	"mouse::leave": () => void;

	/**
	 * Emitted when the mouse moves within a client.
	 */
	"mouse::move": () => void;

	// TODO
	/**
	 * Emitted when a client should get activated (focused and/or raised).
	 *
	 * @param c The client
	 * @param context The context where this signal was used.
	 * @param hints A table with additional hints
	 */
	"request::activate": (
		c: AwesomeClient,
		context: string,
		hints?: {
			/**
			 * Should the client be raised?
			 */
			raise?: boolean;
		},
	) => void;

	/**
	 * Emitted when an event could lead to the client being activated.
	 *
	 * This is an layer "on top" of `request::activate` for event which are not
	 * actual request for activation/focus, but where "it would be nice" if the
	 * client got the focus. This includes the focus-follow-mouse model and
	 * focusing previous clients when the selected tag changes.
	 *
	 * This idea is that `request::autoactivate` will emit `request::activate`.
	 * However it is much easier to replace the handler for
	 * `request::autoactivate` than it is to replace the handler for
	 * request::activate. Thus it provides a nice abstraction to simplify
	 * handling the focus when switching tags or moving the mouse.
	 *
	 * @param c The client
	 * @param context The context where this signal was used.
	 * @param hints A table with additional hints
	 */
	"request::autoactivate": (
		c: AwesomeClient,
		context: string,
		hints?: {
			/**
			 * Should the client be raised?
			 */
			raise?: boolean;
		},
	) => void;

	/**
	 * Emitted when something request a client's geometry to be modified.
	 *
	 * @param c The client
	 * @param context Why and what to resize. This is used for the handlers to
	 * know if they are capable of applying the new geometry.
	 * @param hints Additional arguments. Each context handler may interpret
	 * this differently.
	 */
	"request::geometry": (
		c: AwesomeClient,
		context: string,
		hints?: table,
	) => void;

	/**
	 * Emitted when a client requests to be moved to a tag or needs a new tag.
	 *
	 * @param c The client
	 * @param tag A preferred tag.
	 * @param hints
	 */
	"request::tag": (
		c: AwesomeClient,
		tag?: awesome_tag,
		hints?: { reason?: string; screen?: AwesomeScreen },
	) => void;

	/**
	 * Emitted when any client's `urgent` property changes.
	 *
	 * Emitted both when `urgent = true` and `urgent = false`, so you will
	 * likely want to check `c.urgent` within the signal callback:
	 *
	 * ```lua
	 * client.connect_signal("property::urgent", function(c)
	 *     if c.urgent then
	 *         naughty.notify {
	 *             title = "Urgent client",
	 *             message = c.name,
	 *         }
	 *     end
	 * end)
	 * ```
	 *
	 * @param c The client whose property changed.
	 */
	"request::urgent": (c: AwesomeClient) => void;

	/**
	 * Emitted once to request default client mousebindings during the initial
	 * startup sequence.
	 *
	 * This signal gives all modules a chance to register their default client
	 * mousebindings. They will then be added to all new clients, unless rules
	 * overwrite them via the `buttons` property.
	 *
	 * @param context The reason why the signal was sent.
	 */
	"request::default_mousebindings": (context: "startup") => void;

	/**
	 * Emitted once to request default client keybindings during the initial startup
	 * sequence.
	 *
	 * This signal gives all modules a chance to register their default client
	 * keybindings. They will then be added to all new clients, unless rules
	 * overwrite them via the `keys` property.
	 *
	 * @param context The reason why the signal was sent.
	 */
	"request::default_keybindings": (context: "startup") => void;

	/**
	 * Emitted when a client gets tagged.
	 */
	tagged: (t: awesome_tag) => void;

	/**
	 * Emitted when a client gets unfocused.
	 */
	unfocus: () => void;

	/**
	 * Emitted when a client gets untagged.
	 */
	untagged: (t: awesome_tag) => void;

	/**
	 * Emitted when the client is raised within its layer.
	 */
	raised: () => void;

	/**
	 * Emitted when the client is lowered within its layer.
	 */
	lowered: () => void;

	/**
	 * The last geometry when client was floating.
	 */
	"property::floating_geometry": () => void;

	/**
	 * Emitted when a client need to get a titlebar.
	 *
	 * @param c The clientt.
	 * @param content The context (like "rules").
	 * @param hints Some hints.
	 */
	"request::titlebars": (
		c: AwesomeClient,
		content: string,
		hints: table,
	) => void;

	/**
	 * Emitted when the border client might need to be update.
	 *
	 * The contexts are:
	 *
	 * - **added**: When a new client is created.
	 * - **active**: When client gains the focus (or stop being urgent/floating
	 *   but is active).
	 * - **inactive**: When client loses the focus (or stop being
	 *   urgent/floating and is not active.
	 * - **urgent**: When a client becomes urgent.
	 * - **floating**: When the floating or maximization state changes.
	 *
	 * @param c The client.
	 * @param context The context.
	 * @param hints The hints.
	 */
	"request::border": (
		c: AwesomeClient,
		context: "added" | "active" | "inactive" | "urgent" | "floating",
		hints: table,
	) => void;

	/**
	 * @deprecated Use `request::manage`
	 */
	manage: never;

	/**
	 * @deprecated Use `request::unmanage`
	 */
	unmanage: never;

	/**
	 * @deprecated
	 */
	marked: never;

	/**
	 * @deprecated
	 */
	unmarked: never;
}

interface AwesomeClientGeometry {
	x: number;
	y: number;
	width: number;
	height: number;
}

interface AwesomeClientStrut {
	left: number;
	right: number;
	top: number;
	bottom: number;
}

/**
 * @see https://awesomewm.org/apidoc/core_components/client.html
 */
interface AwesomeClient
	extends Omit<SignalObject<AwesomeClientSignalMap>, "disconnect_signal"> {
	/**
	 * Return client struts (reserved space at the edge of the screen).
	 *
	 * The struts area is a table that defines how much space of the screen workarea
	 * this client should reserve for itself.
	 *
	 * This corresponds to EWMH's `_NET_WM_STRUT` and `_NET_WM_STRUT_PARTIAL`.
	 *
	 * @param struts A table with new strut values, or none.
	 *
	 * @returns A table with strut values.
	 */
	struts(struts: AwesomeClientStrut): AwesomeClientStrut;

	/**
	 * Check if a client is visible on its screen.
	 *
	 * @returns A boolean value, true if the client is visible, false otherwise.
	 */
	isvisible(): boolean;

	/**
	 * Kill a client.
	 *
	 * This method can be used to close (kill) a **client** using the X11 protocol.
	 * To use the POSIX way to kill a **process**, use {@link awesome.kill} (using
	 * the client `pid` property).
	 */
	kill(): void;

	/**
	 * Swap a client with another one in global client list.
	 *
	 * @param c A client to swap with.
	 */
	swap(c: AwesomeClient): void;

	/**
	 * Access or set the client tags.
	 *
	 * Use the {@link first_tag} field to access the first tag of a client directly.
	 *
	 * @param tags_table A table with tags to set, or `nil` to get the current tags.
	 *
	 * @returns A table with all tags.
	 */
	tags(tags_table?: awesome_tag[]): awesome_tag[];

	/**
	 * Raise a client on top of others which are on the same layer.
	 */
	raise(): void;

	/**
	 * Lower a client on bottom of others which are on the same layer.
	 */
	lower(): void;

	/**
	 * Stop managing a client.
	 */
	unmanage(): void;

	/**
	 * Return or set client geometry.
	 *
	 * @param geo A table with new coordinates, or `nil`.
	 *
	 * @returns A table with client geometry and coordinates.
	 */
	geometry(geo?: AwesomeClientGeometry): AwesomeClientGeometry;

	/**
	 * Apply size hints to a size.
	 *
	 * This method applies the client size hints. The client will be resized
	 * according to the size hints as long as {@link size_hints_honor} is true.
	 * Regardless of the status of {@link size_hints_honor}, this method will return
	 * the size with the size hints applied.
	 *
	 * @param width Desired width of client.
	 * @param height Desired height of client.
	 *
	 * @returns integer
	 *         Actual width of client
	 *
	 *            integer
	 *         Actual height of client
	 */
	apply_size_hints(
		width: number,
		height: number,
	): LuaMultiReturn<[number, number]>;

	/**
	 * Get the client's n-th icon.
	 *
	 * The icon index can be deternined by inspecting the {@link icon_sizes} property
	 * first.
	 *
	 * The user has the responsibility to test the value returned by this function to
	 * ensure an icon have been returned.
	 *
	 * It is recommended to use the `awful.widget.clienticon` widget when the client
	 * icon is used in a widget structure.
	 *
	 * Note that this function tests the provided index and raise an "invalid icon
	 * index" error if the provided index doesn't exist in the client's icons list
	 * (by raising an error, the function will be stopped and nothing will be
	 * returned to the caller).
	 *
	 * @param index The index in the list of icons to get.
	 *
	 * @returns A lightuserdata for a cairo surface. This reference must be
	 *  destroyed!
	 */
	get_icon(index: number): surface;

	/**
	 * Jump to the given client.
	 *
	 * Takes care of focussing the screen, the right tag, etc.
	 *
	 * @param merge If true then merge tags (select the client's first tag
	 * additionally) when the client is not visible. If it is a function, it will be
	 * called with the client and its first tag as arguments.
	 */
	jump_to(merge: boolean | ((c: AwesomeClient) => void)): void;

	/**
	 * Append a keybinding.
	 *
	 * @param key The key.
	 */
	append_keybinding(key: awful.key): void;

	/**
	 * Remove a keybinding.
	 *
	 * @param key The key.
	 */
	remove_keybinding(key: awful.key): void;

	/**
	 * Append a mousebinding.
	 *
	 * @param button The button.
	 */
	append_mousebinding(button: awful.button): void;

	/**
	 * Remove a mousebinding.
	 *
	 * @param button The button.
	 */
	remove_mousebinding(button: awful.button): void;

	/**
	 * Move the client to the most significant layout position.
	 *
	 * This only affects tiled clients. It will shift all other client to fill the
	 * gap caused to by the move.
	 */
	to_primary_section(): void;

	/**
	 * Move the client to the least significant layout position.
	 *
	 * his only affects tiled clients. It will shift all other client to fill the gap
	 * caused to by the move.
	 */
	to_secondary_section(): void;

	/**
	 * Move/resize a client relative to current coordinates.
	 *
	 * @param x The relative x coordinate.
	 * @param y The relative y coordinate.
	 * @param w The relative width.
	 * @param h The relative height.
	 */
	relative_move(x: number, y: number, w: number, h: number): void;

	/**
	 * Move a client to a tag.
	 *
	 * @param target The tag to move the client to.
	 */
	move_to_tag(target: awesome_tag): void;

	/**
	 * Toggle a tag on a client.
	 *
	 * @param target The tag to move the client to.
	 */
	toggle_tag(target: awesome_tag): void;

	/**
	 * Move a client to a screen. Default is next screen, cycling.
	 *
	 * @param s The screen, default to current + 1.
	 */
	move_to_screen(s: AwesomeScreen | null): void;

	/**
	 * Find suitable tags for newly created clients.
	 *
	 * Despite its naming, this is primarily used to tag newly created clients. As
	 * such, this method has no effect when applied to a client that already has tags
	 * assigned (except for emitting `property::tag`).
	 *
	 * Additionally, while it is a rare case, if the client's screen has no selected
	 * tags at the point of calling this method, it will fall back to the screen's
	 * full set of tags.
	 */
	to_selected_tags(): void;

	/**
	 * Get a matching transient_for client (if any).
	 *
	 * @param matcher A function that should return true, if a matching parent client
	 * is found.
	 *
	 * @returns The matching parent client or `nil`.
	 */
	get_transient_for_matching(
		matcher: (c: AwesomeClient) => boolean,
	): AwesomeClient | null;

	/**
	 * Is a client transient for another one?
	 *
	 * This will traverse the chain formed by the {@link transient_for} property of
	 * `self` until a client `c` with `c.transient_for == c2` is found. The found
	 * client `c` is returned. If no client is found, `nil` is returned.
	 *
	 * @param c2 The parent client to check.
	 *
	 * @returns The parent client or `nil`.
	 */
	is_transient_for(c2: AwesomeClient): AwesomeClient | null;

	/**
	 * Activate (focus) a client.
	 *
	 * This method is the correct way to focus a client. While `client.focus =
	 * my_client` works and is commonly used in older code, it has some drawbacks.
	 * The most obvious one is that it bypasses the activate filters. It also doesn't
	 * handle minimized clients well and requires a lot of boilerplate code to make
	 * work properly.
	 *
	 * The valid `args.actions` are:
	 *
	 * - **mouse_move**: Move the client when the mouse cursor moves until the mouse
	 *   buttons are release.
	 * - **mouse_resize**: Resize the client when the mouse cursor moves until the
	 *   mouse buttons are release.
	 * - **mouse_center**: Move the mouse cursor to the center of the client if it
	 *   isn't already within its geometry,
	 * - **toggle_minimization**: If the client is already active, minimize it.
	 */
	activate(args?: {
		/**
		 * Why was this activate called?
		 */
		context?: string;
		/**
		 * Raise the client to the top of its layer and unminimize it (if needed).
		 */
		raise?: boolean;
		/**
		 * Force the activation even for unfocusable clients.
		 */
		force?: boolean;
		switch_to_tags?: boolean;
		switch_to_tag?: boolean;
		/**
		 * Once activated, perform an action.
		 */
		action?: boolean;
		toggle_minimization?: boolean;
	}): void;

	/**
	 * Grant a permission for a client.
	 *
	 * @param permission The permission name (just the name, no `request::`).
	 * @param context The reason why this permission is requested.
	 */
	grant(permission: string, context: string);

	/**
	 * Deny a permission for a client.
	 *
	 * @param permission The permission name (just the name, no `request::`).
	 * @param context The reason why this permission is requested.
	 */
	deny(permission: string, context: string): void;

	/**
	 * The X window id.
	 */
	readonly window: number;

	/**
	 * The client title.
	 */
	name: string;

	/**
	 * True if the client does not want to be in taskbar.
	 */
	skip_taskbar: boolean;

	/**
	 * The window type.
	 */
	readonly type: string;

	/**
	 * The client class.
	 */
	readonly class: string;

	/**
	 * The client instance.
	 */
	readonly instance: string;

	/**
	 * The client PID, if available.
	 */
	readonly pid: number;

	/**
	 * The window role, if available.
	 */
	readonly role: string;

	/**
	 * The machine the client is running on.
	 */
	readonly machine: string;

	/**
	 * The client name when iconified.
	 */
	readonly icon_name: string;

	/**
	 * The client icon as a surface.
	 */
	icon: awesome_image;

	/**
	 * The available sizes of client icons.
	 */
	readonly icon_sizes: table;

	/**
	 * Client screen.
	 */
	screen: AwesomeScreen;

	/**
	 * Define if the client must be hidden (Never mapped, invisible in taskbar).
	 */
	hidden: boolean;

	/**
	 * Define if the client must be iconified (Only visible in taskbar).
	 */
	minimized: boolean;

	/**
	 * Honor size hints, e.g.
	 */
	size_hints_honor: boolean;

	/**
	 * The client border width.
	 */
	border_width: number | null;

	/**
	 * The client border color.
	 */
	border_color: awesome_color | null;

	/**
	 * Set to true when the client ask for attention.
	 */
	urgent: boolean;

	/**
	 * A cairo surface for the client window content.
	 */
	readonly content: raw_curface;

	/**
	 * The client opacity.
	 */
	opacity: number;

	/**
	 * The client is on top of every other windows.
	 */
	ontop: boolean;

	/**
	 * The client is above normal windows.
	 */
	above: boolean;

	/**
	 * The client is below normal windows.
	 */
	below: boolean;

	/**
	 * The client is fullscreen or not.
	 */
	fullscreen: boolean;

	/**
	 * The client is maximized (horizontally and vertically) or not.
	 */
	maximized: boolean;

	/**
	 * The client is maximized horizontally or not.
	 */
	maximized_horizontal: boolean;

	/**
	 * The client is maximized vertically or not.
	 */
	maximized_vertical: boolean;

	/**
	 * The client the window is transient for.
	 */
	readonly transient_for: AwesomeClient | null;

	/**
	 * Window identification unique to a group of windows.
	 */
	readonly group_window: number;

	/**
	 * Identification unique to windows spawned by the same command.
	 */
	readonly leader_window: number;

	/**
	 * A table with size hints of the client.
	 */
	readonly size_hints: table | null;

	/**
	 * The motif WM hints of the client.
	 */
	readonly motif_wm_hints: table;

	/**
	 * Set the client sticky (Available on all tags).
	 */
	sticky: boolean;

	/**
	 * Indicate if the client is modal.
	 */
	modal: boolean;

	/**
	 * True if the client can receive the input focus.
	 */
	focusable: boolean;

	/**
	 * The client's bounding shape as set by awesome as a (native) cairo surface.
	 */
	shape_bounding: awesome_image;

	/**
	 * The client's clip shape as set by awesome as a (native) cairo surface.
	 */
	shape_clip: awesome_image;

	/**
	 * The client's input shape as set by awesome as a (native) cairo surface.
	 */
	shape_input: awesome_image;

	/**
	 * The client's bounding shape as set by the program as a (native) cairo surface.
	 */
	readonly client_shape_bounding: awesome_image;

	/**
	 * The client's clip shape as set by the program as a (native) cairo surface.
	 */
	readonly client_shape_clip: awesome_image;

	/**
	 * The FreeDesktop StartId.
	 */
	startup_id: string;

	/**
	 * If the client that this object refers to is still managed by awesome.
	 */
	readonly valid: boolean;

	/**
	 * The first tag of the client.
	 */
	readonly first_tag: awesome_tag | null;

	/**
	 * Get or set mouse buttons bindings for a client.
	 */
	buttons: table;

	/**
	 * Get or set keys bindings for a client.
	 */
	keys: table;

	/**
	 * If a client is marked or not.
	 */
	marked: boolean;

	/**
	 * Return if a client has a fixed size or not.
	 */
	readonly is_fixed: boolean;

	/**
	 * Is the client immobilized horizontally?
	 */
	readonly immobilized_horizontal: boolean;

	/**
	 * Is the client immobilized vertically?
	 */
	readonly immobilized_vertical: boolean;

	/**
	 * The client floating state.
	 */
	floating: boolean;

	/**
	 * The x coordinates.
	 */
	x: number;

	/**
	 * The y coordinates.
	 */
	y: number;

	/**
	 * The width of the client.
	 */
	width: number;

	/**
	 * The height of the client.
	 */
	height: number;

	/**
	 * If the client is dockable.
	 */
	dockable: boolean;

	/**
	 * If the client requests not to be decorated with a titlebar.
	 */
	requests_no_titlebar: boolean;

	/**
	 * Set the client shape.
	 */
	shape: shape;

	/**
	 * Return true if the client is active (has focus).
	 */
	readonly active: boolean;
}

/**
 * @noSelf
 */
interface AwesomeGlobalClient extends SignalObject<AwesomeClientSignalMap> {
	/**
	 * Get the number of instances.
	 * @returns The number of client objects alive.
	 */
	instances(): number;

	/**
	 * Get all clients into a table.
	 *
	 * @param screen A screen number to filter clients on.
	 * @param stacked Return clients in stacking order? (ordered from top to
	 * bottom)
	 * @returns A table with clients.
	 */
	get(screen?: AwesomeScreen, stacked?: boolean): AwesomeClient[];
}

declare global {
	const client: AwesomeGlobalClient;
}

export {};
