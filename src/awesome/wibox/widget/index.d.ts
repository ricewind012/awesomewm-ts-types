/// <reference types="./base.d.ts" />
/// <reference types="./calendar.d.ts" />
/// <reference types="./checkbox.d.ts" />
/// <reference types="./graph.d.ts" />
/// <reference types="./imagebox.d.ts" />
/// <reference types="./piechart.d.ts" />
/// <reference types="./progressbar.d.ts" />
/// <reference types="./separator.d.ts" />
/// <reference types="./slider.d.ts" />
/// <reference types="./systray.d.ts" />
/// <reference types="./textbox.d.ts" />
/// <reference types="./textclock.d.ts" />

interface WiboxWidget {
	(widget: BaseWidget): BaseWidget;
	base: WiboxWidgetBase;
	calendar: WiboxWidgetCalendarConstructor;
	checkbox: WiboxWidgetCheckboxConstructor;
	graph: WiboxWidgetGraphConstructor;
	imagebox: WiboxWidgetImageBoxConstructor;
	piechart: WiboxWidgetPieChartConstructor;
	progressbar: WiboxWidgetProgressBarConstructor;
	separator: WiboxWidgetSeparatorConstructor;
	slider: WiboxWidgetSliderConstructor;
	systray: WiboxWidgetSystemTrayConstructor;
	textbox: WiboxWidgetTextBoxConstructor;
	textclock: WiboxWidgetTextClockConstructor;
}
