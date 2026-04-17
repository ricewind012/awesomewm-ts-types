/** @noSelf */
export default function make_widget<T extends BaseWidget>(
	type: T | string,
	props?: object,
	...children: BaseWidget[]
) {
	print(`Got widget ${type} with props ${props} and children ${children}`);

	return null;
}
