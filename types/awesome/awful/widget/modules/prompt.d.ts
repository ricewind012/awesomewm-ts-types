/**
  * The widget version of `awful.prompt`.
  */
declare module 'prompt' {
  /**
    * Create a prompt widget which will launch a command.
    *  For additional documentation about `args` parameter, please refer to
    *  @{awful.prompt} and @{awful.prompt.run}.
    *
    * @param prompt Prompt text.
    * @param bg
    *    Prompt background color.
    * @param fg
    *    Prompt foreground color.
    * @param fg_cursor
    * @param bg_cursor
    * @param ul_cursor
    * @param font
    * @param autoexec
    * @param highlighter A function to add syntax highlighting
    *    to the command.
    * @param exe_callback The callback function to call with
    *    command as argument when finished.
    * @param with_shell Use a (terminal) shell to execute this.
    * @param completion_callback
    *    The callback function to call to get completion. See @{awful.prompt.run}
    *    for details.
    * @param history_path File path where the history should be saved.
    * @param history_max Set the maximum entries in
    *    history file.
    * @param done_callback
    *    The callback function to always call without arguments, regardless of
    *    whether the prompt was cancelled. See @{awful.prompt.run} for details.
    * @param changed_callback The callback function to call
    *    with command as argument when a command was changed.
    * @param keypressed_callback The callback function to call
    *    with mod table, key and command as arguments when a key was pressed.
    * @param keyreleased_callback The callback function to call
    *    with mod table, key and command as arguments when a key was pressed.
    * @param hooks Similar to @{awful.key}. It will call a function
    *    for the matching modifiers + key. See @{awful.prompt.run} for details.
    * @returns An instance of prompt widget, inherits from
   `wibox.container.background`.
    */
  widgetprompt.new(
    prompt: string,
    bg: color,
    fg: color,
    fg_cursor: gears.color,
    bg_cursor: gears.color,
    ul_cursor?: gears.color,
    font: string,
    autoexec?: boolean,
    highlighter?: function,
    exe_callback?: function,
    with_shell: boolean,
    completion_callback: function,
    history_path: string,
    history_max: integer,
    done_callback?: function,
    changed_callback?: function,
    keypressed_callback?: function,
    keyreleased_callback?: function,
    hooks?: table,
  ): ;
  /**
    * The prompt foreground color.
    * @param color
    */
  color(
    color,
  ): void;
  /**
    * Always spawn using a shell.
    *
    *  When using the default `exe_callback`, use `awful.spawn.with_shell` instead
    *  of `awful.spawn`. Depending on the amount of customization to your shell
    *  environment, this can increase startup time.
    * @param with_shell
    */
  with_shell(
    with_shell: boolean,
  ): void;
}
