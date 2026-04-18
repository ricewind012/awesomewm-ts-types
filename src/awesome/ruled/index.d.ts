/**
 * @noResolution
 * @noSelf
 */
declare module "ruled" {
	import type { RuledClient } from "~/awesome/ruled/client";
	import type { RuledNotification } from "~/awesome/ruled/notification";

	export const client: RuledClient;
	export const notification: RuledNotification;
}
