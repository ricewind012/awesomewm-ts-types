/**
  * Default implementation of the various requests handers.
  */
declare module 'awful.permissions' {
  /**
    * Activate a window.
    *
    *  This sets the focus only if the client is visible. If `raise` is set
    *  in the hints, it will also unminimize the client and move it to the top
    *  of its layer.
    *
    *  It is the default signal handler for `request::activate` on a `client`.
    *
    * @param c A client to use
    * @param context The context where this signal was used.
    * @param raise Should the client be unminimized
    *   and raised?
    * @param switch_to_tag Should the client's first tag
    *   be selected if none of the client's tags are selected?
    * @param switch_to_tags Select all tags associated
    *   with the client.
    */
  activate(
    c: client,
    context: string,
    raise: boolean,
    switch_to_tag: boolean,
    switch_to_tags: boolean,
  ): void;
  /**
    * Add an activate (focus stealing) filter function.
    *
    *  The callback takes the following parameters:
    *
    *  * **c** (*client*) The client requesting the activation
    *  * **context** (*string*) The activation context.
    *  * **hints** (*table*) Some additional hints (depending on the context)
    *
    *  If the callback returns `true`, the client will be activated. If the callback
    *  returns `false`, the activation request is cancelled unless the `force` hint is
    *  set. If the callback returns `nil`, the previous callback will be executed.
    *  This will continue until either a callback handles the request or when it runs
    *  out of callbacks. In that case, the request will be granted if the client is
    *  visible.
    *
    *  For example, to block Firefox from stealing the focus, use:
    *
    *     awful.permissions.add_activate_filter(function(c)
    *         if c.class == "Firefox" then return false end
    *     end)
    *
    * @param f The callback
    * @param context The `request::activate` context
    * @see awful.permissions.generic_activate_filters
    * @see awful.permissions.contextual_activate_filters
    * @see remove_activate_filter
    */
  add_activate_filter(
    f: function,
    context?: string,
  ): void;
  /**
    * Remove an activate (focus stealing) filter function.
    *  This is an helper to avoid dealing with `permissions.add_activate_filter` directly.
    * @param f The callback
    * @param context The `request::activate` context
    * @returns boolean - If the callback existed
    * @see awful.permissions.generic_activate_filters
    * @see awful.permissions.contextual_activate_filters
    * @see add_activate_filter
    */
  remove_activate_filter(
    f: function,
    context?: string,
  ): boolean;
  /**
    * Tag a window with its requested tag.
    *
    *  It is the default signal handler for `request::tag` on a `client`.
    *
    * @param c A client to tag
    * @param t A tag to use. If `true`, then the client is made `sticky`.
    * @param reason Why the tag is being changed.
    */
  tag(
    c: client,
    t?: tag|boolean,
    reason: nil|string,
  ): void;
  /**
    * Handle client urgent request
    * @param c A client
    * @param urgent If the client should be urgent
    */
  urgent(
    c: client,
    urgent: boolean,
  ): void;
  /**
    * Move and resize the client.
    *
    *  This is the default geometry request handler.
    *
    * @param c The client
    * @param context The context
    * @param store_geometry Create a memento of the
    *   previous geometry in case it has to be restored.
    * @param honor_workarea Avoid overlapping the `wibar`s
    *   or other desktop decoration when applying the geometry.
    */
  geometry(
    c: client,
    context: string,
    store_geometry: boolean,
    honor_workarea: boolean,
  ): void;
  /**
    * Move and resize the wiboxes.
    *
    *  This is the default geometry request handler.
    *
    * @param w The wibox.
    * @param context The context
    * @param x The horizontal position.
    * @param y The vertical position.
    * @param width The wibox width.
    * @param height The wibox height.
    */
  wibox_geometry(
    w: wibox,
    context: string,
    x?: integer,
    y?: integer,
    width?: integer,
    height?: integer,
  ): void;
  /**
    * Merge the 2 requests sent by clients wanting to be maximized.
    *
    *  The X clients set 2 flags (atoms) when they want to be maximized. This caused
    *  2 `request::geometry` to be sent. This code gives some time for them to arrive
    *  and send a new `request::geometry` (through the property change) with the
    *  combined state.
    *
    * @param c The client
    * @param context The context
    * @param toggle Toggle the maximization state rather
    *   than set it to `true`.
    */
  merge_maximization(
    c: client,
    context: string,
    toggle: boolean,
  ): void;
  /**
    * Allow the client to move itself.
    *
    *  This is the default geometry request handler when the context is `permissions`.
    *
    * @param c The client
    * @param context The context
    * @param x The horizontal position.
    * @param y The vertical position.
    * @param width The client width.
    * @param height The client height.
    */
  client_geometry_requests(
    c: client,
    context: string,
    x?: integer,
    y?: integer,
    width?: integer,
    height?: integer,
  ): void;
  /**
    * The default client `request::border` handler.
    *
    *  To replace this handler with your own, use:
    *
    *     client.disconnect_signal("request::border", awful.permisions.update_border)
    *
    *  The default implementation chooses from dozens beautiful theme variables
    *  depending if the client is tiled, floating, maximized and then from its state
    *  (urgent, new, active, normal)
    *
    * @param c The client.
    * @param context Why is the border changed.
    */
  update_border(
    c: client,
    context: string,
  ): void;
  /**
    * Default handler for the `request::autoactivate` signal.
    *
    *  All it does is to emit `request::activate` with the following context
    *  mapping:
    *
    *  * mouse_enter: *mouse.enter*
    *  * switch_tag : *autofocus.check_focus_tag*
    *  * history    : *autofocus.check_focus*
    *
    * @param c The client.
    * @param context Why is the client auto-activated.
    * @param hints Extra arguments.
    * @see activate
    */
  autoactivate(
    c: client,
    context: string,
    hints: table,
  ): void;
  /**
    * The list of all registered generic `request::activate` (focus stealing)
    *  filters.  If a filter is added to only one context, it will be in
    *  `permissions.contextual_activate_filters`["context_name"].
    * @see permissions.activate
    * @see permissions.add_activate_filter
    * @see permissions.remove_activate_filter
    */
  awful.permissions.generic_activate_filters(
  ): void;
  /**
    * The list of all registered contextual `request::activate` (focus stealing)
    *  filters.  If a filter is added to only one context, it will be in
    *  `permissions.generic_activate_filters`.
    * @see permissions.activate
    * @see permissions.add_activate_filter
    * @see permissions.remove_activate_filter
    */
  awful.permissions.contextual_activate_filters(
  ): void;
  /**
    * Honor the screen padding when maximizing.
    * @param maximized_honor_padding
    */
  maximized_honor_padding(
    maximized_honor_padding: boolean,
  ): void;
  /**
    * Hide the border on fullscreen clients.
    * @param fullscreen_hide_border
    */
  fullscreen_hide_border(
    fullscreen_hide_border: boolean,
  ): void;
  /**
    * Hide the border on maximized clients.
    * @param maximized_hide_border
    */
  maximized_hide_border(
    maximized_hide_border: boolean,
  ): void;
}
