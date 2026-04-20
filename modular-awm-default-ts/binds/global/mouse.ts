import * as awful from "awful";

import { menu } from "../../ui/menu";

/// Global mouse bindings
awful.mouse.append_global_mousebindings([
	awful.button(undefined, awful.button.names.RIGHT, () => {
		menu.main.toggle();
	}),
	awful.button(undefined, awful.button.names.SCROLL_DOWN, () => {
		awful.tag.viewprev();
	}),
	awful.button(undefined, awful.button.names.SCROLL_UP, () => {
		awful.tag.viewnext();
	}),
]);
