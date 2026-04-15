/**
 * Menu generation module for menubar
 */
interface MenubarMenuGen {
	/**
	 * Generate an array of all visible menu entries.
	 * @param callback Will be fired when all menu entries were parsed with the
	 * resulting list of menu entries as argument.
	 */
	generate(
		callback: (
			/**
			 * All menu entries.
			 */
			entries: table,
		) => void,
	): void;

	/**
	 * Specify the mapping of .desktop Categories section to the
	 * categories in the menubar. If "use" flag is set to false then any of
	 * the applications that fall only to this category will not be shown.
	 * @param multimedia
	 * @param name
	 * @param icon_name
	 * @param use
	 */
	all_categories(multimedia: any, name: any, icon_name: any, use: any): void;

	/**
	 * Specifies all directories where menubar should look for .desktop
	 * files. The search is recursive.
	 */
	all_menu_dirs: unknown;
}
