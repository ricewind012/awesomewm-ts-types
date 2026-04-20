import titlebar from "../ui/titlebar";

// Add a titlebar if titlebars_enabled is set to true for the client in `config/rules.ts`.
client.connect_signal("request::titlebars", (c) => {
	// While this isn't actually in the example configuration, it's the most sane thing to do.
	// If a client expressly says not to draw titlebars on it, just don't.
	if (c.requests_no_titlebar) return;

	titlebar(c);
});

// Enable sloppy focus, so that focus follows mouse.
client.connect_signal("mouse::enter", (c) => {
	c.activate({
		context: "mouse_enter",
		raise: false,
	});
});
