type NonFunctionKeys<T> = {
	[K in keyof T]: T[K] extends (...args: unknown[]) => unknown ? never : K;
}[keyof T];
