/// <reference types="./client.d.ts" />
/// <reference types="./completion.d.ts" />
/// <reference types="./hotkeys_popup.d.ts" />
/// <reference types="./permissions.d.ts" />
/// <reference types="./prompt.d.ts" />
/// <reference types="./spawn.d.ts" />
/// <reference types="./widget.d.ts" />
/// <reference types="./util.d.ts" />

/**
 * @noSelf
 */
declare module "awful" {
	export const client: AwfulClient;
	export const completion: AwfulCompletion;
	export const hotkeys_popup: AwfulHotkeysPopup;
	export const prompt: AwfulPrompt;
	export const spawn: AwfulSpawn;
	export const util: AwfulUtil;
}
