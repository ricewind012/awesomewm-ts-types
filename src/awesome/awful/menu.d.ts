type MenuItem =
	| [string, MenuItem[] | string | (() => void)]
	| [
			string,
			MenuItem[] | string | (() => void),
			string | cairo_surface | undefined,
	  ];

interface MenuInstanceOptions {
	coords: Coords;
}

interface MenuInstance {
	/**
	 * Show the menu.
	 */
	show(args?: Partial<MenuInstanceOptions>): void;

	/**
	 * Hide the menu.
	 */
	hide(): void;

	/**
	 * Toggle menu visibility.
	 */
	toggle(args?: Partial<MenuInstanceOptions>): void;

	/**
	 * Update menu content.
	 */
	update(): void;

	/**
	 * Get the elder parent, so for example when you kill it, it will destroy
	 * the whole family.
	 *
	 * @returns The root menu.
	 */
	get_root(): MenuInstance;

	/**
	 * Add a new menu entry.
	 *
	 * @param args The item params.
	 * @param index The index where the new entry will inserted.
	 *
	 * @returns The new item.
	 */
	add(
		args: {
			/**
			 * The menu entry constructor.
			 */
			new_menu?: (...args: unknown[]) => any;

			/**
			 * The menu entry theme.
			 */
			theme?: Partial<Theme>;
		},
		index?: number,
	): table | undefined;

	/**
	 * Delete menu entry at given position.
	 *
	 * @param num The index in the table of the menu entry to be deleted; can be
	 * also the menu entry itself.
	 */
	delete(num: MenuInstance | number): void;
}

interface MenuCreationOptions {
	/**
	 * Controls the submenu auto expand behaviour.
	 */
	auto_expand?: boolean;

	/**
	 * Table containing the displayed items.
	 */
	items: MenuItem[];

	// TODO: XD
	// https://github.com/awesomeWM/awesome/blob/master/lib/awful/menu.lua#L115
	theme?: Partial<Theme> &
		Partial<{
			border: any;
			border_width: any;
			fg_focus: any;
			bg_focus: any;
			fg_normal: any;
			bg_normal: any;
			submenu_icon: any;
			submenu: any;
			height: any;
			width: any;
			font: any;
		}>;
}

/**
 * @noSelf
 */
interface AwfulMenu {
	/**
	 * Create a menu popup.
	 *
	 * @param args Table containing the menu information.
	 * @param parent Specify the parent menu if we want to open a submenu, this
	 * value should never be set by the user.
	 */
	// https://github.com/TypeScriptToLua/TypeScriptToLua/issues/1661
	(this: void, args: MenuCreationOptions, parent?: MenuInstance): MenuInstance;

	/**
	 * Build a popup menu with running clients and show it.
	 *
	 * @param args Menu table.
	 * @param item_args Table that will be merged into each item.
	 * @param filter A function returning `true` or `false` to indicate whether
	 * the client should be included in the menu.
	 */
	clients(
		args?: Omit<MenuCreationOptions, "items">,
		item_args?: table,
		filter?: (c: AwesomeClient) => boolean,
	): MenuInstance;

	/**
	 * Use {@link clients} to build and open the client menu if it isn't already
	 * open. Close the client menu if it is already open. See {@link clients}
	 * for more information.
	 *
	 * @param args Menu table.
	 * @param item_args Table that will be merged into each item.
	 * @param filter A function returning `true` or `false` to indicate whether
	 * the client should be included in the menu.
	 */
	client_list(
		args?: Omit<MenuCreationOptions, "items">,
		item_args?: table,
		filter?: (c: AwesomeClient) => boolean,
	): MenuInstance;

	/**
	 * Default `awful.menu.entry` constructor.
	 *
	 * @param parent The parent menu (TODO: This is apparently unused)
	 * @param args The item params
	 */
	entry(parent: MenuInstance, args: table): MenuItem;
}
