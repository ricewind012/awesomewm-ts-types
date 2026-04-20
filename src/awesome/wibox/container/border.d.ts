type ImageFitPolicy = "fit" | "repeat" | "reflect" | "pad";

declare enum ImageScalingQuality {
	/**
	 * A high-performance filter
	 */
	FAST = "fast",

	/**
	 * A reasonable-performance filter
	 */
	GOOD = "good",

	/**
	 * The highest-quality available
	 */
	BEST = "best",

	/**
	 * Nearest-neighbor filtering (blocky)
	 */
	NEAREST = "nearest",

	/**
	 * Linear interpolation in two dimensions
	 */
	BILINEAR = "bilinear",
}

type ImageSides<T> = {
	[corner in ClientCorner]: T;
};

interface WiboxContainerBorderProps {
	/**
	 * A single border image for the border.
	 */
	border_image: string | awesome_image | undefined;

	/**
	 * Sice the border_image to fit the content.
	 */
	slice: boolean;

	/**
	 * Set a stylesheet for the slice surface.
	 */
	border_image_stylesheet: string;

	/**
	 * How the border_image(s) are scaled.
	 */
	image_scaling_quality: ImageScalingQuality;

	/**
	 * Use images for each of the side/corner/filling sections.
	 *
	 * This property is for using different images for each component of the
	 * border. If you want to use a single image, use {@link border_image}.
	 *
	 * Please note that this is mutually exclusive for each corner or side with
	 * {@link border_widgets}. It has priority over {@link border_image}.
	 */
	border_images: ImageSides<string | awesome_image | undefined>;

	/**
	 * The size of the border on each side.
	 */
	borders: AwesomeClientStrut | number;

	/**
	 * How the sliced image is resized for the border sides.
	 */
	sides_fit_policy: ImageFitPolicy;

	/**
	 * How the sliced image is resized for the border filling.
	 */
	filling_fit_policy: ImageFitPolicy;

	/**
	 * How the sliced image is resized for the border corners.
	 */
	corners_fit_policy: ImageFitPolicy;

	/**
	 * Stretch the child widget over the entire area.
	 */
	honor_borders: boolean;

	/**
	 * Draw the child widget below or on top of the border.
	 */
	ontop: boolean;

	/**
	 * Use the center portion of the border_image as a background.
	 */
	fill: boolean;

	/**
	 * Add some space between the border and the inner widget.
	 */
	paddings: AwesomeClientStrut | number;

	/**
	 * Use individual widgets as a border.
	 */
	border_widgets: ImageSides<BaseWidget> | undefined;

	/**
	 * Merge the corners widgets into the side widgets.
	 */
	border_merging:
		| {
				[side in keyof AwesomeClientStrut]: boolean;
		  }
		| undefined;

	/**
	 * When {@link border_widgets} is used, allow the border to grow due to
	 * corner widgets.
	 */
	expand_corners: boolean;
}

interface WiboxContainerBorder extends BaseWidget {
	/**
	 * Reset this layout. The widget will be removed and the rotation reset.
	 */
	reset(): void;
}

/**
 * @noSelf
 */
interface WiboxContainerBorderConstructor {
	(props: Partial<WiboxContainerBorderProps>): WiboxContainerBorder;
}
