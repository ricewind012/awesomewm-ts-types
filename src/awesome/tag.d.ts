import type { AwesomeClient } from "./client";
import type { SignalMap, SignalObject } from "./shared";

type AwesomeTagSignalMap = SignalMap & {
	/**
	 * Emitted when a tag requests to be selected.
	 *
	 * It is emitted on the global `tag` class rather than individual tag
	 * objects.
	 *
	 * @param context The reason why it was called.
	 */
	"request::select": (this: void, context: string) => boolean;

	/**
	 * This signal is emitted to request the list of default layouts.
	 *
	 * @param context The context (currently always "startup").
	 */
	"request::default_layouts": (this: void, context: "startup") => void;

	/**
	 * This signals is emitted when a tag needs layouts for the first time.
	 *
	 * @param context The context (currently always "awful").
	 * @param hints A, currently empty, table with hints.
	 */
	"request::layouts": (this: void, context: "awful", hints: table) => void;

	/**
	 * Emitted when a client gets tagged with this tag.
	 *
	 * @param c The tagged client.
	 */
	tagged: (this: void, c: AwesomeClient) => void;

	/**
	 * Emitted when a client gets untagged with this tag.
	 *
	 * @param c The untagged client.
	 */
	untagged: (this: void, c: AwesomeClient) => void;

	/**
	 * Emitted when all clients are removed from the tag.
	 */
	cleared: () => void;

	/**
	 * Emitted when the number of urgent clients on this tag changes.
	 *
	 * @param urgent `true` if there is at least one urgent client on the tag.
	 */
	"property::urgent": (this: void, urgent: boolean) => void;

	/**
	 * Emitted when the number of urgent clients on this tag changes.
	 *
	 * @param count The number of urgent clients on the tag.
	 */
	"property::urgent_count": (this: void, count: number) => void;

	/**
	 * Emitted when a screen is removed.
	 *
	 * This can be used to salvage existing tags by moving them to a new screen
	 * (or creating a virtual screen).
	 *
	 * By default, there is no handler for this request and the tags will be
	 * deleted. To prevent this, an handler for this request must simply set a
	 * new screen for the tag.
	 *
	 * @param context Why it was called.
	 */
	"request::screen": (this: void, context: string) => void;

	/**
	 * Emitted after `request::screen` if no new screen has been set. The tag
	 * will be deleted, this is a last chance to move its clients before they
	 * are sent to a fallback tag. Connect to `request::screen` if you wish to
	 * salvage the tag.
	 */
	"removal-pending": () => void;
};

export interface AwesomeTag extends SignalObject<AwesomeTagSignalMap> {
	/**
	 * Get or set the clients attached to this tag.
	 *
	 * @param clients_table None or a table of clients to set as being tagged
	 * with this tag.
	 *
	 * @returns A table with the clients attached to this tags.
	 */
	clients(clients_table?: AwesomeClient[]): AwesomeClient[];

	/**
	 * Swap 2 tags.
	 *
	 * ```lua
	 * -- Calling awful.tag.new
	 * awful.tag({ "one", "two", "three", "four" }, screen[1])
	 *
	 * screen[1].tags[2]:view_only()
	 *
	 * -- Swap tag 2 with tag 4.
	 * screen[1].tags[2]:swap(screen[1].tags[4])
	 * ```
	 *
	 * @param tag2 The second tag
	 */
	swap(tag2: AwesomeTag): void;

	/**
	 * Remove all tagged clients.
	 *
	 * ```lua
	 * -- Calling awful.tag.new
	 * awful.tag({ "one", "two" }, screen[1], some_layouts)
	 *
	 * -- Call :clear() on the first tag.
	 * screen[1].tags[1]:clear{}
	 * ```
	 */
	clear(args: {
		/**
		 * A fallback tag.
		 */
		fallback_tag: AwesomeTag;

		/**
		 * Allow the untagged clients to remain untagged.
		 */
		allow_untagged?: boolean;
	}): void;

	/**
	 * Delete a tag.
	 *
	 * To delete the current tag:
	 *
	 * ```
	 * -- Calling awful.tag.new
	 * awful.tag({ "one", "two", "three", "four" }, screen[1])
	 *
	 * screen[1].tags[2]:view_only()
	 *
	 * -- Delete the selected tag.
	 * mouse.screen.selected_tag:delete()
	 * ```
	 *
	 * @param fallback_tag Tag to assign stickied tags to.
	 * @param force Move even non-sticky clients to the fallback tag.
	 *
	 * @returns Returns true if the tag is successfully deleted. If there are no
	 * clients exclusively on this tag then delete it. Any stickied clients are
	 * assigned to the optional `fallback_tag`. If after deleting the tag there
	 * is no selected tag, try and restore from history or select the first tag
	 * on the screen.
	 */
	delete(fallback_tag?: AwesomeTag, force?: boolean): boolean;

	/**
	 * View only a tag.
	 *
	 *  -- Calling awful.tag.new
	 *  awful.tag({ "one", "two", "three", "four" }, screen[1])
	 *
	 *  -- Manually select some tags (tag 1 was auto selected).
	 *  screen[1].tags[3].selected = true
	 *  screen[1].tags[4].selected = true
	 *
	 *  -- Call :view_only() on the second tag.
	 *  screen[1].tags[2]:view_only()
	 */
	view_only(): void;

	/**
	 * Tag name.
	 */
	name: string;

	/**
	 * True if the tag is selected to be viewed.
	 */
	selected: boolean;

	/**
	 * True if the tag is active and can be used.
	 */
	activated: boolean;

	/**
	 * The tag index.
	 */
	index: number;

	/**
	 * The tag screen.
	 */
	screen: AwesomeScreen;

	/**
	 * The tag master width factor.
	 */
	master_width_factor: number;

	/**
	 * The tag client layout.
	 * TODO: accepts a function too apparently?
	 */
	layout: AwesomeLayout;

	/**
	 * The (proposed) list of available layouts for this tag.
	 */
	layouts: AwesomeLayout[] | undefined;

	/**
	 * Define if the tag must be deleted when the last client is untagged.
	 */
	volatile: boolean;

	/**
	 * The gap (spacing, also called useless_gap) between clients.
	 */
	gap: number;

	/**
	 * Enable gaps for a single client.
	 */
	gap_single_client: boolean;

	/**
	 * Set size fill policy for the master client(s).
	 */
	master_fill_policy: string;

	/**
	 * Set the number of master windows.
	 */
	master_count: number;

	/**
	 * Set the tag icon.
	 */
	icon: awesome_image | undefined;

	/**
	 * Set the number of columns.
	 */
	column_count: number;
}

export interface AwesomeGlobalTag extends SignalObject<AwesomeTagSignalMap> {}
