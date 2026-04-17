/// <reference types="../client.d.ts" />
/// <reference types="./button.d.ts" />

type ClientCorner =
	| "auto"
	| "top_left"
	| "top_right"
	| "bottom_left"
	| "bottom_right"
	| "left"
	| "right"
	| "top"
	| "bottom";

declare enum MouseResizeMode {
	/**
	 * Resize the layout everytime the mouse moves.
	 */
	LIVE = "live",

	/**
	 * Resize the layout only when the mouse is released.
	 */
	AFTER = "after",
}

/**
 * Manipulate and inspect the mouse cursor.
 *
 * @noSelf
 */
interface AwfulMouse {
	/**
	 * Add an
	 * [awful.button](https://awesomewm.org/apidoc/input_handling/awful.button.html#)
	 * based mousebinding to the global set. A **global** mousebinding is one
	 * which is always present, even when there is no focused client. If your
	 * intent is too add a mousebinding which acts on the focused client do
	 * **not** use this.
	 *
	 * @param button The button object.
	 */
	append_global_mousebinding(button: AwfulButtonInstance): void;

	/**
	 * Add multiple
	 * [awful.button](https://awesomewm.org/apidoc/input_handling/awful.button.html#)
	 * based mousebindings to the global set. A **global** mousebinding is one
	 * which is always present, even when there is no focused client. If your
	 * intent is too add a mousebinding which acts on the focused client do
	 * **not** use this
	 *
	 * @param buttons A table of `awful.button` objects. Optionally, it can have
	 * a `group` entry. If set, the `group` property will be set on all
	 * `awful.buttons` objects.
	 */
	append_global_mousebindings(buttons: AwfulButtonInstance[]): void;

	/**
	 * Remove a mousebinding from the global set.
	 *
	 * @param button The button object.
	 */
	remove_global_mousebinding(button: AwfulButtonInstance): void;

	/**
	 * Add an
	 * [awful.button](https://awesomewm.org/apidoc/input_handling/awful.button.html#)
	 * to the default client buttons.
	 *
	 * @param button The button.
	 */
	append_client_mousebinding(button: AwfulButtonInstance): void;

	/**
	 * Add a
	 * [awful.button](https://awesomewm.org/apidoc/input_handling/awful.button.html#)
	 * s to the default client buttons.
	 *
	 * @param buttons A table containing awful.button objects.
	 */
	append_client_mousebindings(buttons: AwfulButtonInstance[]): void;

	/**
	 * Remove a mousebinding from the default client buttons.
	 *
	 * @param button The button.
	 *
	 * @returns True if the button was removed and false if it wasn't found.
	 */
	remove_client_mousebinding(button: AwfulButtonInstance): boolean;

	/**
	 * Get the client object under the pointer.
	 *
	 * @deprecated Use {@link AwesomeGlobalMouse.current_client}
	 */
	client_under_pointer(): AwesomeClient | undefined;

	client: {
		/**
		 * Move a client.
		 *
		 * @param c The client to move, or the focused one if nil.
		 * @param snap The pixel to snap clients.
		 */
		move(c: AwesomeClient, snap?: number): void;

		dragtotag: {
			/**
			 * Move a client to a tag by dragging it onto the left / right side
			 * of the screen.
			 *
			 * @param c The client to move
			 */
			border(c: AwesomeClient): void;
		};

		/**
		 * Get a client corner coordinates.
		 *
		 * @param c The client to get corner from, focused one by default.
		 * @param corner The corner to use. Default is `auto`. `auto` finds the
		 * nearest corner.
		 *
		 * @returns
		 * - `string` The corner name
		 * - `number` x The horizontal position
		 * - `number` y The vertical position
		 */
		corner(
			c?: AwesomeClient,
			corner?: ClientCorner,
		): LuaMultiReturn<[ClientCorner, number, number]>;

		/**
		 * Resize a client.
		 *
		 * @param c The client to resize, or the focused one by default.
		 * @param corner The corner to grab on resize. Auto detected by default.
		 * @param args A set of `awful.placement` arguments
		 *
		 * @returns The corner (| side) name
		 */
		resize(c: AwesomeClient, corner?: ClientCorner, args?: table): ClientCorner;
	};

	drag_to_tag: {
		/**
		 * Enable changing tag when a client is dragged to the edge of the
		 * screen.
		 */
		enabled: boolean;
	};

	resize: {
		/**
		 * Resize the drawable.
		 *
		 * Valid `args` are:
		 *
		 * - *enter_callback*: A function called before the mousegrabber starts.
		 * - *move_callback*: A function called when the mouse moves.
		 * - *leave_callback*: A function called before the mousegrabber is released.
		 * - mode: The resize mode.
		 *
		 * @param client A client.
		 * @param context The resizing context.
		 * @param args A set of `awful.placement` arguments.
		 */
		(
			client: AwesomeClient,
			context?: string,
			args?: {
				enter_callback: Parameters<
					AwfulMouse["resize"]["add_enter_callback"]
				>[0];
				move_callback: Parameters<AwfulMouse["resize"]["add_move_callback"]>[0];
				leave_callback: Parameters<
					AwfulMouse["resize"]["add_leave_callback"]
				>[0];
				resize: any;
			},
		): void;

		/**
		 * Set the resize mode. The available modes are:
		 *
		 * Some clients, such as XTerm, may lose information if resized too
		 * often.
		 *
		 * @param m The mode
		 */
		set_mode(m: MouseResizeMode): void;

		/**
		 * Add an initialization callback. This callback will be executed before
		 * the mouse grabbing starts.
		 *
		 * @param cb The callback (or `nil`)
		 * @param context The callback context
		 */
		add_enter_callback(cb: (...args: unknown[]) => any, context?: string): void;

		/**
		 * Add a "move" callback. This callback is executed in "after" mode (see
		 * {@link set_mode} instead of applying the operation.
		 *
		 * @param cb The callback (or `nil`)
		 * @param context The callback context
		 */
		add_move_callback(cb: (...args: unknown[]) => any, context?: string): void;

		/**
		 * Add a "leave" callback. This callback is executed just before the
		 * [mousegrabber](https://awesomewm.org/apidoc/core_components/mousegrabber.html#)
		 * stop
		 *
		 * @param cb The callback (or `nil`)
		 * @param context The callback context
		 */
		add_leave_callback(cb: (...args: unknown[]) => any, context?: string): void;
	};

	snap: {
		/**
		 * Snap a client to the closest client or screen edge.
		 *
		 * @param c The client to snap.
		 * @param snap The pixel to snap clients.
		 * @param x The client x coordinate.
		 * @param y The client y coordinate.
		 * @param fixed_x True if the client isn't allowed to move in the x
		 * direction.
		 * @param fixed_y True if the client isn't allowed to move in the y
		 * direction.
		 *
		 * @returns The new geometry.
		 */
		(
			c: AwesomeClient,
			snap: number,
			x: number,
			y: number,
			fixed_x: boolean,
			fixed_y: boolean,
		): Rectangle;

		/**
		 * The default distance before snapping clients together.
		 */
		default_distance: number;

		/**
		 * The default distance before activating screen edge snap.
		 */
		aerosnap_distance: number;

		/**
		 * Enable screen edges snapping.
		 */
		edge_enabled: boolean;

		/**
		 * Enable client to client snapping.
		 */
		client_enabled: boolean;
	};

	wibox: {
		/**
		 * Move the wibox under the cursor.
		 *
		 * @param w The wibox to move, or none to use that under the pointer
		 */
		move(w: BaseWidget): void;
	};
}

/**
 * @noSelf
 */
interface AwesomeGlobalMouse {
	/**
	 * Get the client or any object which is under the pointer.
	 *
	 * @returns A client, wibox or nil.
	 */
	object_under_pointer(): AwesomeClient | BaseWidget | undefined;

	/**
	 * Get or set the mouse coords.
	 *
	 * @param coords_table None or a table with x and y keys as mouse coordinates.
	 * @param silent Disable `mouse::enter` or `mouse::leave` events that could
	 * be triggered by the pointer when moving.
	 *
	 * @returns The coords. It contains the x, y and buttons keys. buttons
	 * contains the button number as key and a boolean as value (if it is
	 * pressed).
	 */
	coords(
		coords_table?: { x?: number; y?: number },
		silent?: boolean,
	): { x: number; y: number; buttons: [MouseButtonName, boolean] };

	/**
	 * The screen under the cursor
	 *
	 * This may be `nil` if screen is set to `off` in the modeline or command
	 * line options. It happens very early in the initialization before the
	 * screens are created. If you check the screen from a signal, then you
	 * should never have to worry about this. Another corner case where this
	 * might happen is if you use `fake_resize` to have a smaller area than the
	 * physical screen.
	 */
	screen: AwesomeScreen | undefined;

	/**
	 * Get the client currently under the mouse cursor.
	 */
	current_client: AwesomeClient | undefined;

	/**
	 * Get the wibox currently under the mouse cursor.
	 */
	current_wibox: wibox | undefined;

	/**
	 * Get the widgets currently under the mouse cursor.
	 */
	current_widgets: BaseWidget[] | undefined;

	/**
	 * Get the topmost widget currently under the mouse cursor.
	 */
	current_widget: BaseWidget | undefined;

	/**
	 * Get the current widget geometry.
	 */
	current_widget_geometry: Rectangle | undefined;

	/**
	 * Get the current widget geometries.
	 */
	current_widget_geometries: Rectangle[] | undefined;

	/**
	 * True if the left mouse button is pressed.
	 */
	is_left_mouse_button_pressed: boolean;

	/**
	 * True if the right mouse button is pressed.
	 */
	is_right_mouse_button_pressed: boolean;

	/**
	 * True if the middle mouse button is pressed.
	 */
	is_middle_mouse_button_pressed: boolean;
}
