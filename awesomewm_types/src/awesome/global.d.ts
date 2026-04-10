/// <reference types="./awesome" />
/// <reference types="./client.d.ts" />
/// <reference types="./screen.d.ts" />

declare global {
	const awesome: AwesomeGlobal;
	const client: AwesomeGlobalClient;
	// @ts-expect-error: DOM global
	const screen: AwesomeGlobalScreen;
}

export {};
