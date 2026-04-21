/// <reference types="./awesome/wibox/widget/base" />
/// <reference types="./awesome/wibox/container" />
/// <reference types="./awesome/wibox/layout" />

// https://www.typescriptlang.org/docs/handbook/jsx.html
declare namespace JSX {
	type Element = BaseWidget;
	//type ElementChildrenAttribute = Partial<BaseWidgetProps>;
	type ElementType = (props: object) => BaseWidget;
	type IntrinsicElements = {
		[el in keyof WiboxLayout]: WiboxLayout[el];
	} & {
		[el in keyof WiboxContainer]: WiboxContainer[el];
	} & {
		[el in keyof WiboxWidget]: WiboxWidget[el];
	};
}
