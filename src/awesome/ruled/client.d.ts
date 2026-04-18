import type { NaughtyAction, NotificationProperties } from "naughty";

import type { AwesomeClient } from "~/awesome/client";
import type { AwesomeTag } from "~/awesome/tag";

interface RuledClientRuleRule {
	class?: string | string[];
	instance?: string | string[];
	name?: string | string[];
	role?: string | string[];
	type?: string[];
}

interface RuledClientProperties {
	append_actions: NaughtyAction[];
	floating: boolean;
	focus: (c: AwesomeClient) => AwesomeClient | undefined;
	maximized_vertical: boolean;
	maximized_horizontal: boolean;
	placement: {
		[placement in keyof AwfulPlacement]: AwfulPlacement[placement];
	};
	raise: boolean;
	switch_to_tags: boolean;
	tag: AwesomeTag | string;
	titlebars_enabled: boolean;
}

interface RuledClientRule {
	/**
	 * A table whose content will be used to set the target object properties.
	 */
	properties: Partial<NotificationProperties & RuledClientProperties>;

	/**
	 * A callback function to call before the {@link properties} have been
	 * applied.
	 */
	callback: (c: AwesomeClient) => void;

	/**
	 * A table whose content will be compared to the target object current
	 * properties.
	 */
	rule: RuledClientRuleRule;

	/**
	 * Similar to {@link rule}, but each entry is a table with multiple values.
	 */
	rule_any: RuledClientRuleRule;

	/**
	 * The negative equivalent of {@link rule}.
	 */
	except: RuledClientRuleRule;

	/**
	 * The negative equivalent of {@link rule_any}.
	 */
	except_any: RuledClientRuleRule;

	/**
	 * Matches when one of every "category" of components match.
	 */
	rule_every: RuledClientRuleRule;

	/**
	 * A table whose content will be compared to the target object current
	 * properties.
	 */
	rule_lesser: RuledClientRuleRule;

	/**
	 * A table whose content will be compared to the target object current
	 * properties.
	 */
	rule_greater: RuledClientRuleRule;

	/**
	 * An identifier for this rule.
	 *
	 * It can be anything. It will be compared with the `==` operator. Strings
	 * are highly recommended.
	 *
	 * Setting an id is useful to be able to remove the rule by using its id
	 * instead of a table reference. Modules can also listen to `rule::appended`
	 * and modify or disable a rule.
	 */
	id: table | string | number | ((...args: unknown[]) => any);
}

/**
 * @noSelf
 */
export interface RuledClient {
	/**
	 * Add a new rule to the default set.
	 *
	 * @param rule A valid rule.
	 */
	append_rule(rule: Partial<RuledClientRule>): void;

	/**
	 * Add a new rules to the default set.
	 *
	 * @param rules A table with rules.
	 */
	append_rules(rules: Partial<RuledClientRule>[]): void;

	/**
	 * Remove a new rule to the default set.
	 *
	 * @param rule A valid rule or a name passed in the `id` value when calling
	 * {@link append_rule}.
	 */
	remove_rule(rule: Partial<RuledClientRule> | string): void;

	/**
	 * Check if a client matches a rule.
	 *
	 * @param c The client.
	 * @param rule The rule to check.
	 *
	 * @returns True if it matches, false otherwise.
	 */
	match(c: AwesomeClient, rule: Partial<RuledClientRule>): boolean;

	/**
	 * Check if a client matches any part of a rule.
	 *
	 * @param c The client.
	 * @param rule The rule to check.
	 *
	 * @returns True if at least one rule is matched, false otherwise.
	 */
	match_any(c: AwesomeClient, rule: Partial<RuledClientRule>): boolean;

	/**
	 * Does a given rule entry match a client?
	 *
	 * @param c The client.
	 * @param entry Rule entry.
	 *
	 * @returns bool
	 */
	matches(c: AwesomeClient, entry: Partial<RuledClientRule>): boolean;

	/**
	 * Get list of matching rules for a client.
	 *
	 * @param c The client.
	 * @param rules The rules to check.
	 *
	 * @returns The list of matched rules.
	 */
	matching_rules(c: AwesomeClient, rules: Partial<RuledClientRule>[]): table;

	/**
	 * Check if a client matches a given set of rules.
	 *
	 * @param c The client.
	 * @param rules The rules to check.
	 *
	 * @returns True if at least one rule is matched, false otherwise.
	 */
	matches_list(c: AwesomeClient, rules: Partial<RuledClientRule>[]): boolean;

	/**
	 * Remove a source.
	 *
	 * @param name The source name.
	 *
	 * @returns If the source was removed.
	 */
	remove_rule_source(name: string): boolean;

	/**
	 * Apply `ruled.client.rules` to a client.
	 *
	 * @param c The client.
	 */
	apply(c: AwesomeClient): void;

	/**
	 * Add a new rule source. A rule source is a provider called when a client
	 * is managed (started). It allows to configure the client by providing
	 * properties that should be applied. By default, Awesome provides 2
	 * sources:
	 *
	 * - `awful.rules`: A declarative matcher
	 * - `awful.spawn`: Launch clients with pre-defined properties
	 *
	 * It is possible to register new callbacks to modify the properties table
	 * before it is applied. Each provider is executed sequentially and modifies
	 * the properties are applied on the client.
	 *
	 * It is important to note that properties themselves have their own
	 * dependencies. For example, a
	 * [tag](https://awesomewm.org/apidoc/core_components/tag.html#) property
	 * implies a
	 * [screen](https://awesomewm.org/apidoc/core_components/screen.html#).
	 * Therefor, if a
	 * [screen](https://awesomewm.org/apidoc/core_components/screen.html#) is
	 * already specified, then it will be ignored when the rule is executed.
	 * Properties also have their own priorities. For example, the `titlebar`
	 * and `border_width` need to be applied before the `x` and `y` positions
	 * are set. Otherwise, it will be off or the client will shift upward
	 * everytime Awesome is restarted. A rule sourcecannotchange this. It is up
	 * to the callback to be aware of the dependencies and avoid to introduce
	 * issues. For example, if the source wants to set a
	 * [screen](https://awesomewm.org/apidoc/core_components/screen.html#), it
	 * has to check if the
	 * [tag](https://awesomewm.org/apidoc/core_components/tag.html#) , `tags` or
	 * `new_tag` are on that
	 * [screen](https://awesomewm.org/apidoc/core_components/screen.html#) or
	 * remove those properties. Otherwise, they will be ignored once the rule is
	 * applied.
	 *
	 * @param name The provider name. It must be unique.
	 * @param callback The callback that is called to produce properties.
	 * @param depends_on A list of names of sources this source depends on
	 * (sources that must be executed before name.
	 * @param precede A list of names of sources this source have a priority over.
	 *
	 * @returns Returns false if a dependency conflict was found.
	 */
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
			properties: Partial<RuledClientRule>,

			/**
			 * A table of all callbacks scheduled to be executed after the main
			 * properties are applied.
			 */
			callbacks: any[],
		) => void,
		depends_on?: table,
		precede?: table,
	): boolean;

	/**
	 * Apply properties and callbacks to a client.
	 *
	 * @param c The client.
	 * @param props Properties to apply.
	 * @param callbacks Callbacks to apply.
	 */
	execute(
		c: AwesomeClient,
		props: Partial<RuledClientRule>,
		callbacks?: table,
	): void;

	// what the FUCK is this?
	connect_signal(name: "request::rules", callback: () => void): void;
}
