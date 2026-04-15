import * as menubar from "menubar";

// This is used later as the default terminal and editor to run.
interface Apps {
	editor: string;
	editor_cmd: string;
	terminal: string;
}

export const apps = {} as Apps;
apps.terminal = "xterm";
apps.editor = os.getenv("EDITOR") || "vi";
apps.editor_cmd = `${apps.terminal} -e ${apps.editor}`;

// Set the terminal for the menubar.
menubar.utils.terminal = apps.terminal;
