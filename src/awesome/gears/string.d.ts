/**
 * Various string manipulation and introspection fuctions.
 * @noSelf
 */
export interface GearsString {
	/**
	 * Escape a string from XML char. Useful to set raw text in textbox.
	 *
	 * @param text Text to escape.
	 *
	 * @returns Escaped text.
	 */
	xml_escape(text: string): string;

	/**
	 * Unescape a string from entities.
	 *
	 * @param text Text to unescape.
	 *
	 * @returns Unescaped text.
	 */
	xml_unescape(text: string): string;

	/**
	 * Count number of lines in a string.
	 *
	 * @param text Input string.
	 *
	 * @returns Number of lines.
	 */
	linecount(text: string): number;

	/**
	 * Split a string into multiple lines.
	 *
	 * @param text String to wrap.
	 * @param width Maximum length of each line. Default: 72.
	 * @param indent Number of spaces added before each wrapped line. Default: 0.
	 *
	 * @returns The string with lines wrapped to width.
	 */
	linewrap(text: string, width: number, indent: number): string;

	/**
	 * Escape all special pattern-matching characters so that lua interprets them
	 * literally instead of as a character class. Source:
	 * http://stackoverflow.com/a/20778724/15690
	 *
	 * @param s String to generate pattern for.
	 *
	 * @returns string with escaped characters
	 */
	quote_pattern(s: string): string;

	/**
	 * Generate a pattern matching expression that ignores case.
	 *
	 * @param q Original pattern matching expression.
	 *
	 * @returns The pattern.
	 */
	query_to_pattern(q: string): string;

	/**
	 * Split separates a string containing a delimiter into the list of substrings
	 * between that delimiter.
	 *
	 * @param str String to be splitted
	 * @param pattern Character where the string will be splitted or a pattern the
	 * target string will be splitted by.
	 *
	 * @returns list of the substrings
	 */
	split(str: string, pattern: string): string[];

	/**
	 * Check if a string starts with another string.
	 *
	 * @param str String to search.
	 * @param sub String to check for.
	 *
	 * @returns true if string starts with specified string
	 */
	startswith(str: string, sub: string): boolean;

	/**
	 * Check if a string ends with another string.
	 *
	 * @param str String to search.
	 * @param sub String to check for.
	 *
	 * @returns true if string ends with specified string
	 */
	endswith(str: string, sub: string): boolean;
}
