type AwesomeWidgetBase = any;
type AwesomeWidgetBaseProps<T> = T;

export function make_widget<T extends AwesomeWidgetBase>(
	this: void,
	widget: T,
	props: AwesomeWidgetBaseProps<T>,
	...children: T[]
) {
	return [widget, props, children];
}
