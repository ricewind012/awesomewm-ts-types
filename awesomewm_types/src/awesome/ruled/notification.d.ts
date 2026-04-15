/**
 * @noSelf
 */
interface RuledNotification {
	/**
	 * Remove a source.
	 *
	 * @param name The source name.
	 *
	 * @returns If the source was removed.
	 */
	remove_rule_source(name: string): boolean;

	/**
	 * Apply the tag rules to a client. This is useful when it is necessary to
	 * apply rules after a tag has been created. Many workflows can make use of
	 * "blank" tags which wont match any rules until later.
	 *
	 * @param n The notification.
	 */
	apply(n: NaughtyNotification): void;

	/**
	 * Add a new rule to the default set.
	 *
	 * @param rule A valid rule.
	 */
	append_rule(rule: table): void;

	/**
	 * Add a new rules to the default set.
	 *
	 * @param rule A table with rules.
	 */
	append_rules(rule: table): void;

	/**
	 * Remove a new rule to the default set.
	 *
	 * @param rule A valid rule.
	 *
	 * @returns true if the rule was removed.
	 */
	remove_rule(rule: table): boolean;

	/**
	 * Add a new rule source.
	 *
	 * A rule source is a provider called when a client initially request tags.
	 * It allows to configure, select or create a tag (or many) to be attached
	 * to the client.
	 *
	 * @param name The provider name. It must be unique.
	 * @param callback The callback that is called to produce properties.
	 * @param depends_on A list of names of sources this source depends on
	 * (sources that must be executed before `name`.
	 * @param precede A list of names of sources this source have a priority over.
	 *
	 * @returns Returns false if a dependency conflict was found.
	 */
	notifications: {
		add_rule_source(
			name: string,
			callback: (
				/**
				 * The client
				 */
				c: AwesomeClient,

				/**
				 * The current properties. The callback should add to and overwrite
				 * properties in this table
				 */
				properties: RuledClientRule,

				/**
				 * A table of all callbacks scheduled to be executed after the main
				 * properties are applied.
				 */
				callbacks: any[],
			) => void,
			depends_on?: table,
			precede?: table,
		): boolean;
	};
}
