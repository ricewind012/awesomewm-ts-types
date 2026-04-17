interface WidgetHierarchy {
	/**
	 * Update a widget hierarchy with some new state.
	 *
	 * @param context The context in which we are laid out.
	 * @param widget The widget that is at the base of the hierarchy.
	 * @param width The available width for this hierarchy.
	 * @param height The available height for this hierarchy.
	 * @param region A region to use for accumulating changed parts
	 *
	 * @returns A cairo region describing the changed parts (either the region
	 * argument or a new, internally created region).
	 */
	update(
		context: any,
		widget: BaseWidget,
		width: number,
		height: number,
		region?: any,
	): any;

	/**
	 * Get the widget that this hierarchy manages.
	 *
	 * @returns The widget held by this node.
	 */
	get_widget(): BaseWidget;

	/**
	 * Get a matrix that transforms to the parent's coordinate space from this
	 * hierarchy's coordinate system.
	 *
	 * @returns A matrix describing the transformation.
	 */
	get_matrix_to_parent(): any;

	/**
	 * Get a matrix that transforms to the base of this hierarchy's coordinate
	 * system (aka the coordinate system of the device that this hierarchy is
	 * applied upon) from this hierarchy's coordinate system.
	 *
	 * @returns A matrix describing the transformation.
	 */
	get_matrix_to_device(): any;

	/**
	 * Get a matrix that transforms from the parent's coordinate space into this
	 * hierarchy's coordinate system.
	 *
	 * @returns A matrix describing the transformation.
	 */
	get_matrix_from_parent(): any;

	/**
	 * Get a matrix that transforms from the base of this hierarchy's coordinate
	 * system (aka the coordinate system of the device that this hierarchy is
	 * applied upon) into this hierarchy's coordinate system.
	 *
	 * @returns A matrix describing the transformation.
	 */
	get_matrix_from_device(): any;

	/**
	 * Get the extents that this hierarchy possibly draws to (in the current coordinate space).
	 *  This includes the size of this element plus the size of all children
	 *  (after applying the corresponding transformation).
	 *
	 * @returns x, y, width, height
	 */
	get_draw_extents(): LuaMultiReturn<[number, number, number, number]>;

	/**
	 * Get the size that this hierarchy logically covers (in the current
	 * coordinate space).
	 *
	 * @returns width, height
	 */
	get_size(): LuaMultiReturn<[number, number]>;

	/**
	 * Get a list of all children.
	 *
	 * @returns List of all children hierarchies.
	 */
	get_children(): WidgetHierarchy[];

	/**
	 * Count how often this widget is visible inside this hierarchy. This
	 * function only works with widgets registered via {@link count_widget}.
	 *
	 * @param widget The widget that should be counted
	 *
	 * @returns The number of times that this widget is contained in this hierarchy.
	 */
	get_count(widget: BaseWidget): number;

	/**
	 * Draw a hierarchy to some cairo context. This function draws the widgets
	 * in this widget hierarchy to the given cairo context. The context's clip
	 * is used to skip parts that aren't visible.
	 *
	 * @param context The context in which widgets are drawn.
	 * @param cr The cairo context that is used for drawing.
	 */
	draw(context: any, cr: any): any;
}

/**
 * @noSelf
 */
interface WiboxHierarchy {
	/**
	 * Create a new widget hierarchy that has no parent.
	 *
	 * @param context The context in which we are laid out.
	 * @param widget The widget that is at the base of the hierarchy.
	 * @param width The available width for this hierarchy.
	 * @param height The available height for this hierarchy.
	 * @param redraw_callback Callback that is called with the corresponding
	 * widget hierarchy on `widget::redraw_needed` on some widget.
	 * @param layout_callback Callback that is called with the corresponding
	 * widget hierarchy on `widget::layout_changed` on some widget.
	 * @param callback_arg A second argument that is given to the above
	 * callbacks.
	 */
	new (
		context: any,
		widget: any,
		width: number,
		height: number,
		redraw_callback: any,
		layout_callback: any,
		callback_arg: any,
	): WidgetHierarchy;

	/**
	 * Add a widget to the list of widgets for which hierarchies should count
	 * their occurrences. Note that for correct operations, the widget must not
	 * yet be visible in any hierarchy.
	 *
	 * @param widget The widget that should be counted.
	 */
	count_widget(widget: BaseWidget): void;
}
