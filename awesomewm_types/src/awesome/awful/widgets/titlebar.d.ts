/// <reference types="../../wibox/widget/base.d.ts" />
/// <reference types="../../client.d.ts" />

type TitlebarPosition = "top" | "left" | "right" | "bottom";

interface WiboxDrawable {
	/**
	 * Set a declarative widget hierarchy description.
	 */
	setup(widget: BaseWidget): void;
}

/**
 * @noSelf
 */
interface AwfulTitlebar {
	/**
	 * Create a new titlebar for the given client.
	 *
	 * Every client can hold up to four titlebars, one for each side (i.e. each
	 * value of `args.position`).
	 *
	 * If this constructor is called again with the same values for the client
	 * and the titlebar position, the previous titlebar will be removed and
	 * replaced by the new one.
	 *
	 * @param c The client the titlebar will be attached to.
	 * @param args A table with extra arguments for the titlebar.
	 *
	 * @returns The newly created titlebar object.
	 */
	(
		c: AwesomeClient,
		args?: {
			size?: number;
			position?: TitlebarPosition;
			bg_normal?: string;
			bg_focus?: string;
			bg_urgent?: string;
			bgimage_normal?: string;
			bgimage_focus?: string;
			fg_normal?: string;
			fg_focus?: string;
			fg_urgent?: string;
			font?: string;
		},
	): WiboxDrawable;

	widget: {
		/**
		 * Create a new title widget.
		 *
		 * A title widget displays the name of a client. Please note that this
		 * returns a textbox and all of textbox' API is available. This way, you
		 * can e.g. modify the font that is used.
		 *
		 * @param c The client for which the widget should be created.
		 *
		 * @returns The title widget.
		 */
		titlewidget(c: AwesomeClient): BaseWidget;

		/**
		 * Create a new icon widget.
		 *
		 * An icon widget displays the icon of a client. Please note that this
		 * returns an imagebox and all of the imagebox' API is available. This
		 * way, you can e.g. disallow resizes.
		 *
		 * @param c The client for which the widget should be created.
		 *
		 * @returns The icon widget.
		 */
		iconwidget(c: AwesomeClient): BaseWidget;

		/**
		 * Create a new button widget.
		 *
		 * A button widget displays an image and reacts to mouse clicks. Please
		 * note that the caller has to make sure that this widget gets redrawn
		 * when needed by calling the returned widget's `:update()` method. The
		 * selector function should return a value describing a state. If the
		 * value is a boolean, either "active" or "inactive" are used. The
		 * actual image is then found in the theme as
		 * `titlebar_[name]_button_[normal/focus]_[state]`. If that value does
		 * not exist, the focused state is ignored for the next try.
		 *
		 * @param c The client for which the widget should be created.
		 * @param name Name of the button, used for accessing the theme and in
		 * the tooltip.
		 * @param selector A function that selects the image that should be
		 * displayed.
		 * @param action Function that is called when the button is clicked.
		 *
		 * @returns The widget
		 */
		button(
			c: AwesomeClient,
			name: string,
			selector: () => void,
			action: () => void,
		): BaseWidget;

		/**
		 * Create a new float button for a client.
		 *
		 * @param c The client for which the widget should be created.
		 */
		floatingbutton(c: AwesomeClient): BaseWidget;

		/**
		 * Create a new maximize button for a client.
		 *
		 * @param c The client for which the widget should be created.
		 */
		maximizedbutton(c: AwesomeClient): BaseWidget;

		/**
		 * Create a new minimize button for a client.
		 *
		 * @param c The client for which the widget should be created.
		 */
		minimizebutton(c: AwesomeClient): BaseWidget;

		/**
		 * Create a new closing button for a client.
		 *
		 * @param c The client for which the widget should be created.
		 */
		closebutton(c: AwesomeClient): BaseWidget;

		/**
		 * Create a new ontop button for a client.
		 *
		 * @param c The client for which the widget should be created.
		 */
		ontopbutton(c: AwesomeClient): BaseWidget;

		/**
		 * Create a new sticky button for a client.
		 *
		 * @param c The client for which the widget should be created.
		 */
		stickybutton(c: AwesomeClient): BaseWidget;
	};

	/**
	 * Show the client's titlebar.
	 *
	 * @param c The client whose titlebar is to be modified.
	 * @param position The position of the titlebar.
	 */
	show(c: AwesomeClient, position?: TitlebarPosition): void;

	/**
	 * Hide the client's titlebar.
	 *
	 * @param c The client whose titlebar is to be modified.
	 * @param position The position of the titlebar.
	 */
	hide(c: AwesomeClient, position?: TitlebarPosition): void;

	/**
	 * Show/hide the client's titlebar.
	 *
	 * @param c The client whose titlebar is to be modified.
	 * @param position The position of the titlebar.
	 */
	toggle(c: AwesomeClient, position?: TitlebarPosition): void;

	/**
	 * Show tooltips when hover on titlebar buttons.
	 */
	enable_tooltip: boolean;

	/**
	 * Title to display if client name is not set.
	 */
	fallback_name: string;
}
