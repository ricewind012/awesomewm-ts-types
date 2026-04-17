declare enum DrawableNextToAnchor {
	/**
	 * The closest to the origin (0, 0)
	 */
	FRONT = "front",

	/**
	 * Centered aligned with the parent
	 */
	MIDDLE = "middle",

	/**
	 * The opposite side compared to `front`
	 */
	BACK = "back",
}

declare enum DrawableNextToMode {
	/**
	 * Next to this geometry, `args.geometry` has to be set.
	 */
	GEOMETRY = "geometry",

	/**
	 * Next to the mouse
	 */
	CURSOR = "cursor",

	CURSOR_INSIDE = "cursor_inside",

	GEOMETRY_INSIDE = "geometry_inside",
}

// TODO: honor_workarea is used elsewhere
interface PlacementCommonArgs {
	/**
	 * Do not apply the new geometry. This is useful if only the return values
	 * is necessary.
	 */
	pretend: boolean;

	/**
	 * Take workarea into account when placing the drawable
	 * @default false
	 */
	honor_workarea: boolean;

	/**
	 * Take the screen padding into account
	 * @see {@link AwesomeScreen.padding}
	 */
	honor_padding: boolean;

	/**
	 * Use a tag geometry.
	 */
	tag: AwesomeTag;

	margins: number | table;

	/**
	 * A parent drawable to use a base geometry
	 */
	parent: Drawable | AwesomeMouse;

	bounding_rect: Rectangle;

	/**
	 * When the parent geometry (like the screen) changes, re-apply the
	 * placement function. This will add a `detach_callback` function to the
	 * drawable. Call this to detach the function. This will be called
	 * automatically when a new attached function is set.
	 */
	attach: boolean;

	/**
	 * The offset(s) to apply to the new geometry.
	 */
	offset: table | number;

	/**
	 * Keep a single history of each type of placement. It can be restored using
	 * {@link AwfulPlacement.restore} by setting the right `context` argument.
	 *
	 * When either the parent or the screen geometry change, call the placement
	 * function again.
	 */
	store_geometry: boolean;

	/**
	 * If attach is true, also update the screen workarea.
	 */
	update_workarea: boolean;
}

/**
 * @noSelf
 */
interface AwfulPlacement {
	/**
	 * Move a drawable to the closest corner of the parent geometry (such as the
	 * screen).
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns table
	 *         The new geometry
	 *
	 *            string
	 *         The corner name.
	 */
	closest_corner(
		d?: Drawable,
		args?: Partial<PlacementCommonArgs> & {
			/**
			 * Also include the left, right, top and bottom positions
			 */
			include_sides?: boolean;
		},
	): LuaMultiReturn<[table, string]>;

	/**
	 * Place the client so no part of it will be outside the screen (workarea).
	 *
	 * @param c The client
	 * @param args The arguments
	 *
	 * @returns The new client geometry.
	 */
	no_offscreen(c: AwesomeClient, args?: { screen?: AwesomeScreen }): Rectangle;

	/**
	 * Place the client where there's place available with minimum overlap.
	 *
	 * @param c The client
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	no_overlap(c: AwesomeClient, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Place the client under the mouse.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	under_mouse(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Place the client next to the mouse.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	next_to_mouse(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Resize the drawable to the cursor.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	resize_to_mouse(
		d: Drawable,
		args?: { axis: "horizontal" | "vertical" },
	): Rectangle;

	/**
	 * Move the drawable (client or wibox)
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	align(
		d: Drawable,
		args?: Partial<PlacementCommonArgs> & {
			position?:
				| "top_left"
				| "top_right"
				| "bottom_left"
				| "bottom_right"
				| "left"
				| "right"
				| "top"
				| "bottom"
				| "centered"
				| "center_vertical"
				| "center_horizontal";
		},
	): Rectangle;

	/**
	 * Align a client to the top left of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	top_left(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Align a client to the top right of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	top_right(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Align a client to the bottom left of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	bottom_left(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Align a client to the bottom right of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	bottom_right(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Align a client to the left of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	left(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Align a client to the right of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	right(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Align a client to the top of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	top(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Align a client to the bottom of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	bottom(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Align a client to the center of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	centered(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Align a client to the vertical center of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	center_vertical(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Align a client to the horizontal center left of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	center_horizontal(
		d: Drawable,
		args?: Partial<PlacementCommonArgs>,
	): Rectangle;

	/**
	 * Stretch a drawable in a specific direction.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	stretch(
		d: Drawable,
		args?: Partial<PlacementCommonArgs> & {
			direction?: Direction | Direction[];
		},
	): Rectangle;

	/**
	 * Stretch the drawable to the left of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	stretch_left(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Stretch the drawable to the right of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	stretch_right(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Stretch the drawable to the top of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	stretch_up(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Stretch the drawable to the bottom of the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	stretch_down(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;

	/**
	 * Maximize a drawable horizontally, vertically or both.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	maximize(
		d: Drawable,
		args?: Partial<PlacementCommonArgs> & {
			/**
			 * If none is specified, then the drawable will be maximized on both
			 * axis.
			 */
			axis?: "horizontal" | "vertical";
		},
	): Rectangle;

	/**
	 * Vetically maximize the drawable in the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	maximize_vertically(
		d: Drawable,
		args?: Partial<PlacementCommonArgs>,
	): Rectangle;

	/**
	 * Horizontally maximize the drawable in the parent area.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	maximize_horizontally(
		d: Drawable,
		args?: Partial<PlacementCommonArgs>,
	): Rectangle;

	/**
	 * Scale the drawable by either a relative or absolute percent.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	scale(
		d: Drawable,
		args?: Partial<PlacementCommonArgs> & {
			/**
			 * A number between 0 and 1. It represent a percent related to the
			 * parent geometry.
			 */
			to_percent?: number;

			/**
			 * A number between 0 and 1. It represent a percent related to the
			 * current size.
			 */
			by_percent?: number;

			direction?: Direction;
		},
	): Rectangle;

	/**
	 * Move a drawable to a relative position next to another one.
	 *
	 * This placement function offers two additional settings to align the
	 * drawable alongside the parent geometry. The first one, the position, sets
	 * the side relative to the parent. The second one, the anchor, set the
	 * alignment within the side selected by the {@link preferred_positions}.
	 * Both settings are tables of priorities. The first available slot will be
	 * used. If there isn't enough space, then it will fallback to the next
	 * until it is possible to fit the drawable. This is meant to avoid going
	 * offscreen.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry, the chosen position, and the chosen anchor.
	 */
	next_to<D extends Direction, A extends DrawableNextToAnchor>(
		d: Drawable,
		args?: Partial<PlacementCommonArgs> & {
			/**
			 * These parameters allows to control from which `next_to` takes its
			 * source object from.
			 */
			mode?: DrawableNextToMode;

			/**
			 * The preferred position(s) (in order)
			 */
			preferred_positions?: D | D[];

			/**
			 * The preferred anchor(s) (in order)
			 */
			preferred_anchors?: A | A[];

			/**
			 * A geometry inside the other drawable.
			 */
			geometry?: string;
		},
	): LuaMultiReturn<[Rectangle, D, A]>;

	/**
	 * Restore the geometry.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns If the geometry was restored
	 */
	restore(d: Drawable, args?: Partial<PlacementCommonArgs>): boolean;

	/**
	 * Skip all preceding results of placement pipeline for fullscreen clients.
	 *
	 * @param d A drawable
	 * @param args The arguments
	 *
	 * @returns The new geometry
	 */
	skip_fullscreen(d: Drawable, args?: Partial<PlacementCommonArgs>): Rectangle;
}
