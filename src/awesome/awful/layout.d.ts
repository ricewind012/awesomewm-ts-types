/// <reference types="../client" />

// This has additional parameters depending on the layout.
interface AwesomeLayout {
	name: string;
	arrange: (params: AwesomeLayoutParams) => void;
}

interface AwesomeLayoutParams {
	workarea: Rectangle;
	geometry: Rectangle;
	clients: AwesomeClient[];
	screen: number;
	padding: AwesomeClientStrut | number;
	useless_gap: number;
	geometries: never;
}

/**
 * @noSelf
 */
interface AwfulLayout {
	/**
	 * Return the tag layout index (from {@link layouts}).
	 *
	 * If the layout isn't part of {@link layouts}, this function returns `nil`.
	 *
	 * @param t The tag.
	 *
	 * @returns The layout index.
	 */
	get_tag_layout_index(t: AwesomeTag): number | undefined;

	/**
	 * Get the current layout.
	 *
	 * @param screen The screen.
	 */
	get(screen: AwesomeScreen): AwesomeScreen;

	/**
	 * Change the layout of the current tag.
	 *
	 * @param i Relative index.
	 * @param s The screen.
	 * @param layouts A table of layouts.
	 */
	inc(i: number, s?: AwesomeScreen, layouts?: AwesomeLayout[]): void;

	/**
	 * Set the layout function of the current tag.
	 *
	 * @param l Layout object or function.
	 * @param t The tag to modify.
	 */
	set(l: AwesomeLayout | ((...args: unknown[]) => void), t?: AwesomeTag): void;

	/**
	 * Get the layout parameters used for the screen.
	 *
	 * This should give the same result as {@link arrange}, but without the
	 * "geometries" parameter, as this is computed during arranging.
	 *
	 * If `t` is given, `screen` is ignored, if none are given, the mouse screen
	 * is used.
	 *
	 * @param t The tag to query
	 * @param screen The screen
	 *
	 * @returns A table with the workarea (x, y, width, height), the screen
	 * geometry (x, y, width, height), the clients, the screen and sometime, a
	 * "geometries" table with client as keys and geometry as value
	 */
	parameters(
		t?: AwesomeTag,
		screen?: AwesomeScreen | number,
	): AwesomeLayoutParams;

	/**
	 * Arrange a screen using its current layout.
	 *
	 * @param screen The screen to arrange.
	 */
	arrange(screen: AwesomeScreen): void;

	/**
	 * Append a layout to the list of default tag layouts.
	 *
	 * @param to_add A valid tag layout.
	 */
	append_default_layout(to_add: AwesomeLayout): void;

	/**
	 * Remove a layout from the list of default layouts.
	 *
	 * @param to_remove A valid tag layout.
	 *
	 * @returns True if the layout was found and removed.
	 */
	remove_default_layout(to_remove: AwesomeLayout): boolean;

	/**
	 * Append many layouts to the list of default tag layouts.
	 *
	 * @param layouts A table of valid tag layout.
	 */
	append_default_layouts(layouts: AwesomeLayout[]): void;

	/**
	 * Get the current layout name.
	 *
	 * @param _layout The layout.
	 */
	getname(_layout: AwesomeLayout): void;

	layouts: AwesomeLayout[];

	suit: {
		corner: AwesomeLayout & {
			nw: AwesomeLayout;
			ne: AwesomeLayout;
			sw: AwesomeLayout;
			se: AwesomeLayout;
		};
		fair: AwesomeLayout & {
			horizontal: AwesomeLayout;
		};
		floating: AwesomeLayout;
		magnifier: AwesomeLayout;
		max: AwesomeLayout & {
			fullscreen: AwesomeLayout;
		};
		spiral: AwesomeLayout & {
			dwindle: AwesomeLayout;
			name: AwesomeLayout;
		};
		tile: AwesomeLayout & {
			right: AwesomeLayout;
			left: AwesomeLayout;
			bottom: AwesomeLayout;
			top: AwesomeLayout;
		};
	};
}
