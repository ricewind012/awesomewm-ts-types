/// <reference types="./base.d.ts" />

declare enum GridLayoutOrientation {
	/**
	 * The grid can be extended horizontally. The current column is filled
	 * first; if no empty cell is found up to `forced_num_rows`, the next column
	 * is filled, creating it if it does not exist.
	 */
	HORIZONTAL = "horizontal",

	/**
	 * The grid can be extended vertically. The current row is filled first; if
	 * no empty cell is found up to `forced_num_cols`, the next row is filled,
	 * creating it if it does not exist.
	 */
	VERTICAL = "vertical",
}

interface GridLayoutBorderOption {
	inner: number;
	outer: number;
}

interface GridLayoutOrientationOption {
	horizontal: number;
	vertical: number;
}

interface AddGridBorderArgs {
	/**
	 * The border color. If `nil` is passed, then the `border_color.outer` will
	 * be user for index 1 and row_count + 1, otherwise, `border_color.inner`
	 * will be used.
	 */
	color?: cairo_solid_pattern;

	/**
	 * The dash pattern used for the line. By default, it is a solid line.
	 */
	dashes?: table;

	/**
	 * If the line has dashes, then this is the initial offset. Note that line
	 * are draw left to right and top to bottom.
	 */
	dash_offset?: number;

	/**
	 * How the dashes ends are drawn.
	 */
	caps?: "butt" | "round" | "square";
}

interface WiboxLayoutGridWidget
	extends Omit<WiboxLayoutBaseWidget, "remove_widgets"> {
	/**
	 * Find the next available cell to insert a widget. The grid is browsed
	 * according to the
	 * [orientation](https://awesomewm.org/apidoc/widget_layouts/wibox.layout.grid.html#orientation).
	 *
	 * @param hint_row The row coordinate of the last occupied cell.
	 * @param hint_column The column coordinate of the last occupied cell.
	 *
	 * @returns The row, column coordinate of the next empty cell
	 */
	get_next_empty(
		hint_row?: number,
		hint_column?: number,
	): LuaMultiReturn<[number, number]>;

	/**
	 * Remove widgets at the coordinates.
	 *
	 * @param row The row coordinate of the widget to remove
	 * @param col The column coordinate of the widget to remove
	 * @param row_span The number of rows the area to remove spans.
	 * @param col_span The number of columns the area to remove spans.
	 *
	 * @returns If the operation is successful (widgets found)
	 */
	remove_widgets_at(
		row: number,
		col: number,
		row_span?: number,
		col_span?: number,
	): boolean;

	/**
	 * Return the coordinates of the widget.
	 *
	 * @param widget The widget
	 *
	 * @returns The position table of the coordinates in the grid.
	 */
	get_widget_position(widget: BaseWidget): {
		row: number;
		col: number;
		row_span: number;
		col_span: number;
	};

	/**
	 * Return the widgets at the coordinates.
	 *
	 * @param row The row coordinate of the widget
	 * @param col The column coordinate of the widget
	 * @param row_span The number of rows to span.
	 * @param col_span The number of columns to span.
	 *
	 * @returns The widget(s) found at the specific coordinates, `nil` if no
	 * widgets found
	 */
	get_widgets_at(
		row: number,
		col: number,
		row_span?: number,
		col_span?: number,
	): any[] | undefined;

	/**
	 * Insert column at index.
	 *
	 * @param index Insert the new column at index. If `nil`, the column is
	 * added at the end.
	 *
	 * @returns The index of the inserted column
	 */
	insert_column(index: number | undefined): number;

	/**
	 * Extend column at index.
	 *
	 * @param index Extend the column at index. If `nil`, the last column is
	 * extended.
	 *
	 * @returns The index of the extended column
	 */
	extend_column(index: number): number;

	/**
	 * Remove column at index.
	 *
	 * @param index Remove column at index. If `nil`, the last column is removed.
	 *
	 * @returns The index of the removed column
	 */
	remove_column(index: number): number;

	/**
	 * Insert row at index. See {@link insert_column}.
	 *
	 * @param index Insert the new row at index. If `nil`, the row is added at
	 * the end.
	 *
	 * @returns The index of the inserted row
	 */
	insert_row(index: number): number;

	/**
	 * Extend row at index. See {@link extend_column}.
	 *
	 * @param index Extend the row at index. If `nil`, the last row is extended.
	 *
	 * @returns The index of the extended row
	 */
	extend_row(index: number): number;

	/**
	 * Remove row at index. See {@link remove_column}.
	 *
	 * @param index Remove row at index. If `nil`, the last row is removed.
	 *
	 * @returns The index of the removed row
	 */
	remove_row(index: number): number;

	/**
	 * Add row border.
	 *
	 * This method allows to set the width/color or a specific row rather than
	 * use the same values for all the rows.
	 *
	 * @param index The row index. 1 is the top border (outer) border.
	 * @param height The border height. If `nil` is passed, then the
	 * `border_width.outer` will be user for index 1 and `row_count + 1`,
	 * otherwise, `border_width.inner` will be used.
	 * @param args
	 */
	add_row_border(
		index: number,
		height?: number,
		args?: AddGridBorderArgs,
	): void;

	/**
	 * Add column border. This method allows to set the width/color or a
	 * specific column rather than use the same values for all the columns.
	 *
	 * @param index The column index. 1 is the top border (outer) border.
	 * @param height The border height. If nil is passed, then the `border_width.outer` will be user for index 1 and `column_count + 1`, otherwise, `border_width.inner` will be used.
	 * @param args
	 */
	add_column_border(
		index: number,
		height?: number,
		args?: AddGridBorderArgs,
	): void;

	/**
	 * Get the number of rows and columns occupied by the widgets in the grid.
	 *
	 * @deprecated Use {@link column_count}/{@link row_count}
	 *
	 * @returns The number of rows and columns.
	 */
	get_dimension(): LuaMultiReturn<[number, number]>;

	/**
	 * Add a widget to the grid layout at specific coordinate.
	 *
	 * @deprecated Use {@link add}
	 *
	 * @param child Widget that should be added
	 * @param row Row number for the top left corner of the widget
	 * @param col Column number for the top left corner of the widget
	 * @param row_span The number of rows the widget spans.
	 * @param col_span The number of columns the widget spans.
	 *
	 * @returns If the operation is successful
	 */
	add_widget_at(
		child: BaseWidget,
		row: number,
		col: number,
		row_span?: number,
		col_span?: number,
	): boolean;

	/**
	 * Set the preferred orientation of the grid layout.
	 *
	 * When calling {@link get_next_empty}, empty cells are browsed differently.
	 */
	orientation: GridLayoutOrientation;

	/**
	 * Allow to superpose widgets in the same cell. If false, check before
	 * adding a new widget if it will superpose with another widget and prevent
	 * from adding it.
	 */
	superpose: boolean;

	/**
	 * Set the minimum size for the columns.
	 */
	minimum_column_width: number;

	/**
	 * Set the minimum size for the rows.
	 */
	minimum_row_height: number;

	/**
	 * The spacing between rows and columns.
	 *
	 * Get the value {@link horizontal_spacing} or {@link vertical_spacing}
	 * defined by the preferred orientation.
	 */
	spacing: number | GridLayoutOrientationOption;

	/**
	 * Controls if the columns/rows are expanded to use all the available space.
	 */
	expand: boolean | GridLayoutOrientationOption;

	/**
	 * Controls if the columns/rows all have the same size or if the size
	 * depends on the content. Set both {@link horizontal_homogeneous} and
	 * {@link vertical_homogeneous} to the same value. Get the value
	 * {@link horizontal_homogeneous} or {@link vertical_homogeneous} defined by
	 * the preferred orientation.
	 */
	homogeneous: boolean | GridLayoutOrientationOption;

	/**
	 * The number of rows.
	 *
	 * Unless manually set, the value will be automatically determined base on
	 * the {@link orientation}.
	 */
	row_count: number;

	/**
	 * The number of columns.
	 *
	 * Unless manually set, the value will be automatically determined base on
	 * the {@link orientation}.
	 */
	column_count: number;

	/**
	 * The border width.
	 */
	border_width: number | GridLayoutBorderOption;

	/**
	 * The border color for the table outer border.
	 */
	border_color: cairo_solid_pattern | GridLayoutBorderOption;

	/**
	 * Force the number of rows of the layout.
	 *
	 * @deprecated Use {@link row_count}
	 */
	forced_num_rows: number | undefined;

	/**
	 * Force the number of columns of the layout.
	 *
	 * @deprecated Use {@link column_count}
	 */
	forced_num_cols: number | undefined;

	/**
	 * Set the minimum size for the columns.
	 *
	 * @deprecated Use {@link minimum_column_width}
	 */
	min_cols_size: number;

	/**
	 * Set the minimum size for the rows.
	 *
	 * @deprecated Use {@link minimum_row_height}
	 */
	min_rows_size: number;

	/**
	 * The spacing between columns.
	 *
	 * @deprecated Use {@link spacing}
	 */
	horizontal_spacing: number;

	/**
	 * The spacing between rows.
	 *
	 * @deprecated Use {@link spacing}
	 */
	vertical_spacing: number;

	/**
	 * Controls if the columns are expanded to use all the available width.
	 *
	 * @deprecated Use {@link expand}
	 */
	horizontal_expand: boolean;

	/**
	 * Controls if the rows are expanded to use all the available height.
	 *
	 * @deprecated Use {@link expand}
	 */
	vertical_expand: boolean;

	/**
	 * Controls if the columns all have the same width or if the width of each
	 * column depends on the content.
	 *
	 * @deprecated Use {@link homogeneous}
	 */
	horizontal_homogeneous: boolean;

	/**
	 * Controls if the rows all have the same height or if the height of each
	 * row depends on the content.
	 *
	 * @deprecated Use {@link homogeneous}
	 */
	vertical_homogeneous: boolean;
}

/**
 * @noSelf
 */
interface WiboxLayoutGrid {
	/**
	 * Return a new grid layout.
	 *
	 * A grid layout sets widgets in a grids of custom number of rows and
	 * columns.
	 */
	(orientation?: "x" | "y"): WiboxLayoutGridWidget;

	/**
	 * Returns a new horizontal grid layout.
	 */
	horizontal(
		left?: BaseWidget,
		middle?: BaseWidget,
		right?: BaseWidget,
	): WiboxLayoutGridWidget;

	/**
	 * Returns a new vertical grid layout.
	 */
	vertical(
		top?: BaseWidget,
		center?: BaseWidget,
		bottom?: BaseWidget,
	): WiboxLayoutGridWidget;
}
