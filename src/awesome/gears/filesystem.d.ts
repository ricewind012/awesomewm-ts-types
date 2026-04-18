/**
 * Various filesystem utility functions.
 *
 * Note that these functions are blocking. If you need to do a large number of
 * I/O operations, it is better to use `lgi.Gio` async functions.
 * @noSelf
 */
export interface GearsFilesystem {
	/**
	 * Create a directory, including all missing parent directories.
	 *
	 * @param dir The directory.
	 *
	 * @returns (true, nil) on success, (false, err) on failure
	 */
	make_directories(dir: string): LuaMultiReturn<[boolean, any]>;

	/**
	 * Create all parent directories for a given path.
	 *
	 * @param path The path whose parents should be created.
	 *
	 * @returns (true, nil) on success, (false, err) on failure.
	 */
	make_parent_directories(path: string): LuaMultiReturn<[boolean, any]>;

	/**
	 * Check if a file exists, is readable and not a directory.
	 *
	 * @param filename The file path.
	 *
	 * @returns True if file exists and is readable.
	 */
	file_readable(filename: string): boolean;

	/**
	 * Check if a file exists, is executable and not a directory.
	 *
	 * @param filename The file path.
	 *
	 * @returns True if file exists and is executable.
	 */
	file_executable(filename: string): boolean;

	/**
	 * Check if a path exists, is readable and a directory.
	 *
	 * @param path The directory path.
	 *
	 * @returns True if path exists and is readable.
	 */
	dir_readable(path: string): boolean;

	/**
	 * Check if a path exists, is writable and a directory.
	 *
	 * @param path The directory path.
	 *
	 * @returns True if path exists and is writable.
	 */
	dir_writable(path: string): boolean;

	/**
	 * Check if a path is a directory.
	 *
	 * @param path The directory path.
	 *
	 * @returns True if path exists and is a directory.
	 */
	is_dir(path: string): boolean;

	/**
	 * Get the config home according to the XDG basedir specification.
	 *
	 * @returns the config home (XDG_CONFIG_HOME) with a slash at the end.
	 */
	get_xdg_config_home(): string;

	/**
	 * Get the cache home according to the XDG basedir specification.
	 *
	 * @returns the cache home (XDG_CACHE_HOME) with a slash at the end.
	 */
	get_xdg_cache_home(): string;

	/**
	 * Get the data home according to the XDG basedir specification.
	 *
	 * @returns the data home (XDG_DATA_HOME) with a slash at the end.
	 */
	get_xdg_data_home(): string;

	/**
	 * Get the data dirs according to the XDG basedir specification.
	 *
	 * @returns the data dirs (XDG_DATA_DIRS) with a slash at the end of each
	 * entry.
	 */
	get_xdg_data_dirs(): string[];

	/**
	 * Get the path to the user's config dir. This is the directory containing
	 * the configuration file ("rc.lua").
	 *
	 * @returns A string with the requested path with a slash at the end.
	 */
	get_configuration_dir(): string;

	/**
	 * Get the path to a directory that should be used for caching data.
	 *
	 * @returns A string with the requested path with a slash at the end.
	 */
	get_cache_dir(): string;

	/**
	 * Get the path to the directory where themes are installed.
	 *
	 * @returns A string with the requested path with a slash at the end.
	 */
	get_themes_dir(): string;

	/**
	 * Get the path to the directory where our icons are installed.
	 *
	 * @returns A string with the requested path with a slash at the end.
	 */
	get_awesome_icon_dir(): string;

	/**
	 * Get the user's config or cache dir. It first checks XDG_CONFIG_HOME /
	 * XDG_CACHE_HOME, but then goes with the default paths.
	 *
	 * @param d The directory to get.
	 *
	 * @returns A string containing the requested path.
	 */
	get_dir(d: "cache" | "config"): string;

	/**
	 * Get the name of a random file from a given directory.
	 *
	 * @param path The directory to search.
	 * @param exts Specific extensions to limit the search to. eg: `{ "jpg",
	 * "png" }` If ommited, all files are considered.
	 * @param absolute_path Return the absolute path instead of the filename.
	 *
	 * @returns A randomly selected filename from the specified path (with a
	 * specified extension if required) or nil if no suitable file is found. If
	 * `absolute_path` is set, then a path is returned instead of a file name.
	 */
	get_random_file_from_dir(
		path: string,
		exts?: string[],
		absolute_path?: boolean,
	): string | undefined;
}
