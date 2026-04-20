/**
 * @noSelf
 */
interface AwfulTag {
	/**
	 * Create a set of tags and attach it to a screen.
	 *
	 * This is what's performed by the default config:
	 *
	 * ```lua
	 * -- Calling awful.tag.new
	 * awful.tag({ "1", "2", "3", "4", "5", "6", "7", "8", "9" }, screen[1], awful.layout.layouts[1])
	 * ```
	 *
	 * It is also possible to set multiple layouts:
	 *
	 * ```lua
	 * local some_layouts = {
	 *     awful.layout.suit.fair,
	 *     awful.layout.suit.spiral,
	 *     awful.layout.suit.spiral.dwindle,
	 *     awful.layout.suit.magnifier,
	 *     awful.layout.suit.corner.nw,
	 * }
	 *
	 * -- Calling awful.tag.new
	 * awful.tag({ "one", "two", "three", "four", "five" }, screen[1], some_layouts)
	 *
	 * -- Add some clients
	 * for _, t in ipairs(screen[1].tags) do
	 *     for _ = 1, 5 do
	 *         awful.spawn("xterm", {tag = t})
	 *     end
	 * end
	 * ```
	 *
	 * @param names The tag name, in a table
	 * @param screen The tag screen.
	 * @param layout The layout or layout table to set for this tags by default.
	 *
	 * @returns A table with all created tags.
	 */
	(
		// https://github.com/TypeScriptToLua/TypeScriptToLua/issues/1661
		this: void,
		names: string[],
		screen: AwesomeScreen | string | number | undefined,
		layout: AwesomeLayout | AwesomeLayout[],
	): AwesomeTag[];

	/**
	 * Add a tag.
	 *
	 * @param name The tag name.
	 * @param props The tags initial properties.
	 */
	add(
		name: string,
		props?: {
			icon: string;
			layout: AwesomeLayout;
			master_fill_policy: "expand" | "master_width_factor";
			gap_single_client: boolean;
			gap: number;
			screen: AwesomeScreen;
			selected: boolean;
		},
	): AwesomeTag;

	/**
	 * Find a suitable fallback tag.
	 *
	 * @param screen The screen to look for a tag on.
	 * @param invalids A table of tags considered unacceptable.
	 *
	 * @returns Returns a fallback tag if one was found, otherwise nil.
	 */
	find_fallback(
		screen?: AwesomeScreen,
		invalids?: table,
	): AwesomeTag | undefined;

	/**
	 * Find a tag by name.
	 *
	 * @param s The screen of the tag
	 * @param name The name of the tag
	 *
	 * @returns The tag found, or `nil`
	 */
	find_by_name(
		s: AwesomeScreen | undefined,
		name: string,
	): AwesomeTag | undefined;

	/**
	 * Increase master width factor.
	 *
	 * @param add Value to add to master width factor.
	 * @param t The tag to modify.
	 */
	incmwfact(add: number, t?: AwesomeTag): void;

	/**
	 * Increase the spacing between clients
	 *
	 * @param add Value to add to the spacing between clients
	 * @param t The tag to modify.
	 */
	incgap(add: number, t?: AwesomeTag): void;

	/**
	 * Toggle size fill policy for the master client(s) between "expand" and
	 * {@link master_width_factor}.
	 *
	 * @param t The tag to modify.
	 */
	togglemfpol(t?: AwesomeTag): void;

	/**
	 * Increase the number of master windows.
	 *
	 * @param add Value to add to number of master windows.
	 * @param t The tag to modify.
	 * @param sensible Limit nmaster based on the number of visible tiled
	 * windows?
	 */
	incnmaster(add: number, t?: AwesomeTag, sensible?: boolean): void;

	/**
	 * Increase number of column windows.
	 *
	 * @param add Value to add to number of column windows.
	 * @param t The tag to modify.
	 * @param sensible Limit column_count based on the number of visible tiled
	 * windows?
	 */
	incncol(add: number, t?: AwesomeTag, sensible?: boolean): void;

	/**
	 * View no tag.
	 *
	 * ```lua
	 * -- Calling awful.tag.new
	 * awful.tag({ "one", "two", "three", "four" }, screen[1])
	 *
	 * -- Manually select some tags (tag 1 was auto selected).
	 * screen[1].tags[3].selected = true
	 * screen[1].tags[4].selected = true
	 *
	 * -- Deselect all tags.
	 * awful.tag.viewnone()
	 * ```
	 *
	 * @param screen The screen.
	 */
	viewnone(screen?: AwesomeScreen | number): void;

	/**
	 * Select a tag relative to the currently selected one.Note that this
	 * doesn't work well with multiple selection.
	 *
	 * ```lua
	 * -- Calling awful.tag.new
	 * awful.tag({ "one", "two", "three", "four" }, screen[1])
	 *
	 * screen[1].tags[2]:view_only()
	 *
	 * -- Select the tag relative to idx 2.
	 * awful.tag.viewidx(2)
	 *
	 * -- Select the tag relative to idx -2.
	 * awful.tag.viewidx(-2)
	 * ```
	 *
	 * This is equivalent to `screen.tags[i]:view_only()`
	 *
	 * @param i The **relative** index to see.
	 * @param screen The screen.
	 */
	viewidx(i: number, screen?: AwesomeScreen): void;

	/**
	 * View next tag. This is the same as `tag.viewidx(1)` .
	 *
	 * Note that this doesn't work well with multiple selection.
	 *
	 * ```lua
	 * -- Calling awful.tag.new
	 * awful.tag({ "one", "two", "three", "four" }, screen[1])
	 *
	 * screen[1].tags[3]:view_only()
	 *
	 * -- Select the next tag.
	 * awful.tag.viewnext()
	 *
	 * -- Select the next tag (again).
	 * awful.tag.viewnext()
	 * ```
	 *
	 * @param screen The screen.
	 */
	viewnext(screen?: AwesomeScreen): void;

	/**
	 * View previous tag. This is the same a `tag.viewidx(-1)` .
	 *
	 * Note that this doesn't work well with multiple selection.
	 *
	 * ```lua
	 * -- Calling awful.tag.new
	 * awful.tag({ "one", "two", "three", "four" }, screen[1])
	 *
	 * screen[1].tags[2]:view_only()
	 *
	 * -- Select the previous tag.
	 * awful.tag.viewprev()
	 *
	 * -- Select the previous tag (again).
	 * awful.tag.viewprev()
	 * ```
	 *
	 * @param screen The screen.
	 */
	viewprev(screen?: AwesomeScreen): void;

	/**
	 * View only a set of tags. If `maximum` is set, there will be a limit on
	 * the number of new tag being selected. The tags already selected do not
	 * count. To do nothing if one or more of the tags are already selected, set
	 * `maximum` to zero.
	 *
	 * @param tags A table with tags to view only.
	 * @param screen The screen of the tags.
	 * @param maximum The maximum number of tags to select.
	 */
	viewmore(tags: table, screen?: AwesomeScreen, maximum?: number): void;

	/**
	 * Toggle selection of a tag
	 *
	 * @param t Tag to be toggled
	 */
	viewtoggle(t: AwesomeTag): void;

	/**
	 * Add a signal to all attached tags and all tags that will be attached in
	 * the future. When a tag is detached from the screen, its signal is
	 * removed.
	 *
	 * @param screen The screen concerned, or all if `nil`.
	 * @param signal The signal name.
	 * @param callback
	 */
	attached_connect_signal<K extends keyof AwesomeTagSignalMap>(
		screen: AwesomeScreen,
		signal: K,
		callback: AwesomeTagSignalMap[K],
	): void;

	history: {
		/**
		 * Revert tag history.
		 *
		 * @param screen The screen.
		 * @param idx Index in history. Defaults to "previous" which is a
		 * special index toggling between last two selected sets of tags. Number
		 * (eg 1) will go back to the given index in history.
		 */
		restore(screen?: AwesomeScreen, idx?: number): void;

		/**
		 * Update the tag history.
		 *
		 * @param obj Screen object.
		 */
		update(obj?: AwesomeScreen): void;
	};
}
