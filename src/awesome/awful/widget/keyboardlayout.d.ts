interface AwfulWidgetKeyboardLayoutProps extends BaseWidgetProps {
	country_codes?: string[];
}

interface AwfulWidgetKeyboardLayout extends BaseWidget {
	/**
	 * Select the next layout.
	 */
	next_layout(): void;
}

/**
 * @noSelf
 */
interface AwfulWidgetKeyboardLayoutConstructor {
	(props: AwfulWidgetKeyboardLayoutProps): AwfulWidgetKeyboardLayout;

	/**
	 * Auxiliary function for the local function updatelayout(). Create an array
	 * whose element is a table consisting of the four fields: vendor, file,
	 * section and groupidx, which all correspond to the xkbsymbols pattern
	 * "vendor/file(section):groupidx".
	 *
	 * @param group_names The string `awesome.xkb_get_group_names()` returns.
	 */
	get_groups_from_group_names(group_names: string[]): {
		vendor: string;
		file: string;
		section: string;
		group_idx: number;
	}[];
}
