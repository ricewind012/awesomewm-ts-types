/// <reference types="./base.d.ts" />

/// <reference types="./align.d.ts" />
/// <reference types="./fixed.d.ts" />
/// <reference types="./flex.d.ts" />
/// <reference types="./grid.d.ts" />
/// <reference types="./manual.d.ts" />
/// <reference types="./ratio.d.ts" />
/// <reference types="./stack.d.ts" />

interface WiboxLayout {
	align: WiboxLayoutAlign;
	fixed: WiboxLayoutFixed;
	flex: WiboxLayoutFlex;
	grid: WiboxLayoutGrid;
	manual: WiboxLayoutManual;
	radio: WiboxLayoutRatio;
	stack: WiboxLayoutStack;
}
