type ActivateFilterCallback = (
	/**
	 * The client requesting the activation
	 */
	c: AwesomeClient,

	/**
	 * The activation context
	 */
	context: string,

	/**
	 * Some additional hints (depending on the context)
	 */
	hints: table,
) => boolean;

/**
 * @noSelf
 */
interface AwfulPermissions {
	/**
	 * Add an activate (focus stealing) filter function.
	 *
	 * If the callback returns `true`, the client will be activated. If the
	 * callback returns `false`, the activation request is cancelled unless the
	 * `force` hint is set. If the callback returns `nil`, the previous callback
	 * will be executed. This will continue until either a callback handles the
	 * request or when it runs out of callbacks. In that case, the request will
	 * be granted if the client is visible.
	 *
	 * For example, to block Firefox from stealing the focus, use:
	 *
	 * ```lua
	 * awful.permissions.add_activate_filter(function(c)
	 *     if c.class == "Firefox" then return false end
	 * end)
	 * ```
	 *
	 * @param f The callback
	 * @param context The `request::activate` context
	 */
	add_activate_filter(f: ActivateFilterCallback, context?: string): void;

	/**
	 * Remove an activate (focus stealing) filter function. This is an helper to
	 * avoid dealing with {@link add_activate_filter} directly.
	 *
	 * @param f The callback
	 * @param context The `request::activate` context
	 *
	 * @returns If the callback existed
	 */
	remove_activate_filter(f: ActivateFilterCallback, context?: string): boolean;

	/**
	 * Activate a window. This sets the focus only if the client is visible. If
	 * `raise` is set in the hints, it will also unminimize the client and move
	 * it to the top of its layer.
	 *
	 * It is the default signal handler for `request::activate` on a client.
	 *
	 * @param c A client to use
	 * @param context The context where this signal was used.
	 * @param hints Extra information
	 */
	activate(
		c: AwesomeClient,
		context: string,
		hints?: {
			/**
			 * Should the client be unminimized and raised?
			 */
			raise?: boolean;

			/**
			 * Should the client's first tag be selected if none of the client's
			 * tags are selected?
			 */
			switch_to_tag?: boolean;

			/**
			 * Select all tags associated with the client.
			 */
			switch_to_tags?: boolean;
		},
	): void;

	/**
	 * Tag a window with its requested tag. It is the default signal handler for
	 * `request::tag` on a client.
	 *
	 * @param c A client to use
	 * @param context A tag to use. If `true` then the client is made `sticky`.
	 * @param hints Extra information
	 */
	tag(
		c: AwesomeClient,
		t?: AwesomeTag | boolean,
		hints?: {
			/**
			 * Why the tag is being changed
			 */
			reason?: string;
		},
	): void;

	/**
	 * Handle client urgent request
	 *
	 * @param urgent If the client should be urgent
	 */
	urgent(c: AwesomeClient, urgent: boolean): void;

	/**
	 * Move and resize the client. This is the default geometry request handler.
	 *
	 * @param c A client to use
	 * @param context The context where this signal was used.
	 * @param hints Extra information
	 */
	geometry(
		c: AwesomeClient,
		context: string,
		hints?: {
			/**
			 * Create a memento of the previous geometry in case it has to be
			 * restored.
			 */
			store_geometry?: boolean;

			/**
			 * Avoid overlapping the wibars or other desktop decoration when
			 * applying the geometry.
			 */
			honor_workarea?: boolean;
		},
	): void;

	/**
	 * Move and resize the wiboxes. This is the default geometry request handler.
	 *
	 * @param c A client to use
	 * @param context The context where this signal was used.
	 * @param hints Extra information
	 */
	wibox_geometry(
		c: AwesomeClient,
		context: string,
		hints?: Partial<Rectangle>,
	): void;

	/**
	 * Merge the 2 requests sent by clients wanting to be maximized. The X
	 * clients set 2 flags (atoms) when they want to be maximized. This caused 2
	 * `request::geometry` to be sent. This code gives some time for them to
	 * arrive and send a new `request::geometry` (through the property change)
	 * with the combined state.
	 *
	 * @param c A client to use
	 * @param context The context where this signal was used.
	 * @param hints Extra information
	 */
	merge_maximization(
		c: AwesomeClient,
		context: string,
		hints?: {
			/**
			 *
			 */
			toggle?: boolean;
		},
	): void;

	/**
	 * Allow the client to move itself. This is the default geometry request
	 * handler when the context is `permissions`.
	 *
	 * @param c A client to use
	 * @param context The context where this signal was used.
	 * @param hints Extra information
	 */
	client_geometry_requests(
		c: AwesomeClient,
		context: string,
		hints?: Partial<Rectangle>,
	): void;

	/**
	 * The default client `request::border` handler. To replace this handler
	 * with your own, use:
	 *
	 * ```lua
	 * client.disconnect_signal("request::border", awful.permisions.update_border)
	 * ```
	 *
	 * The default implementation chooses from dozens beautiful theme variables
	 * depending if the client is tiled, floating, maximized and then from its
	 * state (urgent, new, active, normal)
	 *
	 * @param c A client to use
	 * @param context The context where this signal was used.
	 */
	update_border(c: AwesomeClient, context: string): void;

	/**
	 * Default handler for the `request::autoactivate` signal.
	 *
	 * All it does is to emit `request::activate` with the following context
	 *  mapping:
	 *
	 * - mouse_enter: mouse.enter
	 * - switchtag : *autofocus.checkfocus_tag*
	 * - history : *autofocus.check_focus*
	 *
	 * @param c A client to use
	 * @param context The context where this signal was used.
	 * @param hints Extra information
	 */
	autoactivate(c: AwesomeClient, context: string, hints?: table): void;

	/**
	 * The list of all registered generic `request::activate` (focus stealing)
	 * filters. If a filter is added to only one context, it will be in
	 * `contextual_activate_filters["context_name"]`.
	 */
	generic_activate_filters: ActivateFilterCallback[];

	/**
	 * The list of all registered contextual `request::activate` (focus
	 * stealing) filters. If a filter is added to only one context, it will be
	 * in {@link generic_activate_filters}.
	 */
	contextual_activate_filters: Record<string, ActivateFilterCallback[]>;
}
