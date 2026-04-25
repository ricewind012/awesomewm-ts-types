import * as awful from "awful";
import * as ruled from "ruled";

/// Rules.
// Rules to apply to new clients.
ruled.client.connect_signal("request::rules", () => {
	// All clients will match this rule.
	ruled.client.append_rule({
		id: "global",
		properties: {
			focus: awful.client.focus.filter,
			// @ts-expect-error: TODO(ts)
			placement: awful.placement.no_overlap + awful.placement.no_offscreen,
			raise: true,
			screen: awful.screen.preferred,
		},
		rule: {},
	});

	// Floating clients.
	ruled.client.append_rule({
		id: "floating",
		properties: {
			floating: true,
		},
		rule_any: {
			class: [
				"Arandr",
				"Blueman-manager",
				"Gpick",
				"Kruler",
				"Sxiv",
				"Tor Browser",
				"Wpa_gui",
				"veromix",
				"xtightvncviewer",
			],
			instance: ["copyq", "pinentry"],
			// Note that the name property shown in xprop might be set slightly after creation of the client
			// and the name shown there might not match defined rules here.
			name: ["EventTester"],
			role: [
				"AlarmWindow", // Thunderbird's calendar.
				"ConfigManager", // Thunderbird's about:config.
				"pop-up", // e.g. Google Chrome's (detached) Developer Tools.
			],
		},
	});

	// Add titlebars to normal clients and dialogs.
	ruled.client.append_rule({
		id: "titlebars",
		properties: {
			titlebars_enabled: true,
		},
		rule_any: {
			type: ["normal", "dialog"],
		},
	});

	// Set Firefox to always map on the tag named '2' on screen 1.
	ruled.client.append_rule({
		properties: {
			screen: 1,
			tag: "2",
		},
		rule: {
			class: ["Firefox"],
		},
	});
});
