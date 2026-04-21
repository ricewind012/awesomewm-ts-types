/// <reference types="./button.d.ts" />
/// <reference types="./clienticon.d.ts" />
/// <reference types="./keyboardlayout.d.ts" />
/// <reference types="./launcher.d.ts" />
/// <reference types="./layoutbox.d.ts" />
/// <reference types="./layoutlist.d.ts" />
/// <reference types="./prompt.d.ts" />
/// <reference types="./taglist.d.ts" />
/// <reference types="./tasklist.d.ts" />
/// <reference types="./watch.d.ts" />

/**
 * @noSelf
 */
interface AwfulWidget {
	button: AwfulWidgetButtonConstructor;
	clienticon: AwfulWidgetClientIconConstructor;
	keyboardlayout: AwfulWidgetKeyboardLayoutConstructor;
	launcher: AwfulWidgetLauncherConstructor;
	layoutbox: AwfulWidgetLayoutBoxConstructor;
	layoutlist: AwfulWidgetLayoutListConstructor;
	prompt: AwfulWidgetPromptConstructor;
	taglist: AwfulWidgetTagListConstructor;
	tasklist: AwfulWidgetTaskListConstructor;
	watch: AwfulWidgetWatch;
}
