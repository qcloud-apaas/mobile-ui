import { DataListAddon } from '../../pant-react/es/data-list';
import { filterable, FilterableOptions } from '../../pant-react/es/data-list/addons';
import { MuiCascader } from '../cascader';
import { MuiDatetimePicker, MuiDatetimeRange } from '../datetime-picker';
import { MuiSearchablePicker } from '../searchable-picker';

export * from '../../pant-react/es/data-list/addons/batch-actions';

export * from '../../pant-react/es/data-list/addons/pageable';

export * from '../../pant-react/es/data-list/addons/filterable';

export * from '../../pant-react/es/data-list/addons/record-actions';

export * from '../../pant-react/es/data-list/addons/selectable';

export * from '../../pant-react/es/data-list/addons/sortable';

export * from '../../pant-react/es/data-list/addons/toolbar';

export function filterable2(options: FilterableOptions): DataListAddon {
  const columns = options.columns.map((column) => {
    if (column.component) {
      return column;
    }
    let CustomComponent: any;
    const { type } = column;
    if (type === 'cascader') {
      CustomComponent = MuiCascader;
    } else if (type === 'datetime') {
      CustomComponent = MuiDatetimePicker;
    } else if (type === 'datetime-range') {
      CustomComponent = MuiDatetimeRange;
    } else if (type === 'searchable-picker') {
      CustomComponent = MuiSearchablePicker;
    }
    return { ...column, component: CustomComponent };
  });
  return filterable({ ...options, columns });
}
