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
  toolbar,
  ToolbarOptions,
} from '../../pant-react/es/data-list/addons';
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

const checkedBatchIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/checked-batch.svg';
const uncheckedBatchIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/unchecked-batch.svg';
const sortIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/sort.svg';
const sortNoOrderIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/sort-no-order.svg';
const sortAscIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/sort-asc.svg';
const sortDescIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/sort-desc.svg';
const filterIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/filter.svg';
const moreIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/more.svg';

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
  return selectable({ checkedIcon, uncheckedIcon, maxSelectionMsg: '最多选择{0}条记录', ...options });
}

export function sortable2(options: SortableOptions): DataListAddon {
  const sortButtonImg = <img src={sortIcon} style={{ width: '16px', height: '16px' }} />;
  const sortIconImg = <img src={sortNoOrderIcon} style={{ width: '16px', height: '16px' }} />;
  const ascIconImg = <img src={sortAscIcon} style={{ width: '16px', height: '16px' }} />;
  const descIconImg = <img src={sortDescIcon} style={{ width: '16px', height: '16px' }} />;
  return sortable({
    cancelButtonText: '取消',
    confirmButtonText: '确定',
    sortButton: sortButtonImg,
    sortIcon: sortIconImg,
    ascIcon: ascIconImg,
    descIcon: descIconImg,
    ...options,
  });
}

export function toolbar2(options: ToolbarOptions = {}): DataListAddon {
  return toolbar({ ...options });
}
