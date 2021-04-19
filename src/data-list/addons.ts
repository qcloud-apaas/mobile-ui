import { DataListAddon } from '../../pant-react/es/data-list';
import { filterable, FilterableOptions } from '../../pant-react/es/data-list/addons/filterable';
import { UICascader } from '../cascader';
import { UIDatetimePicker, UIDatetimeRange } from '../datetime-picker';
import { UISearchablePicker } from '../searchable-picker';

export * from '../../pant-react/es/data-list/addons/batch-actions';

export * from '../../pant-react/es/data-list/addons/pageable';

export * from '../../pant-react/es/data-list/addons/filterable';

export * from '../../pant-react/es/data-list/addons/record-actions';

export * from '../../pant-react/es/data-list/addons/selectable';

export * from '../../pant-react/es/data-list/addons/sortable';

export * from '../../pant-react/es/data-list/addons/toolbar';

export function filterable2(options: FilterableOptions): DataListAddon {
  options.columns = options.columns.map((column) => {
    if (column.component) {
      return column;
    }
    let CustomComponent: any;
    const { type } = column;
    if (type === 'cascader') {
      CustomComponent = UICascader;
    } else if (type === 'datetime') {
      CustomComponent = UIDatetimePicker;
    } else if (type === 'datetime-range') {
      CustomComponent = UIDatetimeRange;
    } else if (type === 'searchable-picker') {
      CustomComponent = UISearchablePicker;
    }
    return { ...column, component: CustomComponent };
  });
  return filterable(options);
}
