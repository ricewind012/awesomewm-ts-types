import { user } from "../config/user";

interface ClientModifiers {
	alt: ButtonModifier;
	super: ButtonModifier;
	shift: ButtonModifier;
	ctrl: ButtonModifier;
	modkey: ButtonModifier;
}

export const mod: ClientModifiers = {
	alt: "Mod1",
	super: "Mod4",
	shift: "Shift",
	ctrl: "Control",

	// Set Super as default modkey if none is present.
	modkey: user.mod || "Mod4",
};
