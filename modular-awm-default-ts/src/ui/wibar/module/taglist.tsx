import * as awful from "awful";

import { mod } from "../../../binds/mod";
import make_widget from "../../../jsx";

const { modkey } = mod;

interface TagListProps {
	s: AwesomeScreen;
}

export function TagList(props: TagListProps) {
	const { s } = props;

	// Create a taglist widget
	return (
		<awful.widget.taglist
			screen={s}
			filter={awful.widget.taglist.filter.all}
			buttons={[
				// Left-clicking a tag changes to it.
				awful.button<AwesomeTag>(undefined, awful.button.names.LEFT, (t) => {
					t.view_only();
				}),

				// Mod + Left-clicking a tag sends the currently focused client to it.
				awful.button<AwesomeTag>([modkey], awful.button.names.LEFT, (t) => {
					if (client.focus !== undefined) {
						client.focus.move_to_tag(t);
					}
				}),

				// Right-clicking a tag makes its contents visible in the current one.
				awful.button(undefined, awful.button.names.RIGHT, awful.tag.viewtoggle),

				// Mod + Right-clicking a tag makes the currently focused client visible
				// in it.
				// TODO: how is this not giving an error lol?
				awful.button([modkey], awful.button.names.RIGHT, (t) => {
					if (client.focus !== undefined) {
						client.focus.toggle_tag(t);
					}
				}),

				// Mousewheel scrolling cycles through tags.
				awful.button<AwesomeTag>(
					undefined,
					awful.button.names.SCROLL_DOWN,
					(t) => {
						awful.tag.viewprev(t.screen);
					},
				),
				awful.button<AwesomeTag>(
					undefined,
					awful.button.names.SCROLL_UP,
					(t) => {
						awful.tag.viewnext(t.screen);
					},
				),
			]}
		/>
	);
}
