/// <reference path="./spawn.d.ts"/>

declare module "awful" {
	/**
	 * Spawn sub-processes and optionally get their output.
	 *
	 * This module provides methods to start programs and supports startup
	 * notifications, which allows for callbacks and applying properties to the
	 * program after it has been launched. This requires currently that the
	 * application supports them.
	 */
	export const spawn: AwfulSpawn;
}
