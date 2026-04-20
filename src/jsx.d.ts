/// <reference types="./awesome/wibox/widget/base" />
/// <reference types="./awesome/wibox/container" />
/// <reference types="./awesome/wibox/layout" />

declare namespace JSX {
	interface Element extends BaseWidget {}

	type IntrinsicElements = {
		[el in keyof WiboxLayout]: WiboxLayout[el];
	} & {
		[el in keyof WiboxContainer]: WiboxContainer[el];
	};
}
