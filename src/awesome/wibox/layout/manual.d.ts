/// <reference types="./base.d.ts" />

type NewGeometryPoint = (
	geo: Rectangle,
	args: { parent: Rectangle },
) => Rectangle;

interface WiboxLayoutManualWidget extends WiboxLayoutBaseWidget {
	/**
	 * Add a widget at a specific point.
	 *
	 * @param widget The widget.
	 * @param point A new point value.
	 */
	add_at(widget: BaseWidget, point: Rectangle | NewGeometryPoint): void;

	/**
	 * Move a widget (by index).
	 *
	 * @param index The widget index.
	 * @param point A new point value.
	 */
	move(index: number, point: Rectangle | NewGeometryPoint): void;

	/**
	 * Move a widget.
	 *
	 * @param widget The widget.
	 * @param point A new point value.
	 */
	move_widget(widget: BaseWidget, point: Rectangle | NewGeometryPoint): void;
}

/**
 * @noSelf
 */
interface WiboxLayoutManual {
	// https://github.com/TypeScriptToLua/TypeScriptToLua/issues/1661
	(this: void, ...args: BaseWidget[]): WiboxLayoutManualWidget;
}
