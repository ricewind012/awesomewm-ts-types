interface WiboxWidgetImageBoxProps extends BaseWidgetProps {
	/**
	 * The image rendered by the imagebox.
	 */
	image: awesome_image | undefined;

	/**
	 * Return the source image width.
	 */
	source_width?: number;

	/**
	 * Return the source image height.
	 */
	source_height?: number;

	/**
	 * Set a clip shape for this imagebox.
	 */
	clip_shape?: shape | ((cr: any, width: number, height: number) => void);

	/**
	 * Should the image be resized to fit into the available space?
	 */
	resize?: boolean;

	/**
	 * Allow the image to be upscaled (made bigger).
	 */
	upscale?: boolean;

	/**
	 * Allow the image to be downscaled (made smaller).
	 */
	downscale?: boolean;

	/**
	 * Set the SVG CSS stylesheet.
	 */
	stylesheet?: string;

	/**
	 * Set the SVG DPI (dot per inch).
	 */
	dpi?: Coords | number;

	/**
	 * Use the object DPI when rendering the SVG.
	 */
	auto_dpi?: boolean;

	/**
	 * Set the horizontal fit policy.
	 */
	horizontal_fit_policy?: ImageFitPolicy;

	/**
	 * Set the vertical fit policy.
	 */
	vertical_fit_policy?: ImageFitPolicy;

	/**
	 * The vertical alignment.
	 */
	valign?: VerticalAlignment;

	/**
	 * The horizontal alignment.
	 */
	halign?: HorizontalAlignment;

	/**
	 * The maximum scaling factor.
	 */
	max_scaling_factor?: number;

	/**
	 * Set the scaling aligorithm.
	 */
	scaling_quality?: ImageScalingQuality;
}

interface WiboxWidgetImageBox extends BaseWidget {}

/**
 * @noSelf
 */
interface WiboxWidgetImageBoxConstructor {
	(props: WiboxWidgetImageBoxProps): WiboxWidgetImageBox;
}
