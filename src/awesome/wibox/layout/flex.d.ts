interface WiboxLayoutFlexProps extends BaseWidgetProps {
	/**
	 * Set the maximum size the widgets in this layout will take.
	 *
	 * That is, maximum width for horizontal and maximum height for vertical.
	 */
	max_widget_size?: number | undefined;

	/**
	 * A widget to insert as a separator between child widgets.
	 *
	 * If this property is a valid widget and {@link spacing} is greater than 0,
	 * a copy of this widget is inserted between each child widget, with its
	 * size in the layout's main direction determined by {@link spacing}.
	 *
	 * By default no widget is used and any {@link spacing} is applied as an
	 * empty offset.
	 */
	spacing_widget?: BaseWidget;

	/**
	 * The amount of space inserted between the child widgets.
	 *
	 * If a {@link spacing_widget} is defined, this value is used for its size.
	 */
	spacing?: number;
}

interface WiboxLayoutFlexWidget extends WiboxLayoutBaseWidget {}

/**
 * @noSelf
 */
interface WiboxLayoutFlex {
	/**
	 * Returns a new horizontal flex layout.
	 */
	horizontal(props: WiboxLayoutFlexProps): WiboxLayoutFlexWidget;

	/**
	 * Returns a new vertical flex layout.
	 */
	vertical(props: WiboxLayoutFlexProps): WiboxLayoutFlexWidget;
}
