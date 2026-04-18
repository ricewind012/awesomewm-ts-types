/**
 * @noResolution
 */
declare module "gears" {
	import type { GearsCache } from "~/awesome/gears/cache";
	import type { GearsColor } from "~/awesome/gears/color";
	import type { GearsDebug } from "~/awesome/gears/debug";
	import type { GearsFilesystem } from "~/awesome/gears/filesystem";
	import type { GearsGeometry } from "~/awesome/gears/geometry";
	import type { GearsMath } from "~/awesome/gears/math";
	import type { GearsMatrix } from "~/awesome/gears/matrix";
	import type { GearsObject } from "~/awesome/gears/object";
	import type { GearsProtectedCall } from "~/awesome/gears/protected_call";
	import type { GearsString } from "~/awesome/gears/string";
	import type { GearsSurface } from "~/awesome/gears/surface";
	import type { GearsTable } from "~/awesome/gears/table";
	import type { GearsTimer } from "~/awesome/gears/timer";
	import type { GearsWallpaper } from "~/awesome/gears/wallpaper";

	export const cache: GearsCache;
	export const color: GearsColor;
	export const debug: GearsDebug;
	export const filesystem: GearsFilesystem;
	export const geometry: GearsGeometry;
	export const object: GearsObject;
	export const protected_call: GearsProtectedCall;
	export const math: GearsMath;
	export const matrix: GearsMatrix;
	//export const sort: GearsSort;
	export const string: GearsString;
	export const surface: GearsSurface;
	export const table: GearsTable;
	export const timer: GearsTimer;
	export const wallpaper: GearsWallpaper;
}
