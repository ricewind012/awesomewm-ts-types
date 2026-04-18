import type { AwesomeClient } from "~/awesome/client";

type EasyAsyncCallback = (
	/**
	 * Output on stdout.
	 */
	stdout: string,

	/**
	 * Output on stderr.
	 */
	stderr: string,

	/**
	 * Exit reason.
	 */
	exitreason: ExitReason,

	/**
	 * Exit code (exit code or signal number, depending on
	 * `exitreason`).
	 */
	exitcode: number,
) => void;

type ExitReason = "exit" | "signal";

/**
 * Spawn sub-processes and optionally get their output.
 *
 * This module provides methods to start programs and supports startup
 * notifications, which allows for callbacks and applying properties to the
 * program after it has been launched. This requires currently that the
 * application supports them.
 *
 * @noSelf
 */
export interface AwfulSpawn {
	/**
	 * Spawn a program, and optionally apply properties and/or run a callback.
	 *
	 * @param cmd The command.
	 * @param sn_rules A table of properties to be applied after startup;
	 * `false` to disable startup notifications.
	 * @param callback A callback function to be run after startup.
	 *
	 * @returns a [the forked PID, the startup notification ID, if `sn` is not
	 * false, or a `callback` is provided] tuple or error message.
	 */
	(
		// https://github.com/TypeScriptToLua/TypeScriptToLua/issues/1661
		this: void,
		cmd: string | table,
		// TODO see in https://awesomewm.org/apidoc/core_components/client.html#placement
		sn_rules?: table | boolean,
		callback?: () => void,
	): LuaMultiReturn<[number, string]> | string;

	/**
	 * Spawn a program using the shell. This calls `cmd` with `$SHELL -c` (via
	 * {@link awful.util.shell}).
	 *
	 * @param cmd The command.
	 *
	 * @returns a [the forked PID, the startup notification ID, if `sn` is not
	 * false, or a `callback` is provided] tuple or error message.
	 */
	with_shell(cmd: string): LuaMultiReturn<[number, string]> | string;

	/**
	 * Spawn a program and asynchronously capture its output line by line.
	 *
	 * @param cmd The command.
	 * @param callbacks Table containing callbacks that should be invoked on various conditions.
	 *
	 * @returns the PID of the forked process or error message.
	 */
	with_line_callback(
		cmd: string | table,
		callbacks: {
			/**
			 * Function that is called with each line of output on stderr, e.g.
			 * `stdout(line)`.
			 */
			stdout?: (line: string) => void;

			/**
			 * Function that is called with each line of output on stderr, e.g.
			 * `stderr(line)`.
			 */
			stderr?: (line: string) => void;

			/**
			 * Function to call when no more output is produced.
			 */
			output_done?: () => void;

			/**
			 * Function to call when the spawned process exits. For "exit", the
			 * second argument is the exit code. For "signal", the second
			 * argument is the signal causing process termination.
			 */
			exit?: (exitreason: ExitReason, exitcode: number) => void;
		},
	): number | string;

	/**
	 * Asynchronously spawn a program and capture its output
	 *  (wraps {@link with_line_callback}).
	 *
	 * @param cmd The command.
	 * @param callback
	 *
	 * @returns the PID of the forked process or error message.
	 */
	easy_async(cmd: string, callback: EasyAsyncCallback): number | string;

	/**
	 * Call {@link easy_async} with a shell. This calls `cmd` with `$SHELL -c`
	 * (via {@link awful.util.shell}).
	 *
	 * @param cmd The command.
	 * @param callback
	 *
	 * @returns the PID of the forked process or error message.
	 */
	easy_async_with_shell(
		cmd: string,
		callback: EasyAsyncCallback,
	): number | string;

	/**
	 * Read lines from a Gio input stream
	 *
	 * @param input_stream The input stream to read from.
	 * @param line_callback Function that is called with each line read, e.g.
	 * `line_callback(line_from_stream)`.
	 * @param done_callback Function that is called when the operation finishes
	 * (e.g. due to end of file).
	 * @param close Should the stream be closed after end-of-file?
	 */
	read_lines(
		input_stream: Gio.InputStream,
		line_callback: (line: string) => void,
		done_callback?: () => void,
		close?: boolean,
	): void;

	/**
	 * Spawn a command if it has not been spawned before.
	 *
	 * This function tries its best to preserve the state across
	 * {@link awesome.restart}.
	 *
	 * By default, when no `unique_id` is specified, this function will generate
	 * one by hashing the command and its rules. If you have multiple instance
	 * of the same command and rules, you need to specify an UID or only the
	 * first one will be executed.
	 *
	 * The [rules](https://awesomewm.org/apidoc/libraries/awful.rules.html) are
	 * standard
	 * [ruled.client](https://awesomewm.org/apidoc/declarative_rules/ruled.client.html#).
	 *
	 * This function depends on the startup notification protocol to be
	 * correctly implemented by the command. See
	 * [client.startup_id](https://awesomewm.org/apidoc/core_components/client.html#startup_id)
	 * for more information. Note that this also won't work with shell or
	 * terminal commands.
	 *
	 * @param cmd The command.
	 * @param rules The properties that need to be applied to the client.
	 * @param matcher A matching function to find the instance among running
	 * clients.
	 * @param unique_id A string to identify the client so it isn't executed
	 * multiple time.
	 * @param callback A callback function when the client is created.
	 */
	once(
		cmd: string | table,
		rules?: table,
		matcher?: (...args: unknown[]) => void,
		unique_id?: string,
		callback?: (...args: unknown[]) => void,
	): void;

	/**
	 * Spawn a command if an instance is not already running.
	 *
	 * This is like {@link once}, but will spawn new instances if the
	 * previous has finished.
	 *
	 * The [rules](https://awesomewm.org/apidoc/libraries/awful.rules.html) are
	 * standard
	 * [ruled.client](https://awesomewm.org/apidoc/declarative_rules/ruled.client.html#).
	 *
	 * This function depends on the startup notification protocol to be
	 * correctly implemented by the command. See
	 * [client.startup_id](https://awesomewm.org/apidoc/core_components/client.html#startup_id)
	 * for more information. Note that this also won't work with shell or
	 * terminal commands.
	 *
	 * Note that multiple instances can still be spawned if the command is
	 * called faster than the client has time to start.
	 *
	 * @param cmd The command.
	 * @param rules The properties that need to be applied to the client.
	 * @param matcher A matching function to find the instance among running
	 * clients.
	 * @param unique_id A string to identify the client so it isn't executed
	 * multiple time.
	 * @param callback A callback function when the client is created.
	 */
	single_instance(
		cmd: string | table,
		rules?: table,
		matcher?: (...args: unknown[]) => void,
		unique_id?: string,
		callback?: (...args: unknown[]) => void,
	): void;

	/**
	 * Raise a client if it exists or spawn a new one then raise it.
	 *
	 * This function depends on the startup notification protocol to be
	 * correctly implemented by the command. See
	 * [client.startup_id](https://awesomewm.org/apidoc/core_components/client.html#startup_id)
	 * for more information. Note that this also won't work with shell or
	 * terminal commands.
	 *
	 * @param cmd The command.
	 * @param rules The properties that need to be applied to the client.
	 * @param matcher A matching function to find the instance among running
	 * clients.
	 * @param unique_id A string to identify the client so it isn't executed
	 * multiple time.
	 * @param callback A callback function when the client is created.
	 *
	 * @returns The client if it already exists.
	 */
	raise_or_spawn(
		cmd: string | table,
		rules?: table,
		matcher?: (...args: unknown[]) => void,
		unique_id?: string,
		callback?: (...args: unknown[]) => void,
	): AwesomeClient | undefined;
}
