/// <reference types="../client.d.ts" />
/// <reference types="../screen.d.ts" />

interface NaughtyAction {}

interface NaughtyNotification {}

interface NotificationProperties {
	/**
	 * Text of the notification.
	 * @default ""
	 */
	text?: string;

	/**
	 * Title of the notification.
	 */
	title?: string;

	/**
	 * Time in seconds after which popup expires. Set 0 for no timeout.
	 * @default 5
	 */
	timeout?: number;

	/**
	 * Delay in seconds after which hovered popup disappears.
	 */
	hover_timeout?: number;

	/**
	 * Target screen for the notification.
	 * @default focused
	 */
	screen?: AwesomeScreen | number | string;

	/**
	 * Corner of the workarea displaying the popups.
	 * @default "top_right"
	 */
	position?:
		| "top_left"
		| "top_right"
		| "bottom_left"
		| "bottom_right"
		| "top_middle"
		| "bottom_middle"
		| "middle";

	/**
	 * Boolean forcing popups to display on top.
	 * @default true
	 */
	ontop?: boolean;

	/**
	 * Popup height.
	 * @default `beautiful.notification_height` or auto
	 */
	height?: number;

	/**
	 * Popup width.
	 * @default `beautiful.notification_width` or auto
	 */
	width?: number;

	/**
	 * Notification font.
	 * @default `beautiful.notification_font` or `beautiful.font` or
	 * `awesome.font`
	 */
	font?: string | lgi.Pango.FontDescription;

	/**
	 * "All in one" way to access the default image or icon.
	 *
	 * A notification can provide a combination of an icon, a static image, or
	 * if enabled, a looping animation. Add to that the ability to import the
	 * icon information from the client or from a `.desktop` file, there is
	 * multiple conflicting sources of "icons".
	 *
	 * On the other hand, the vast majority of notifications don't multiple or
	 * ambiguous sources of icons. This property will pick the first of the
	 * following:
	 *
	 * - The [image](https://awesomewm.org/apidoc/core_components/naughty.notification.html#image)
	 * - The [app_icon](https://awesomewm.org/apidoc/core_components/naughty.notification.html#app_icon)
	 * - The [icon](https://awesomewm.org/apidoc/core_components/naughty.notification.html#icon) from a client with `normal` type.
	 * - The [icon](https://awesomewm.org/apidoc/core_components/naughty.notification.html#icon) of a client with `dialog` type.
	 */
	icon?: awesome_image;

	/**
	 * Desired icon size in px.
	 */
	icon_size?: number;

	/**
	 * Foreground color.
	 * @default `beautiful.notification_fg` or `beautiful.fg_focus` or
	 * `'#ffffff'`
	 */
	fg?: string;

	/**
	 * Background color.
	 * @default `beautiful.notification_fg` or `beautiful.bg_focus` or
	 * `'#535d6c'`
	 */
	bg?: string;

	/**
	 * Border width.
	 * @default `beautiful.notification_border_width` or 1
	 */
	border_width?: number;

	/**
	 * Border color.
	 * @default `beautiful.notification_border_color` or
	 * `beautiful.border_color_active` or `'#535d6c'`
	 */
	border_color?: gears.color;

	/**
	 * Widget shape.
	 * @default `beautiful.notification_shape`
	 */
	shape?: gears.shape;

	/**
	 * Widget opacity.
	 * @default `beautiful.notification_opacity`
	 */
	opacity?: gears.opacity;

	/**
	 * Widget margin.
	 * @default `beautiful.notification_margin`
	 */
	margin?: gears.margin;

	/**
	 * Function to run on left click. The notification object will be passed to
	 * it as an argument. You need to call e.g.
	 * `notification.die(naughty.notification_closed_reason.dismissedByUser)`
	 * from there to dismiss the notification yourself.
	 */
	run?: (notification: NaughtyNotification) => void;

	/**
	 * Function to run when notification is destroyed.
	 */
	destroy?: () => void;

	/**
	 * Table with any of the above parameters. Note: Any parameters specified
	 * directly in args will override ones defined in the preset.
	 */
	preset?: NotificationPreset;

	/**
	 * Function that will be called with all arguments. The notification will
	 * only be displayed if the function returns true. Note: this function is
	 * only relevant to notifications sent via dbus.
	 */
	callback?: (
		legacy_data: table,
		appname: string,
		replaces_id: number,
		app_icon: string,
		title: string,
		message: string,
		actions: table,
		hints: table,
		expire: number,
	) => boolean;

	/**
	 * A list of {@link naughty.action}.
	 */
	actions?: table;

	/**
	 * If set to true this notification will be shown even if notifications are
	 * suspended via {@link naughty.suspend}.
	 * @default false
	 */
	ignore_suspend?: boolean;

	// TODO: these weren't mentioned in "args", but they're in whatever's
	// returned from naughty.notification

	/**
	 * The icon provided in the app_icon field of the DBus notification.
	 *
	 * This should always be either the URI (path) to an icon or a valid XDG
	 * icon name to be fetched from the theme.
	 */
	app_icon?: string;

	/**
	 * The application name specified by the notification.
	 *
	 * This can be anything. It is usually less relevant than the
	 * {@link clients} property, but can sometime be specified for remote or
	 * headless notifications. In these case, it helps to triage and detect the
	 * notification from the rules.
	 */
	app_name?: string;

	/**
	 * If the timeout needs to be reset when a property changes.
	 *
	 * By default it falls back to `naughty.auto_reset_timeout`, which itself is
	 * true by default.
	 */
	auto_reset_timeout?: boolean;

	/**
	 * The notification category.
	 *
	 * The category should be named using the x-vendor.class.name naming scheme
	 * or use one of [the default
	 * categories](https://awesomewm.org/apidoc/core_components/naughty.notification.html#category).
	 */
	category?: string;

	/**
	 * A list of clients associated with this notification.
	 *
	 * When used with DBus notifications, this returns all clients sharing the
	 * PID of the notification sender. Note that this is highly unreliable.
	 * Applications that use a different process to send the notification or
	 * applications (and scripts) calling the `notify-send` command wont have
	 * any client.
	 */
	clients?: AwesomeClient[];

	/**
	 * Ignore this notification, do not display.
	 *
	 * Note that this property has to be set in a {@link naughty.preset} or in a
	 * `request::preset` handler.
	 */
	ignore?: boolean;

	/**
	 * The notification image.
	 *
	 * This is usually provided as a
	 * [gears.surface](https://awesomewm.org/apidoc/libraries/gears.surface.html#)
	 * object. The image is used instead of the
	 * [app_icon](https://awesomewm.org/apidoc/core_components/naughty.notification.html#app_icon)
	 * by notification assets which are auto-generated or stored elsewhere than
	 * the filesystem (databases, web, Android phones, etc).
	 */
	image?: unknown;

	/**
	 * The notification (animated) images.
	 *
	 * Note that calling this without first setting
	 * [naughty.image_animations_enabled](https://awesomewm.org/apidoc/libraries/naughty.html#image_animations_enabled)
	 * to true will throw an exception.
	 *
	 * Also note that there is zero support for this anywhere else in `naughty`
	 * and very, very few applications support this.
	 *
	 * This exists purely to comply with the specification.
	 */
	images?: table;

	/**
	 * If the notification is expired.
	 */
	is_expired?: boolean;

	/**
	 * The maximum popup width.
	 *
	 * Some notifications have overlong message, cap them to this width. Note
	 * that this is ignored by {@link naughty.list.notifications} because it
	 * delegate this decision to the layout.
	 */
	max_width?: number;

	/**
	 * True if the notification should be kept when an action is pressed.
	 *
	 * By default, invoking an action will destroy the notification. Some
	 * actions, like the "Snooze" action of alarm clock, will cause the
	 * notification to be updated with a date further in the future.
	 * @default false
	 */
	resident?: boolean;

	/**
	 * Tell if the notification is currently suspended (read only).
	 *
	 * This is always equal to {@link naughty.suspended}.
	 */
	readonly suspended?: boolean;

	/**
	 * The notification urgency level.
	 * @default "normal"
	 */
	urgency?: "low" | "normal" | "critical";

	/**
	 * The widget template used to represent the notification.
	 *
	 * Some notifications, such as chat messages or music applications are
	 * better off with a specialized notification widget.
	 */
	widget_template?: template;
}

interface NotificationPreset {
	bg?: string;
	fg?: string;
	timeout?: number;
}

type NaughtySignalMap = SignalMap & {
	/**
	 * Emitted when an error occurred and requires attention.
	 *
	 * @param message The error message.
	 * @param startup If the error occurred during the initial loading of rc.lua
	 * (and thus caused the fallback to kick in).
	 */
	"request::display_error": (
		this: void,
		message: string,
		startup: boolean,
	) => void;

	/**
	 * Emitted when a notification is created.
	 *
	 * @param notification The `naughty.notification` object.
	 */
	added: (this: void, notification: NaughtyNotification) => void;

	/**
	 * Emitted when a notification is destroyed.
	 *
	 * @param notification The `naughty.notification` object.
	 */
	destroyed: (this: void, notification: NaughtyNotification) => void;

	/**
	 * Emitted when a notification has to be displayed.
	 *
	 * To add a handler, use:
	 * ```lua
	 * naughty.connect_signal("request::display", function(notification, args)
	 *     -- do something
	 * end)
	 * ```
	 *
	 * @param notification The `naughty.notification` object.
	 * @param context Why is the signal sent.
	 * @param args Any arguments passed to the
	 * [naughty.notify](https://awesomewm.org/apidoc/libraries/naughty.html#notify)
	 * function, including, but not limited to, all
	 * [naughty.notification](https://awesomewm.org/apidoc/core_components/naughty.notification.html#)
	 * properties.
	 */
	"request::display": (
		this: void,
		notification: NaughtyNotification,
		context: string,
		args: table,
	) => void;

	/**
	 * Emitted when a notification needs pre-display configuration.
	 *
	 * @param notification The `naughty.notification` object.
	 */
	"request::preset": () => void;

	/**
	 * Emitted when an action requires an icon it doesn't know.
	 *
	 * The implementation should look in the icon theme for an action icon or
	 * provide something natively.
	 *
	 * If an icon is found, the handler must set the `request::icon` property on the
	 * `action` object to a path or a
	 * [gears.surface](https://awesomewm.org/apidoc/libraries/gears.surface.html#).
	 *
	 * There is no implementation by default. To use the XDG-icon, the common
	 * implementation will be:
	 * ```lua
	 * naughty.connect_signal("request::action_icon", function(a, context, hints)
	 *      a.icon = menubar.utils.lookup_icon(hints.id)
	 * end)
	 * ```
	 *
	 * @param action The action.
	 * @param context The context.
	 * @param hints
	 */
	"request::action_icon": (
		this: void,
		action: NaughtyAction,
		context: string,
		hints: table,
	) => void;

	/**
	 * Emitted when a notification icon could not be loaded.
	 *
	 * When an icon is passed in some "encoded" formats, such as XDG icon names
	 * or network URLs, AwesomeWM will not attempt to load it. If you wish to
	 * see the icon displayed, you must provide an handler. It is highly
	 * recommended for handler to only set `n.icon` when they *found* the icon.
	 * That way multiple handlers can be attached for multiple protocols.
	 *
	 * The `context` argument is the origin of the icon to decode. If an handler
	 * only supports one if them, it should check the `context` and return if it
	 * doesn't handle it.
	 *
	 * For example, an implementation which uses the `app_icon` to perform an
	 * XDG icon lookup will look like:
	 * ```lua
	 * naughty.connect_signal("request::icon", function(n, context, hints)
	 *     if context ~= "app_icon" then return end
	 *
	 *     local path = menubar.utils.lookup_icon(hints.app_icon) or
	 *         menubar.utils.lookup_icon(hints.app_icon:lower())
	 *
	 *     if path then
	 *         n.icon = path
	 *     end
	 * end)
	 * ```
	 *
	 * The images context has no handler. It is part of the specification to
	 * handle animations. This is not supported by default.
	 *
	 * @param n The notification.
	 * @param context The source of the icon to look for.
	 * @param hints The hints.
	 */
	"request::icon": (
		this: void,
		n: NaughtyNotification,
		context:
			| "app_icon"
			| "clients"
			| "path"
			| "image"
			| "images"
			| "dbus_clear",
		hints: {
			/**
			 * The name of the icon to look for.
			 */
			app_icon: string;

			/**
			 * The path of the icon.
			 */
			path: string;

			/**
			 * The path or pixmap of the icon.
			 */
			image: string;
		},
	) => void;

	/**
	 * Emitted when the screen is not defined or being removed.
	 *
	 * @param notification The naughty.notification object. This is currently
	 * either "new" or "removed".
	 * @param context Why is the signal sent.
	 */
	"request::screen": (this: void, notification: table, context: string) => void;
};

/**
 * @noResolution
 * @noSelf
 */
declare module "naughty" {
	/**
	 * Connect a global signal on the module.
	 *
	 * Functions connected to this signal source will be executed when any
	 * module object emits the signal.
	 *
	 * It is also used for some generic module signals such as `request::display`.
	 *
	 * @param name The name of the signal
	 * @param func The function to attach
	 */
	export function connect_signal<K extends keyof NaughtySignalMap>(
		name: K,
		func: NaughtySignalMap[K],
	): void;

	/**
	 * Destroy all notifications on given screens.
	 *
	 * @param screens Table of screens on which notifications should be
	 * destroyed. If nil, destroy notifications on all screens.
	 * @param reason Reason for closing notifications.
	 * @returns True if all notifications were successfully destroyed, nil
	 * otherwise.
	 */
	export function destroy_all_notifications(
		screens: table,
		reason: notification_closed_reason,
	): true | null;

	/**
	 * Disconnect a signal from a source.
	 *
	 * @param name The name of the signal
	 * @param func The attached function
	 * @returns if the disconnection was successful
	 */
	export function disconnect_signal<K extends keyof NaughtySignalMap>(
		name: K,
		func: NaughtySignalMap[K],
	): boolean;

	/**
	 * Emit a module signal.
	 *
	 * @param name The signal name
	 * @param args The signal callback arguments.
	 */
	export function emit_signal<K extends keyof NaughtySignalMap>(
		name: K,
		...args: Parameters<NaughtySignalMap[K]>
	): void;

	/**
	 * Get notification by ID.
	 *
	 * @param id ID of the notification.
	 * @returns notification object if it was found, nil otherwise
	 */
	export function get_by_id(id: number): NaughtyNotification | null;

	/**
	 * Create a notification.
	 */
	export function notification(
		args: Partial<NotificationProperties>,
	): NaughtyNotification;

	export const config: {
		/**
		 * Callback used to modify or reject notifications, e.g. To reject a
		 * notification return `nil` from the callback. If the notification is a
		 * freedesktop notification received via DBUS, you can access the
		 * freedesktop hints via `args.freedesktop_hints` if any where
		 * specified.
		 */
		notify_callback?: ((...args: unknown[]) => void) | null;

		/**
		 * Notification presets for
		 * [naughty.notify](https://awesomewm.org/apidoc/libraries/naughty.html#notify).
		 * This holds presets for different purposes. A preset is a table of any
		 * parameters for `naughty.notification{}`, overriding the default
		 * values ({@link config.defaults}).
		 *
		 * You have to pass a reference of a preset in your
		 * `naughty.notification{}` as the preset argument.
		 *
		 * The presets "low", "normal" and "critical" are used for notifications
		 * over DBUS.
		 */
		presets: {
			low: {
				timeout?: number;
			};
			/**
			 * The default preset for every notification without a preset that
			 * will also be used for normal urgency level.
			 */
			normal: table;
			ok: NotificationPreset;
			critical: NotificationPreset;
			info: NotificationPreset;
			warn: NotificationPreset;
		};

		/**
		 * Default values for the params to `naughty.notification{}`. These can
		 * optionally be overridden by specifying a preset. See
		 * `config.defaults`.
		 */
		defaults: {
			/** @default 5 */
			timeout: number;
			/** @default "" */
			text: string;
			/** @default awful.screen.focused() */
			screen: number;
			/** @default true */
			ontop: boolean;
			/** @default beautiful.xresources.apply_dpi(5) */
			margin: number;
			/** @default beautiful.xresources.apply_dpi(1) */
			border_width: number;
			/** @default "top_right" */
			position: string;
		};

		/**
		 * Space between popups and edge of the workarea.
		 */
		padding?: number;

		/**
		 * Spacing between popups.
		 */
		spacing?: number;

		/**
		 * List of directories that will be checked by `getIcon()`.
		 */
		icon_dirs?: string[];

		/**
		 * List of formats that will be checked by `getIcon()`.
		 */
		icon_formats?: string[];
	};

	/**
	 * The reason why a notification is to be closed.
	 *
	 * See [the
	 * specification](https://specifications.freedesktop.org/notification-spec/latest/protocol.html#id-1.10.4.2.4)
	 * for more details.
	 */
	export enum notification_closed_reason {
		too_many_on_screen = -2,
		silent = -1,
		expired = 1,
		dismissed_by_user = 2,
		dismissed_by_command = 3,
		undefined = 4,
	}
}
