import type { AwesomeGlobal } from "./awesome/index";
import type { AwesomeGlobalMouse } from "./awful/mouse";
import type { AwesomeGlobalClient } from "./client";
import type { AwesomeGlobalScreen } from "./screen";
import type { AwesomeGlobalTag } from "./tag";

declare global {
	const awesome: AwesomeGlobal;
	const client: AwesomeGlobalClient;
	const mouse: AwesomeGlobalMouse;
	const screen: AwesomeGlobalScreen;
	const tag: AwesomeGlobalTag;
}
