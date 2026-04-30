/// <reference types="./arcchart.d.ts" />
/// <reference types="./background.d.ts" />
/// <reference types="./border.d.ts" />
/// <reference types="./constraint.d.ts" />
/// <reference types="./margin.d.ts" />
/// <reference types="./mirror.d.ts" />
/// <reference types="./place.d.ts" />
/// <reference types="./radialprogressbar.d.ts" />
/// <reference types="./rotate.d.ts" />
/// <reference types="./scroll.d.ts" />
/// <reference types="./tile.d.ts" />

interface WiboxContainer {
	arcchart: WiboxContainerArcchartConstructor;
	background: WiboxContainerBackgroundConstructor;
	border: WiboxContainerBorderConstructor;
	constraint: WiboxContainerConstraintConstructor;
	margin: WiboxContainerMarginConstructor;
	mirror: WiboxContainerMirrorConstructor;
	place: WiboxContainerPlaceConstructor;
	radialprogressbar: WiboxContainerRadialProgressBarConstructor;
	rotate: WiboxContainerRotateConstructor;
	scroll: WiboxContainerScrollConstructor;
	tile: WiboxContainerTileConstructor;
}
