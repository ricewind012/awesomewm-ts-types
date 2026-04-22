// Theme handling library
import * as beautiful from "beautiful";
// Standard awesome library
import * as gears from "gears";

import { theme } from "./theme";

// Themes define colors, icons, font and wallpapers.
// TODO(ts): how to remove ____exports from lua ?
// `${gears.filesystem.get_configuration_dir()}/theme/theme.lua`
beautiful.init(theme);
