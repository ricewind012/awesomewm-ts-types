declare enum RatioLayoutInnerFillStrategy {
	/** Honor the ratio and do not redistribute the space. */
	DEFAULT = "default",

	/** Distribute the space among remaining widgets. */
	JUSTIFY = "justify",

	/** Squash remaining widgets and leave equal space on both side. */
	CENTER = "center",

	/** Add equal spacing between all widgets. */
	INNER_SPACING = "inner_spacing",

	/** Add equal spacing between all widgets and on the outside. */
	SPACING = "spacing",

	/** Squash remaining widgets and leave empty space on the left. */
	LEFT = "left",

	/** Squash remaining widgets and leave empty space on the right. */
	RIGHT = "right",
}

interface WiboxLayoutRatioProps extends WiboxLayoutFlexProps {
	/**
	 * Set how the space of invisible or `0x0` sized widget is redistributed.
	 */
	inner_fill_strategy: RatioLayoutInnerFillStrategy;
}

interface WiboxLayoutRatioWidget extends WiboxLayoutFlexWidget {
	/**
	 * Increase the ratio of "widget". If the increment produce an invalid ratio
	 * (not between 0 and 1), the method do nothing.
	 *
	 * @param index The widget index to change
	 * @param increment An floating point value between -1 and 1 where the end
	 * result is within 0 and 1
	 */
	inc_ratio(index: number, increment: number): void;

	/**
	 * Increment the ratio of the first instance of `widget`. If the increment
	 * produce an invalid ratio (not between 0 and 1), the method do nothing.
	 *
	 * @param widget The widget to adjust
	 * @param increment An floating point value between -1 and 1 where the end
	 * result is within 0 and 1
	 */
	inc_widget_ratio(widget: BaseWidget, increment: number): void;

	/**
	 * Set the ratio of the widget at position `index`.
	 *
	 * @param index The index of the widget to change
	 * @param percent An floating point value between 0 and 1
	 */
	set_ratio(index: number, percent: number): void;

	/**
	 * Get the ratio at `index`.
	 *
	 * @param index The widget index to query
	 *
	 * @returns The index (between 0 and 1)
	 */
	get_ratio(index: number): number;

	/**
	 * Set the ratio of `widget` to `percent`.
	 *
	 * @param widget The widget to adjust.
	 * @param percent A floating point value between 0 and 1.
	 */
	set_widget_ratio(widget: BaseWidget, percent: number): void;

	/**
	 * Update all widgets to match a set of a ratio. The sum of before, itself
	 * and after must be 1 or nothing will be done.
	 *
	 * @param index The index of the widget to change
	 * @param before The sum of the ratio before the widget
	 * @param itself The ratio for "widget"
	 * @param after The sum of the ratio after the widget
	 */
	adjust_ratio(
		index: number,
		before: number,
		itself: number,
		after: number,
	): void;

	/**
	 * Update all widgets to match a set of a ratio.
	 *
	 * @param widget The widget to adjust
	 * @param before The sum of the ratio before the widget
	 * @param itself The ratio for "widget"
	 * @param after The sum of the ratio after the widget
	 */
	adjust_widget_ratio(
		widget: BaseWidget,
		before: number,
		itself: number,
		after: number,
	): void;
}

/**
 * @noSelf
 */
interface WiboxLayoutRatio {
	/**
	 * Returns a new horizontal ratio layout. A ratio layout shares the
	 * available space. equally among all widgets. Widgets can be added via
	 * `:add(widget)`.
	 */
	horizontal(props: WiboxLayoutRatioProps): WiboxLayoutRatioWidget;

	/**
	 * Returns a new vertical ratio layout. A ratio layout shares the available
	 * space. equally among all widgets. Widgets can be added via
	 * `:add(widget)`.
	 */
	vertical(props: WiboxLayoutRatioProps): WiboxLayoutRatioWidget;

	/**
	 * Update all widgets to match a set of a ratio.
	 *
	 * @deprecated Use {@link adjust_widget_ratio}
	 *
	 * @param index The index of the widget to change
	 * @param before The sum of the ratio before the widget
	 * @param itself The ratio for "widget"
	 * @param after The sum of the ratio after the widget
	 */
	ajust_ratio(
		index: number,
		before: number,
		itself: number,
		after: number,
	): void;

	/**
	 * Update all widgets to match a set of a ratio.
	 *
	 * @deprecated Use {@link adjust_widget_ratio}
	 *
	 * @param widget The widget to adjust
	 * @param before The sum of the ratio before the widget
	 * @param itself The ratio for "widget"
	 * @param after The sum of the ratio after the widget
	 */
	ajust_widget_ratio(
		widget: BaseWidget,
		before: number,
		itself: number,
		after: number,
	): void;
}
