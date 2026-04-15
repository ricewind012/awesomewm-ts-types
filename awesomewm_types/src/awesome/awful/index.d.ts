/// <reference types="./button.d.ts" />
/// <reference types="./client.d.ts" />
/// <reference types="./completion.d.ts" />
/// <reference types="./hotkeys_popup.d.ts" />
/// <reference types="./mouse.d.ts" />
// TODO
//// <reference types="./permissions.d.ts" />
/// <reference types="./placement.d.ts" />
/// <reference types="./prompt.d.ts" />
/// <reference types="./screen.d.ts" />
/// <reference types="./spawn.d.ts" />
/// <reference types="./widgets" />
/// <reference types="./util.d.ts" />

/**
 * @noResolution
 */
declare module "awful" {
	export const button: AwfulButton;
	export const client: AwfulClient;
	export const completion: AwfulCompletion;
	export const hotkeys_popup: AwfulHotkeysPopup;
	export const mouse: AwfulMouse;
	export const placement: AwfulPlacement;
	export const prompt: AwfulPrompt;
	export const screen: AwfulScreen;
	export const spawn: AwfulSpawn;
	export const titlebar: AwfulTitlebar;
	export const util: AwfulUtil;
}
