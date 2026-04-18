type DesktopFileEntry = Record<string, boolean | string | string[]>;

/**
 * Utility functions for the `menubar` module.
 */
export interface MenubarUtils {
	/**
	 * Remove CR newline from the end of the string.
	 * @param s The string to trim
	 * @returns The trimmed string.
	 */
	rtrim(s: string): string;

	/**
	 * Lookup an icon in different folders of the filesystem.
	 * @param icon_file Short or full name of the icon.
	 * @returns Full name of the icon, or false on failure.
	 */
	lookup_icon_uncached(icon_file: string): string | boolean;

	/**
	 * Lookup an icon in different folders of the filesystem (cached).
	 * @param icon Short or full name of the icon.
	 * @returns full name of the icon.
	 */
	lookup_icon(icon: string): string;

	/**
	 * Parse a .desktop file.
	 * @param file The .desktop file.
	 * @returns A table with file entries.
	 */
	parse_desktop_file(file: string): DesktopFileEntry | undefined;

	/**
	 * Parse a directory with .desktop files recursively.
	 * @param dir_path The directory path.
	 * @param programs Paths of found .desktop files.
	 */
	parse_dir(
		dir_path: string,
		callback: (entries: DesktopFileEntry[]) => void,
	): void;

	/**
	 * Terminal which applications that need terminal would open in.
	 */
	terminal: string;

	/**
	 * Name of the WM for the OnlyShowIn entry in the .desktop file.
	 */
	wm_name: string;
}
