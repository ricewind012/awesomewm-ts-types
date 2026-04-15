// Theme handling library
import * as beautiful from "beautiful";
// Standard awesome library
import * as gears from "gears";

// Themes define colors, icons, font and wallpapers.
beautiful.init(`${gears.filesystem.get_configuration_dir()}/theme/theme.lua`);
