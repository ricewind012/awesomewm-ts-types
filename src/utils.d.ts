type NonFunctionKeys<T> = {
	// biome-ignore lint/complexity/noBannedTypes: XD
	[K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
