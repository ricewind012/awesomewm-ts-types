interface WiboxContainerScrollProps {}

interface WiboxContainerScroll extends BaseWidget {
	/**
	 * Pause the scrolling animation.
	 */
	pause(): void;

	/**
	 * Continue the scrolling animation.
	 */
	continue(): void;

	/**
	 * Reset the scrolling state to its initial condition. For must scroll step
	 * functions, the effect of this function should be to display the widget
	 * without any scrolling applied. This function does not undo the effect of
	 * {@link pause}.
	 */
	reset_scrolling(): void;

	/**
	 * Set the direction in which this widget scroll.
	 *
	 * @param dir Either "h" for horizontal scrolling or "v" for vertical
	 * scrolling
	 */
	set_direction(dir: "h" | "v"): void;

	/**
	 * Specify the expand mode that is used for extra space.
	 *
	 * @param expand If true, the widget is expanded to include the extra space.
	 * If false, the extra space is simply left empty.
	 */
	set_expand(expand: boolean): void;

	/**
	 * Set the number of frames per second that this widget should draw.
	 *
	 * @param fps The number of frames per second
	 */
	set_fps(fps: number): void;

	/**
	 * Set the amount of extra space that should be included in the scrolling.
	 * This extra space will likely be left empty between repetitions of the
	 * widgets.
	 *
	 * @param extra_space The amount of extra space
	 */
	set_extra_space(extra_space: number): void;

	/**
	 * Set the speed of the scrolling animation.  The exact meaning depends on the step function that is used, but for the simplest step functions, this will be in pixels per second.
	 *
	 * @param speed The speed for the animation
	 */
	set_speed(speed: number): void;

	/**
	 * Set the maximum size of this widget in the direction set by
	 * {@link set_direction}. If the child widget is smaller than this size, no
	 * scrolling is done. If the child widget is larger, then only this size
	 * will be visible and the rest is made visible via scrolling.
	 *
	 * @param max_size The maximum size of this widget or nil for unlimited.
	 */
	set_max_size(max_size: number): void;

	/**
	 * Set the step function that determines the exact behaviour of the
	 * scrolling animation. The step function is called with five arguments:
	 *
	 * - The time in seconds since the state of the animation.
	 * - The size of the child widget.
	 * - The size of the visible part of the widget.
	 * - The speed of the animation. This should have a linear effect on this
	 *   function's behaviour.
	 * - The extra space configured by `set_extra_space`. This was not yet added
	 *   to the size of the child widget, but should likely be added to it in
	 *   most cases. The step function should return a single number. This
	 *   number  is the offset at which the widget is drawn and should be
	 *   between 0 and `size + extra_space` .
	 *
	 * @param step_function A step function.
	 */
	set_step_function(
		step_function: (
			time: number,
			child_widget_size: number,
			visible_part_size: number,
			anim_speed: number,
			extra_space: number,
		) => void,
	): void;

	/**
	 * Set an upper limit for the space for scrolling. This restricts the child
	 * widget's maximal size.
	 *
	 * @param space_for_scrolling The space for scrolling
	 */
	set_space_for_scrolling(space_for_scrolling: number): void;
}

/**
 * @noSelf
 */
interface WiboxContainerScrollConstructor {
	horizontal(props: Partial<WiboxContainerScrollProps>): WiboxContainerScroll;
	vertical(props: Partial<WiboxContainerScrollProps>): WiboxContainerScroll;

	/**
	 * A selection of step functions.
	 */
	step_functions: any;
}
