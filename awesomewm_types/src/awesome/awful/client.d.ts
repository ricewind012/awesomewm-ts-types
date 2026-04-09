/// <reference types="../shared.d.ts" />

/**
 * @noSelf
 */
interface AwfulClient {
	/**
	 * Get a client by its relative index to another client. If no client is passed,
	 * the focused client will be used.
	 *
	 * @param i The index. Use `1` to get the next, `-1` to get the previous.
	 * @param sel The client.
	 * @param stacked Use stacking order? (top to bottom)
	 *
	 * @returns A client, or `nil` if no client is available.
	 */
	next(i: number, sel?: AwesomeClient, stacked?: boolean): AwesomeClient | null;

	/**
	 * Cycle through the clients to change the focus.
	 *
	 * This will swap the client from one position to the next in the layout.
	 *
	 * @param clockwise True to cycle clients clockwise.
	 * @param s The screen where to cycle clients.
	 * @param stacked Use stacking order? (top to bottom)
	 */
	cycle(clockwise?: boolean, s?: AwesomeScreen, stacked?: boolean): void;

	/**
	 * Restore (=unminimize) a random client.
	 *
	 * @param s The screen to use.
	 *
	 * @returns The restored client if some client was restored, otherwise
	 * `nil`.
	 */
	restore(s: AwesomeScreen): AwesomeClient;

	/**
	 * Returns an iterator to cycle through clients.
	 *
	 * @param filter Returns an iterator to cycle through clients.
	 * @param start What index to start iterating from. Defaults to using the
	 * index of the currently focused client.
	 * @param s Which screen to use. `nil` means all screens.
	 *
	 * @returns A Lua iterator (to use in a for loop).
	 */
	iterate(
		filter: (c: AwesomeClient) => boolean,
		start: number,
		s?: AwesomeScreen,
	): (...args: unknown[]) => any;

	urgent: {
		/**
		 * Jump to the client that received the urgent hint first.
		 *
		 * @param merge If true then merge tags (select the client's first tag
		 * additionally) when the client is not visible. If it is a function, it
		 * will be called with the client as argument.
		 */
		jumpto(merge: boolean | ((c: AwesomeClient) => void)): void;
	};

	swap: {
		/**
		 * Swap a client with another client in the given direction.
		 *
		 * This will not cross the screen boundary. If you want this behavior,
		 * use {@link awful.client.swap.global_bydirection}.
		 *
		 * @param dir
		 * @param c
		 * @param stacked
		 */
		bydirection(dir: Direction, c?: AwesomeClient, stacked?: boolean): void;

		/**
		 * Swap a client with another client in the given direction. Swaps
		 * across screens.
		 *
		 * @param dir The direction.
		 * @param sel The client.
		 */
		global_bydirection(dir: Direction, sel?: AwesomeClient): void;

		/**
		 * Swap a client by its relative index.
		 *
		 * @param i The index. Use `1` to get the next, `-1` to get the
		 * previous.
		 * @param c The client, otherwise focused one is used.
		 *
		 * @example
		 * ```lua
		 * -- Print at which index each client is now at.
		 * local function print_indices()
		 *     local output = ""
		 *
		 *     for idx, c in ipairs(client.get()) do
		 *          output = output .. c.name .. ":" .. idx .. ", "
		 *     end
		 *
		 *     print(output)
		 * end
		 *
		 * print_indices()
		 *
		 * print("Call swap.byidx")
		 * awful.client.swap.byidx(3, client.get()[1])
		 * print_indices()
		 *
		 * print("Call swap.byidx")
		 * awful.client.swap.byidx(2, client.get()[4])
		 * print_indices()
		 * ```
		 *
		 * Output:
		 * ```
		 * c1:1, c2:2, c3:3, c4:4,
		 * Call swap.byidx
		 * c4:1, c2:2, c3:3, c1:4,
		 * Call swap.byidx
		 * c4:1, c1:2, c3:3, c2:4,
		 * ```
		 */
		byidx(i: number, c?: AwesomeClient): void;
	};

	/**
	 * Jump to the given client. Takes care of focussing the screen, the right
	 * tag, etc.
	 *
	 * @param c The client to jump to.
	 * @param merge If true then merge tags (select the client's first tag
	 * additionally) when the client is not visible. If it is a function, it will be
	 * called with the client and its first tag as arguments.
	 *
	 * @deprecated Use {@link AwesomeClient.jump_to}
	 */
	jumpto(c: AwesomeClient, merge: ((t: awesome_tag) => void) | boolean): void;

	/**
	 * Get visible clients from a screen.
	 *
	 * @param s The screen, or `nil` for all screens.
	 * @param stacked Use stacking order? (top to bottom)
	 *
	 * @returns A table with all visible clients.
	 *
	 * @deprecated Use {@link AwesomeScreen.clients}
	 */
	visible(s: AwesomeScreen | number | null, stacked?: boolean): AwesomeClient[];

	/**
	 * Get visible and tiled clients
	 *
	 * @param s The screen, or `nil` for all screens.
	 * @param stacked Use stacking order? (top to bottom)
	 *
	 * @returns A table with all visible and tiled clients.
	 *
	 * @deprecated Use {@link AwesomeScreen.tiled_clients}
	 */
	tiled(s: AwesomeScreen | number | null, stacked?: boolean): AwesomeClient[];

	/**
	 * Get the master window.
	 *
	 * @param s The screen.
	 *
	 * @returns The master client.
	 *
	 * @deprecated
	 */
	getmaster(s: AwesomeScreen): AwesomeClient;

	/**
	 * Set the client as master: put it at the beginning of other windows.
	 *
	 * @param c The window to set as master.
	 *
	 * @deprecated
	 */
	setmaster(c: AwesomeClient): void;

	/**
	 * Set the client as slave: put it at the end of other windows.
	 *
	 * @param c The window to set as slave.
	 *
	 * @deprecated
	 */
	setslave(c: AwesomeClient): void;

	/**
	 * Move/resize a client relative to current coordinates.
	 *
	 * @param x The relative x coordinate.
	 * @param y The relative y coordinate.
	 * @param w The relative width.
	 * @param h The relative height.
	 * @param c The client, otherwise focused one is used.
	 *
	 * @deprecated Use {@link AwesomeClient.relative_move}
	 */
	moveresize(
		x: number,
		y: number,
		w: number,
		h: number,
		c?: AwesomeClient,
	): void;

	/**
	 * Move a client to a tag.
	 *
	 * @param target The tag to move the client to.
	 * @param c The client to move, otherwise the focused one is used.
	 *
	 * @deprecated Use {@link AwesomeClient.move_to_tag}
	 */
	movetotag(target: awesome_tag, c?: AwesomeClient): void;

	/**
	 * Toggle a tag on a client.
	 *
	 * @param target The tag to toggle.
	 * @param c The client to toggle, otherwise the focused one is used.
	 *
	 * @deprecated Use {@link AwesomeClient.toggle_tag}
	 */
	toggletag(target: awesome_tag, c: AwesomeClient): void;

	/**
	 * Move a client to a screen.  Default is next screen, cycling.
	 *
	 * @param c The client to move.
	 * @param s The screen, default to current + 1.
	 *
	 * @deprecated Use {@link AwesomeClient.move_to_screen}
	 */
	movetoscreen(c: AwesomeClient | null, s: AwesomeScreen): void;

	/**
	 * Mark a client, and then call 'marked' hook.
	 *
	 * @param c A client.
	 *
	 * @deprecated Use `c.marked = true`
	 */
	mark(c: AwesomeClient): void;

	/**
	 * Unmark a client and then call 'unmarked' hook.
	 *
	 * @param c A client.
	 *
	 * @deprecated Use `c.marked = false`
	 */
	unmark(c: AwesomeClient): void;

	/**
	 * Check if a client is marked.
	 *
	 * @param c A client.
	 *
	 * @deprecated Use `c.marked`
	 */
	ismarked(c: AwesomeClient): boolean;

	/**
	 * Toggle a client as marked.
	 *
	 * @param c A client.
	 *
	 * @deprecated
	 */
	togglemarked(c: AwesomeClient): void;

	/**
	 * Return the marked clients and empty the marked table.
	 *
	 * @returns A table with all marked clients.
	 *
	 * @deprecated
	 */
	getmarked(): AwesomeClient[];

	dockable: {
		/**
		 * Get a client's dockable state.
		 *
		 * @param c A client.
		 *
		 * @returns bool
		 *
		 * @deprecated Use `c.dockable`
		 */
		get(c: AwesomeClient): boolean;

		/**
		 * Set a client's dockable state, overriding auto-detection. With this
		 * enabled you can dock windows by moving them from the center to the
		 * edge of the workarea.
		 *
		 * @param c A client.
		 * @param value
		 *
		 * @deprecated `Use `c.dockable = value`
		 */
		set(c: AwesomeClient, value: boolean): void;
	};

	floating: {
		/**
		 * Get a client floating state.
		 *
		 * @param c A client.
		 *
		 * @returns True or false. Note that some windows might be floating even
		 * if you did not set them manually. For example, windows with a type
		 * different than normal.
		 *
		 * @deprecated Use `c.floating`
		 */
		get(c: AwesomeClient): boolean;

		/**
		 * Set a client floating state, overriding auto-detection. Floating
		 * client are not handled by tiling layouts.
		 *
		 * @param c A client.
		 * @param s `true` if the client is to become floating.
		 *
		 * @deprecated Use `c.is_fixed`
		 */
		set(c: AwesomeClient, s: boolean): void;

		/**
		 * Toggle the floating state of a client between 'auto' and 'true'.
		 *
		 * @param c A client.
		 *
		 * @deprecated Use `c.floating = not c.floating`
		 */
		toggle(c: AwesomeClient): void;
	};

	property: {
		/**
		 * Get a client property.
		 *
		 * @param c The client
		 * @param prop The property name.
		 *
		 * @returns The property value.
		 *
		 * @deprecated It is now possible to use `c.value` directly.
		 */
		get<K extends NonFunctionKeys<AwesomeClient>>(
			c: AwesomeClient,
			prop: K,
		): AwesomeClient[K];

		/**
		 * Set a client property.
		 *
		 * @param c The client.
		 * @param prop The property name.
		 * @param value The property value.
		 *
		 * @deprecated It is now possible to use `c.value = value` directly.
		 */
		set<K extends NonFunctionKeys<AwesomeClient>>(
			c: AwesomeClient,
			prop: K,
			value: AwesomeClient[K],
		): void;

		/**
		 * Set a client property to be persistent across restarts (via X
		 * properties).
		 *
		 * @param prop The property name.
		 * @param kind The type (used for `register_xproperty`).
		 */
		persist(prop: string, kind: "string" | "number" | "boolean"): void;
	};

	/**
	 * Return if a client has a fixed size or not.
	 *
	 * @param c The client.
	 *
	 * @deprecated Use {@link AwesomeClient.is_fixed}.
	 */
	isfixed(c: AwesomeClient): boolean;

	/**
	 * Switch to a client matching the given condition if running, else spawn
	 * it. If multiple clients match the given condition then the next one is
	 * focused.
	 *
	 * @param cmd The command to execute.
	 * @param matcher A function that returns true to indicate a matching client
	 * @param merge If true then merge tags (select the client's first tag
	 * additionally) when the client is not visible. If it is a function, it
	 * will be called with the client as argument.
	 *
	 * @deprecated See `awful.spawn.once`, `awful.spawn.single_instance`,
	 * `awful.spawn.raise_or_spawn`.
	 */
	run_or_raise(
		cmd: string,
		matcher: (c: AwesomeClient) => boolean,
		merge: boolean | ((c: AwesomeClient) => boolean),
	): void;

	/**
	 * Get a matching transient_for client (if any).
	 *
	 * @param c The client.
	 * @param matcher A function that should return true, if a matching parent
	 * client is found.
	 *
	 * @returns The matching parent client or nil.
	 *
	 * @deprecated Use {@link AwesomeClient.get_transient_for_matching}
	 */
	get_transient_for_matching(
		c: AwesomeClient,
		matcher: (c: AwesomeClient) => boolean,
	): AwesomeClient | null;

	/**
	 * Is a client transient for another one?
	 *
	 * @param c The child client (having `transient_for`).
	 * @param c2 The parent client to check.
	 *
	 * @returns The parent client or nil.
	 *
	 * @deprecated Use {@link AwesomeClient.is_transient_for}.
	 */
	is_transient_for(c: AwesomeClient, c2: AwesomeClient): AwesomeClient | null;
}
