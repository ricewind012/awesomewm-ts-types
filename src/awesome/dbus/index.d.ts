/**
 * @noResolution
 * @noSelf
 */
declare module "dbus" {
	/**
	 * Register a D-Bus name to receive messages from.
	 *
	 * @param bus A string indicating if we are using system or session bus.
	 * @param name A string with the name of the D-Bus name to register.
	 *
	 * @returns True if everything worked fine, false otherwise.
	 */
	export function request_name(bus: string, name: string): boolean;

	/**
	 * Release a D-Bus name.
	 *
	 * @param bus A string indicating if we are using system or session bus.
	 * @param name A string with the name of the D-Bus name to unregister.
	 *
	 * @returns True if everything worked fine, false otherwise.
	 */
	export function release_name(bus: string, name: string): boolean;

	/**
	 * Add a match rule to match messages going through the message bus.
	 *
	 * @param bus A string indicating if we are using system or session bus.
	 * @param name A string with the name of the D-Bus name to register.
	 */
	export function add_match(bus: string, name: string): void;

	/**
	 * Remove a previously added match rule "by value"
	 *  (the most recently-added identical rule gets removed).
	 *
	 * @param bus A string indicating if we are using system or session bus.
	 * @param name A string with the name of the match rule.
	 */
	export function remove_match(bus: string, name: string): void;

	/**
	 * Add a signal receiver on the D-Bus.
	 *
	 * @param interface A string with the interface name.
	 * @param func The function to call.
	 *
	 * @returns true on success, nil + error if the signal could not be
	 * connected because another function is already connected.
	 */
	export function connect_signal(
		interface: string,
		func: (...args: unknown[]) => void,
	): boolean | LuaMultiReturn<[undefined, any]>;

	/**
	 * Remove a signal receiver on the D-Bus.
	 *
	 * @param interface A string with the interface name.
	 * @param func The function to call.
	 */
	export function disconnect_signal(
		interface: string,
		func: (...args: unknown[]) => void,
	): void;

	/**
	 * Emit a signal on the D-Bus.
	 *
	 * @param bus A string indicating if we are using system or session bus.
	 * @param path A string with the dbus path.
	 * @param interface A string with the dbus interface.
	 * @param method A string with the dbus method name.
	 * @param type_1st_arg Type of 1st argument
	 * @param value_1st_arg Value of 1st argument
	 * @param type_2nd_arg Type of 2nd argument
	 * @param value_2nd_arg Value of 2nd argument ... etc
	 */
	export function emit_signal(
		bus: string,
		path: string,
		interface: string,
		method: string,
		type_1st_arg: any,
		value_1st_arg: any,
		type_2nd_arg: any,
		value_2nd_arg: any,
	): void;
}
