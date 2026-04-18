import type { WiboxLayoutAlign } from "./align";
import type { WiboxLayoutFixed } from "./fixed";
import type { WiboxLayoutFlex } from "./flex";
import type { WiboxLayoutGrid } from "./grid";
import type { WiboxLayoutManual } from "./manual";
import type { WiboxLayoutRatio } from "./ratio";
import type { WiboxLayoutStack } from "./stack";

export interface WiboxLayout {
	align: WiboxLayoutAlign;
	fixed: WiboxLayoutFixed;
	flex: WiboxLayoutFlex;
	grid: WiboxLayoutGrid;
	manual: WiboxLayoutManual;
	radio: WiboxLayoutRatio;
	stack: WiboxLayoutStack;
}
