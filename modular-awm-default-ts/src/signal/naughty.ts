import * as awful from "awful";
import * as naughty from "naughty";
import * as ruled from "ruled";

import notification from "~/ui/notification";

/// Notifications
ruled.notification.connect_signal("request::rules", () => {
	// All notifications will match this rule.
	ruled.notification.append_rule({
		rule: undefined,
		properties: {
			screen: awful.screen.preferred,
			implicit_timeout: 5,
		},
	});
});

// Defines the default notification layout.
naughty.connect_signal("request::display", (n) => {
	notification(n);
});
