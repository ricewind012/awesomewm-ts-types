type NewGeometryPoint = (geo: Geometry, args: { parent: Geometry }) => Geometry;

interface WiboxLayoutManualWidget extends WiboxLayoutBaseWidget {
	/**
	 * Add a widget at a specific point.
	 *
	 * @param widget The widget.
	 * @param point A new point value.
	 */
	add_at(widget: BaseWidget, point: Geometry | NewGeometryPoint): void;

	/**
	 * Move a widget (by index).
	 *
	 * @param index The widget index.
	 * @param point A new point value.
	 */
	move(index: number, point: Geometry | NewGeometryPoint): void;

	/**
	 * Move a widget.
	 *
	 * @param widget The widget.
	 * @param point A new point value.
	 */
	move_widget(widget: BaseWidget, point: Geometry | NewGeometryPoint): void;
}

/**
 * @noSelf
 */
interface WiboxLayoutManual {
	(props: BaseWidgetProps): WiboxLayoutManualWidget;
}
