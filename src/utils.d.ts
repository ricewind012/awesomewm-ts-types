type Only<T, What> = {
	[K in keyof T]: T[K] extends What ? K : never;
}[keyof T];

type NonOnly<T, What> = {
	[K in keyof T]: T[K] extends What ? never : K;
}[keyof T];
