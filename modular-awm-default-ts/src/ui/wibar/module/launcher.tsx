import * as awful from "awful";
import * as beautiful from "beautiful";

import make_widget from "~/jsx";
import { menu } from "~/ui/menu";

// Create a launcher widget. Opens the Awesome menu when clicked.
export function Launcher() {
	return (
		<awful.widget.launcher
			image={beautiful.get().awesome_icon}
			menu={menu.main}
		/>
	);
}
