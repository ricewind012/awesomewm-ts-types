import * as awful from "awful";

import make_widget from "~/jsx";

interface LayoutBoxProps {
	s: AwesomeScreen;
}

export function LayoutBox(props: LayoutBoxProps) {
	const { s } = props;

	// Create an imagebox widget which will contain an icon indicating which layout we're using.
	// We need one layoutbox per screen.
	return (
		<awful.widget.layoutbox
			screen={s}
			buttons={[
				awful.button(undefined, awful.button.names.LEFT, () => {
					awful.layout.inc(1);
				}),
				awful.button(undefined, awful.button.names.RIGHT, () => {
					awful.layout.inc(-1);
				}),
				awful.button(undefined, awful.button.names.SCROLL_DOWN, () => {
					awful.layout.inc(-1);
				}),
				awful.button(undefined, awful.button.names.SCROLL_UP, () => {
					awful.layout.inc(1);
				}),
			]}
		/>
	);
}
