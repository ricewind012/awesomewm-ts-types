# AwesomeWM TypeScript type definitions

everything is copy pasted from awesomewm docs (genius)

## Example

As an example, [modularized example rc.lua](https://github.com/sewergweller/modular-awm-default) is included in [this](./modular-awm-default-ts) directory. The differences are:

- No deprecated APIs usage;
- Adapted to TS(TL) so it compiles without warnings/errors;
- Some modules, like `beautiful`, are unable to be extended from an interface, so instead of `beautiful.wallpaper`, `beautiful.get().wallpaper` is used.
