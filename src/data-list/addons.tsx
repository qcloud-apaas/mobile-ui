import { DataListAddon } from '../../pant-react/es/data-list';
import {
  batchActions,
  BatchActionsOptions,
  pageable,
  PageableOptions,
  filterable,
  FilterableOptions,
  recordActions,
  RecordActionsOptions,
  selectable,
  SelectableOptions,
  sortable,
  SortableOptions,
} from '../../pant-react/es/data-list/addons';
import { MuiCascader } from '../cascader';
import { MuiDatetimePicker, MuiDatetimeRange } from '../datetime-picker';
import { MuiSearchablePicker } from '../searchable-picker';
import checkedBatchIcon from '../assets/checked-batch.svg';
import uncheckedBatchIcon from '../assets/unchecked-batch.svg';
import sortIcon from '../assets/sort.svg';
import sortNoOrderIcon from '../assets/sort-no-order.svg';
import sortAscIcon from '../assets/sort-asc.svg';
import sortDescIcon from '../assets/sort-desc.svg';
import filterIcon from '../assets/filter.svg';
import moreIcon from '../assets/more.svg';

export * from '../../pant-react/es/data-list/addons/batch-actions';

export * from '../../pant-react/es/data-list/addons/pageable';

export * from '../../pant-react/es/data-list/addons/filterable';

export * from '../../pant-react/es/data-list/addons/record-actions';

export * from '../../pant-react/es/data-list/addons/selectable';

export * from '../../pant-react/es/data-list/addons/sortable';

export * from '../../pant-react/es/data-list/addons/toolbar';

export function pageable2(options: PageableOptions = {}): DataListAddon {
  return pageable({ prevPageText: '上一页', nextPageText: '下一页', ...options });
}

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
  const filterButton = <img src={filterIcon} style={{ width: '16px', height: '16px' }} />;
  return filterable({
    filterTitle: '筛选',
    cancelButtonText: '取消',
    confirmButtonText: '确定',
    filterButton,
    ...options,
    columns,
  });
}

export function batchActions2(options: BatchActionsOptions): DataListAddon {
  return batchActions({ ...options });
}

export function recordActions2(options: RecordActionsOptions): DataListAddon {
  const actionIcon = <img src={moreIcon} style={{ width: '16px', height: '16px' }} />;
  return recordActions({ actionIcon, ...options });
}

export function selectable2(options: SelectableOptions): DataListAddon {
  const checkedIcon = <img src={checkedBatchIcon} style={{ width: '16px', height: '16px' }} />;
  const uncheckedIcon = <img src={uncheckedBatchIcon} style={{ width: '16px', height: '16px' }} />;
  return selectable({ checkedIcon, uncheckedIcon, ...options });
}

export function sortable2(options: SortableOptions): DataListAddon {
  const sortButton = <img src={sortIcon} style={{ width: '16px', height: '16px' }} />;
  const sortIconIcon = <img src={sortNoOrderIcon} style={{ width: '16px', height: '16px' }} />;
  const sortAscIconIcon = <img src={sortAscIcon} style={{ width: '16px', height: '16px' }} />;
  const sortDescIconIcon = <img src={sortDescIcon} style={{ width: '16px', height: '16px' }} />;
  return sortable({
    cancelButtonText: '取消',
    confirmButtonText: '确定',
    sortButton,
    sortIcon: sortIconIcon,
    ascIcon: sortAscIconIcon,
    descIcon: sortDescIconIcon,
    ...options,
  });
}