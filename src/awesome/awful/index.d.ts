/// <reference types="./button.d.ts" />
/// <reference types="./client.d.ts" />
/// <reference types="./completion.d.ts" />
/// <reference types="./key.d.ts" />
/// <reference types="./keyboard.d.ts" />
/// <reference types="./layout.d.ts" />
/// <reference types="./menu.d.ts" />
/// <reference types="./mouse.d.ts" />
/// <reference types="./permissions.d.ts" />
/// <reference types="./placement.d.ts" />
/// <reference types="./prompt.d.ts" />
/// <reference types="./screen.d.ts" />
/// <reference types="./spawn.d.ts" />
/// <reference types="./tag.d.ts" />
/// <reference types="./util.d.ts" />
/// <reference types="./widget" />
// Just for sorting lol
/// <reference types="./widgets" />

/**
 * @noResolution
 */
declare module "awful" {
	export const button: AwfulButton;
	export const client: AwfulClient;
	export const completion: AwfulCompletion;
	export const hotkeys_popup: AwfulHotkeysPopup;
	export const key: AwfulKey;
	export const keyboard: AwfulKeyboard;
	export const layout: AwfulLayout;
	export const menu: AwfulMenu;
	export const mouse: AwfulMouse;
	export const permissions: AwfulPermissions;
	export const placement: AwfulPlacement;
	export const popup: AwfulPopup;
	export const prompt: AwfulPrompt;
	export const screen: AwfulScreen;
	export const spawn: AwfulSpawn;
	export const tag: AwfulTag;
	export const titlebar: AwfulTitlebar;
	export const util: AwfulUtil;
	export const wallpaper: AwfulWallpaper;
	export const wibar: AwfulWibar;
	export const widget: AwfulWidget;
}
