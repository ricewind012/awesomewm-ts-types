/// <reference types="./awesome" />
/// <reference types="./awful/mouse" />
/// <reference types="./client" />
/// <reference types="./screen" />
/// <reference types="./tag" />

declare global {
	const awesome: AwesomeGlobal;
	const client: AwesomeGlobalClient;
	const mouse: AwesomeGlobalMouse;
	const screen: AwesomeGlobalScreen;
	const tag: AwesomeGlobalTag;
}

export {};
