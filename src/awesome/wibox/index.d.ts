//// <reference types="./container" />
/// <reference types="./hierarchy.d.ts" />
/// <reference types="./layout" />
/// <reference types="./widget" />

/**
 * @noResolution
 */
declare module "wibox" {
	export const hierarchy: WiboxHierarchy;
	export const layout: WiboxLayout;
	export const widget: {
		base: WiboxWidgetBase;
	};
}
