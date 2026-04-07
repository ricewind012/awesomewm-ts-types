/**
  * Apply properties to a new `naughty.notification` based on pre-determined rules.
  */
declare module 'notification' {
  /**
    * Remove a source.
    * @param name The source name.
    * @returns boolean - If the source was removed.
    */
 export function remove_rule_source(
    name: string,
  ): boolean;
  /**
    * Apply the tag rules to a client.
    *
    *  This is useful when it is necessary to apply rules after a tag has been
    *  created. Many workflows can make use of "blank" tags which wont match any
    *  rules until later.
    *
    * @param n The notification.
    */
 export function apply(
    n: naughty.notification,
  ): void;
  /**
    * Add a new rule to the default set.
    * @param rule A valid rule.
    */
 export function append_rule(
    rule: table,
  ): void;
  /**
    * Add a new rules to the default set.
    * @param rule A table with rules.
    */
 export function append_rules(
    rule: table,
  ): void;
  /**
    * Remove a new rule to the default set.
    * @param rule A valid rule.
    * @returns boolean - `true` if the rule was removed.
    */
 export function remove_rule(
    rule: table,
  ): boolean;
  /**
    * Add a new rule source.
    *
    *  A rule source is a provider called when a client initially request tags. It
    *  allows to configure, select or create a tag (or many) to be attached to the
    *  client.
    *
    * @param name The provider name. It must be unique.
    * @param c The client
    * @param properties The current properties. The callback should
    *   add to and overwrite properties in this table
    * @param callbacks A table of all callbacks scheduled to be
    *   executed after the main properties are applied.
    * @param depends_on A list of names of sources this source depends on
    *   (sources that must be executed *before* `name`.
    * @param precede A list of names of sources this source have a
    *   priority over.
    * @returns boolean - Returns false if a dependency conflict was found.
    */
 export function add_rule_source(
    name: string,
    c: client,
    properties: table,
    callbacks: table,
    depends_on: table,
    precede: table,
  ): boolean;
  /**
    * The notification is attached to a client with this class.
    * @param string
    */
  string(
    string,
  ): void;
  /**
    * The notification is attached to a client with this instance name.
    * @param string
    */
  string(
    string,
  ): void;
  /**
    * Append some actions to a notification.
    *
    *  Using `actions` directly is destructive since it will override existing
    *  actions.
    *
    * @param table
    */
  table(
    table,
  ): void;
  /**
    * Set a fallback timeout when the notification doesn't have an explicit timeout.
    *
    *  The value is in seconds. If none is specified, the default is 5 seconds. If
    *  the notification specifies its own timeout, this property will be skipped.
    *
    * @param number
    */
  number(
    number,
  ): void;
}
