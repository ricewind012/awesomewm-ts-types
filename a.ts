type SignalMap = Record<string, (...args: unknown[]) => void>;

interface SignalObject<M extends SignalMap> {
	connect_signal<K extends keyof M>(this: void, name: K, func: M[K]): void;
}

/**
 * @noSelf
 */
type SignalCallbackMap = SignalMap & {
	signal1: () => void;

	signal2: (text: string) => void;
};

interface SignalGlobal extends SignalObject<SignalCallbackMap> {
	something(): void;
}

declare global {
	const signal: SignalGlobal;
}

export {};

signal.connect_signal("signal2", (text) => {
	print(text);
});
