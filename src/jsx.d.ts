// https://www.typescriptlang.org/docs/handbook/jsx.html
declare namespace JSX {
	type Element = BaseWidget;
	type ElementType = (props: any) => BaseWidget | WiboxDrawable;
	type IntrinsicElements = {
		[el in keyof WiboxLayout]: WiboxLayout[el];
	} & {
		[el in keyof WiboxContainer]: WiboxContainer[el];
	} & {
		[el in keyof WiboxWidget]: WiboxWidget[el];
	};
}
