/**
 * @noResolution
 */
declare module "awful" {
	import type { AwfulButton } from "~/awesome/awful/button";
	import type { AwfulClient } from "~/awesome/awful/client";
	import type { AwfulCompletion } from "~/awesome/awful/completion";
	import type { AwfulKey } from "~/awesome/awful/key";
	import type { AwfulKeyboard } from "~/awesome/awful/keyboard";
	import type { AwfulLayout } from "~/awesome/awful/layout";
	import type { AwfulMenu, MenuItem } from "~/awesome/awful/menu";
	import type { AwfulMouse } from "~/awesome/awful/mouse";
	import type { AwfulPlacement } from "~/awesome/awful/placement";
	import type { AwfulPrompt } from "~/awesome/awful/prompt";
	import type { AwfulScreen } from "~/awesome/awful/screen";
	import type { AwfulSpawn } from "~/awesome/awful/spawn";
	import type { AwfulTag } from "~/awesome/awful/tag";
	import type { AwfulUtil } from "~/awesome/awful/util";
	import type { AwfulHotkeysPopup } from "~/awesome/awful/widgets/hotkeys_popup";
	import type { AwfulPopup } from "~/awesome/awful/widgets/popup";
	import type { AwfulTitlebar } from "~/awesome/awful/widgets/titlebar";
	import type { AwfulWallpaper } from "~/awesome/awful/widgets/wallpaper";

	export const button: AwfulButton;
	export const client: AwfulClient;
	export const completion: AwfulCompletion;
	export const hotkeys_popup: AwfulHotkeysPopup;
	export const key: AwfulKey;
	export const keyboard: AwfulKeyboard;
	export const layout: AwfulLayout;
	export const menu: AwfulMenu;
	export const mouse: AwfulMouse;
	export const placement: AwfulPlacement;
	export const popup: AwfulPopup;
	export const prompt: AwfulPrompt;
	export const screen: AwfulScreen;
	export const spawn: AwfulSpawn;
	export const tag: AwfulTag;
	export const titlebar: AwfulTitlebar;
	export const util: AwfulUtil;
	export const wallpaper: AwfulWallpaper;

	export type { MenuItem };
}
