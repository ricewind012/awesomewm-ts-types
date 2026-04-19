/// <reference types="../../wibox" />

type PopupPosition = "left" | "right" | "top" | "bottom";

interface AwfulPopupInstance extends Wibox {
	/**
	 * Move the wibox to a position relative to `geo`. This will try to avoid
	 * overlapping the source wibox and auto-detect the right direction to avoid
	 * going off-screen.
	 *
	 * @param obj An object such as a wibox, client or a table entry returned by
	 * `wibox:find_widgets()`.
	 *
	 * @returns The new geometry
	 */
	move_next_to(obj?: any): Rectangle;

	/**
	 * Bind the popup to a widget button press.
	 *
	 * @param widget The widget
	 * @param button The button index
	 */
	bind_to_widget(widget: BaseWidget, button?: MouseButtonName): void;

	/**
	 * Unbind the popup from a widget button.
	 *
	 * @param widget
	 */
	unbind_to_widget(widget: BaseWidget): void;
}

/**
 * An auto-resized, free floating or modal wibox built around a widget.
 *
 * @noSelf
 */
interface AwfulPopup {
	/**
	 * Create a new popup build around a passed in widget.
	 */
	(
		// https://github.com/TypeScriptToLua/TypeScriptToLua/issues/1661
		this: void,
		args: WiboxSharedProps & {
			/**
			 * Set the preferred popup position relative to its parent.
			 */
			preferred_positions: PopupPosition | PopupPosition[];

			/**
			 * Set the preferred popup anchors relative to the parent.
			 */
			preferred_anchors: PopupPosition | PopupPosition[];

			/**
			 * The current position relative to the parent object.
			 */
			readonly current_position: PopupPosition;

			/**
			 * Get the current anchor relative to the parent object.
			 */
			readonly current_anchor: DrawableNextToAnchor;

			/**
			 * Hide the popup when right clicked.
			 */
			hide_on_right_click: boolean;

			/**
			 * The popup minimum width.
			 */
			minimum_width: number;

			/**
			 * The popup minimum height.
			 */
			minimum_height: number;

			/**
			 * The popup maximum width.
			 */
			maximum_width: number;

			/**
			 * The popup maximum height.
			 */
			maximum_height: number;

			/**
			 * The distance between the popup and its parent (if any).
			 */
			offset: { x: number; y: number } | number;

			/**
			 * Set the placement function.
			 */
			placement:
				| ((obj: table, args: table) => Rectangle)
				| Partial<PlacementCommonArgs>
				| string
				| boolean;
		},
	): AwfulPopupInstance;
}
