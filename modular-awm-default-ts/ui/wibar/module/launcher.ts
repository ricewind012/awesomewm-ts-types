import * as awful from "awful";
import * as beautiful from "beautiful";

import { menu } from "../../menu";

// Create a launcher widget. Opens the Awesome menu when clicked.
export default () => {
	return awful.widget.launcher({
		image: beautiful.awesome_icon,
		menu: menu.main,
	});
};
