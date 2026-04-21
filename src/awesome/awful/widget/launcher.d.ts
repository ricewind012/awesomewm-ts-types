interface AwfulWidgetLauncherProps extends AwfulWidgetButtonProps {
	/**
	 * The layoutlist default widget layout.
	 */
	// TODO: WiboxLayout widgets only
	base_layout?: BaseWidget;

	/**
	 * The delegate widget template.
	 */
	widget_template?: BaseWidget;

	/**
	 * The layoutlist screen.
	 */
	screen?: AwesomeScreen;

	/**
	 * A function that returns the list of layout to display.
	 */
	source?: (s: AwesomeScreen, metadata: table) => AwesomeLayout[];

	/**
	 * The currenly displayed layouts.
	 */
	layouts?: AwesomeLayout[];

	/**
	 * The currently selected layout.
	 */
	current_layout?: AwesomeLayout;

	/**
	 * The current number of layouts.
	 */
	count?: number;

	/**
	 * Extra look and feel parameters
	 */
	style?: AwfulWidgetLauncherStyle;
}

interface AwfulWidgetLauncherStyle {
	disable_icon?: boolean;
	disable_name?: boolean;
	fg_normal?: AwesomeColor;
	bg_normal?: AwesomeColor;
	fg_selected?: AwesomeColor;
	bg_selected?: AwesomeColor;
	font?: lgi.Pango.FontDescription | string;
	font_selected?: lgi.Pango.FontDescription | string;
	align?: "left" | "right" | "center";
	spacing?: number;
	shape?: shape;
	shape_border_width?: number;
	shape_border_color?: AwesomeColor;
	shape_selected?: shape;
	shape_border_width_selected?: number;
	shape_border_color_selected?: AwesomeColor;
}

interface AwfulWidgetLauncher extends AwfulWidgetButton {}

/**
 * @noSelf
 */
interface AwfulWidgetLauncherConstructor {
	(props: AwfulWidgetLauncherProps): AwfulWidgetLauncher;
}
