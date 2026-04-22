import * as awful from "awful";

import { user } from "../config/user";

/// Tag layouts.
// Appends all layouts defined in `config/user.ts` to all tags.
tag.connect_signal("request::default_layouts", () => {
	awful.layout.append_default_layouts(user.layouts);
});
