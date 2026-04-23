import * as awful from "awful";
import * as wibox from "wibox";

import make_widget from "~/jsx";

import { Launcher, LayoutBox, TagList, TaskList } from "./module";

interface WibarProps {
	s: AwesomeScreen;
}

export function Wibar(props: WibarProps) {
	const { s } = props;

	// Create a promptbox.
	s.mypromptbox = awful.widget.prompt({});

	// Create the wibox
	const widget = (
		<wibox.layout.align.horizontal>
			{/* Left */}
			<wibox.layout.fixed.horizontal>
				<Launcher />
				<TagList s={s} />
				{s.mypromptbox}
			</wibox.layout.fixed.horizontal>

			{/* Middle */}
			<TaskList s={s} />

			{/* Right */}
			<wibox.layout.fixed.horizontal>
				{/* Keyboard map indicator and switcher. */}
				<awful.widget.keyboardlayout />
				<wibox.widget.systray />
				{/* Create a textclock widget. */}
				<wibox.widget.textclock />
				<LayoutBox s={s} />
			</wibox.layout.fixed.horizontal>
		</wibox.layout.align.horizontal>
	);

	return <awful.wibar position="top" screen={s} widget={widget} />;
}
