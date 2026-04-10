/// <reference types="./client.d.ts" />
/// <reference types="./completion.d.ts" />
/// <reference types="./hotkeys_popup.d.ts" />
/// <reference types="./permissions.d.ts" />
/// <reference types="./placement.d.ts" />
/// <reference types="./prompt.d.ts" />
/// <reference types="./screen.d.ts" />
/// <reference types="./spawn.d.ts" />
/// <reference types="./widgets" />
/// <reference types="./util.d.ts" />

/**
 * @noSelf
 */
declare module "awful" {
	export const client: AwfulClient;
	export const completion: AwfulCompletion;
	export const hotkeys_popup: AwfulHotkeysPopup;
	export const placement: AwfulPlacement;
	export const prompt: AwfulPrompt;
	export const screen: AwfulScreen;
	export const spawn: AwfulSpawn;
	export const util: AwfulUtil;
}
