# DataList

### Import

```js
import { MuiDataList } from '@qcloud-apaas/mobile-ui/es/data-list';
```

## Usage

### Basic Usage

```jsx
<MuiDataList columns={columns} records={records} />
```

### Use Addons

```js
import {
  toolbar2,
  filterable2,
  sortable2,
  batchActions2,
  recordActions2,
  pageable2,
  selectable2,
} from '@qcloud-apaas/mobile-ui/es/data-list/addons';
```

```jsx
<MuiDataList
  columns={columns}
  records={records}
  addons={[
    toolbar2(toolbarOptions),
    filterable2(filterableOptions),
    sortable2(sortableOptions),
    batchActions2(batchActionsOptions),
    recordActions2(recordActionsOptions),
    pageable2(pageableOptions),
    selectable2(selectableOptions),
  ]}
/>
```

### Sticky

```js
const containerRef = useRef();
```

```jsx
<div ref={containerRef}>
  <MuiDataList
    columns={columns}
    records={records}
    addons={[
      toolbar({ sticky: true, stickyContainer: containerRef }),
      pageable({ sticky: true, stickyContainer: containerRef }),
    ]}
  />
</div>
```

## API

### Props<T = Record<string, any>>

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| records * | Rows data | _T[]_ | - |
| recordKey | Key of record | _T extends Record<string, any> ? keyof T : string \| (record: T, recordIndex: number) => string_ | `index` |
| recordRender | Custom render for record | _(record: T, recordIndex: number) => JSX.Element_ | - |
| listRender | Custom render for whole list | _(records: T[]) => JSX.Element_ | - |
| expandButton | Custom expand button for showing full record data | _JSX.Element_ | - |
| collapseButton | Custom collapse button for folding record data | _JSX.Element_ | - |
| columns | Columns data | _[DataListColumn](https://qcloud-apaas.github.io/mobile-ui/#/components/data-list?id=datalistcolumnltt-recordltstring-anygtgt)\<T\>[]_ | - |
| addons | Addon list | _DataListAddon[]_ | - |
| topTip | Tips shown on top of data list | _React.ReactNode_ | - |

#### DataListColumn<T = Record<string, any>>

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| key * | Columns key, e.g `info.name` | _string_ | - |
| header * | Column label | _React.ReactNode \| ((column: [DataListColumn](https://qcloud-apaas.github.io/mobile-ui/#/components/data-list?id=datalistcolumnltt-recordltstring-anygtgt)\<T\>) => React.ReactNode)_ | - |
| render | Record value render. A default render will return the raw value find by `key` | _(options: [RowRenderOptions](https://qcloud-apaas.github.io/mobile-ui/#/components/data-list?id=rowrenderoptionsltt-recordltstring-anygtgt)\<T\>) => React.ReactNode_ | - |

#### RowRenderOptions<T = Record<string, any>>

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| record * | Record data | _T_ | - |
| recordIndex * | Index of record | _number_ | - |
| column * | Column data | _[DataListColumn](https://qcloud-apaas.github.io/mobile-ui/#/components/data-list?id=datalistcolumnltt-recordltstring-anygtgt)\<T\>_ | - |
| columnIndex * | Index of column | _number_ | - |

### Toolbar Addon

Render toolbar on top of the data list. Must use this addon before use BatchAction, Filterable and Sortable addons.

#### ToolbarOptions

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| sticky | Whether stick the toolbar on top of viewport or a container | _boolean_ | - |
| stickyContainer | The container dom node, which the toolbar stick on top of | _React.RefObject\<HTMLElement\>_ | - |

### Sortable Addon

#### SortableOptions

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| columns * | Sortable columns defination | _[SortableColumn](https://qcloud-apaas.github.io/mobile-ui/#/components/data-list?id=sortablecolumn)[]_ | - |
| onChange * | Handler of sorting change event | _(value: [SortBy](https://qcloud-apaas.github.io/mobile-ui/#/components/data-list?id=sortby)[]) => void_ | - |
| value | Sorting columns and sorting orders | _[SortBy](https://qcloud-apaas.github.io/mobile-ui/#/components/data-list?id=sortby)[]_ | - |
| multiple | Enable sorting by multiple columns | _boolean_ | - |
| sortButton | Custom button for invoking sorting panel popup | _JSX.Element_ | - |
| ascIcon | Custom icon for asc sorting item | _JSX.Element_ | - |
| descIcon | Custom icon for desc sorting item | _JSX.Element_ | - |
| sortIcon | Custom icon for inacive sorting item | _JSX.Element_ | - |
| cancelButtonText | Custom text for cancel button of sorting panel | _string_ | - |
| confirmButtonText | Custom text for confirm button of sorting panel | _string_ | - |

#### SortableColumn

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| key * | Key of the column | _string_ | - |
| header * | Column label | _React.ReactNode_ | - |
| perfer | Perfer order of sorting | _'desc' \| 'asc'_ | - |

#### SortBy

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| by * | Key of the sorting column | _string_ | - |
| order * | Order of sorting | _'desc' \| 'asc'_ | - |

### Filterable Addon

#### FilterableOptions

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| columns | Filterable columns defination | _[FilterableColumn](https://qcloud-apaas.github.io/mobile-ui/#/components/data-list?id=filterablecolumn)[]_ | - |
| onChange | Handler of filtering change event | _(value: SortBy[]) => void_ | - |
| value | Key value pair of filtering columns | _Record<string, any>_ | - |
| filterButton | Custom button for invoking filter panel popup | _JSX.Element_ | - |
| filterTitle | Custom title for filter panel | _string_ | - |
| cancelButtonText | Custom text for cancel button of filter panel | _string_ | - |
| confirmButtonText | Custom text for confirm button of filter panel | _string_ | - |
| onPopup | Handler of filter panel popup event, return `false` to prevent popup default filter panel, then popup your custom filter panel | _(event: React.SyntheticEvent) => boolean_ | - |

#### FilterableColumn

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| key * | Key of the column | _string_ | - |
| header * | Column label | _React.ReactNode_ | - |
| placeholder | Placeholder for empty value | _string_ | - |
| type | Component type | _string_ | `input` |
| componentProps | Component props | _CascaderProps \| SearchablePickerProps \| DatetimePickerProps \| DatetimeRangeProps_ | - |

### BatchActions Addon

#### BatchActionsOptions<T = Record<string, any>>

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| getActions * | Function returns action items | _(selectable: SelectableManager\<T\>) => [BatchActionItem](https://qcloud-apaas.github.io/mobile-ui/#/components/data-list?id=batchactionitemltt-recordltstring-anygtgt-amp-actionsheetitem)\<T\>[]_ | - |
| cancelText | Will show a cancel button in the popup action list if supplied | _string_ | - |

#### BatchActionItem<T = Record<string, any>> & ActionSheetItem

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| action * | Action performing function | _(selectable: [SelectableManager](https://qcloud-apaas.github.io/mobile-ui/#/components/data-list?id=selectablemanagerltt-recordltstring-anygtgt)\<T\>) => void_ | - |

#### SelectableManager<T = Record<string, any>>

| Method | Description | Type |
| --- | --- | --- |
| getValue | Return all selected record keys | _() => string[]_ |
| hasKey | Identify whether a record is selected | _(key: string) => boolean_ |
| toggle | Toggle a record selection status | _(key: string) => void_ |
| toggleAll | Select all records all deselect all records | _() => void_ |

### Selectable Addon

#### SelectableOptions

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| onChange * | Handler of selection change event | _(value: string[]) => void_ | - |
| value | Key values of selected records | _string[]_ | - |
| checkedIcon | Custom icon for checked checkbox | _JSX.Element_ | - |
| uncheckedIcon | Custom icon for unchecked checkbox | _JSX.Element_ | - |

### RecordActions Addon

#### RecordActionsOptions<T = Record<string, any>>

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| getActions * | return action items | _(record: Record\<string, any\>, recordIndex: number) => [RecordActionItem](https://qcloud-apaas.github.io/mobile-ui/#/components/data-list?id=recordactionitemltt-recordltstring-anygtgt-amp-actionsheetitem)\<T\>[]_ | - |
| actionIcon | Custom icon for invoking record actions popup | _JSX.Element_ | - |
| cancelText | Will show a cancel button in the popup action list if supplied | _string_ | - |

#### RecordActionItem<T = Record<string, any>> & ActionSheetItem

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| action * | Action performing function | _(record: T, recordIndex: number) => void_ | - |

### Pageable Addon

#### PageableOptions

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| sticky | Whether stick the pagination on top of viewport or a container | _boolean_ | - |
| stickyContainer | The container dom node, which the pagination stick on top of | _React.RefObject\<HTMLElement\>_ | - |
| pageIndex | Current page index | _number_ | - |
| pageSize | Record amount per page | _number_ | - |
| recordCount | Total record amount | _number_ | - |
| prevPageText | Custom text for previous page button | _string_ | - |
| nextPageText | Custom text for next page button | _string_ | - |
| onPagingChange | Handler of pageing change event | _(query: [PagingQuery](https://qcloud-apaas.github.io/mobile-ui/#/components/data-list?id=pagingquery)) => void_ | - |

#### PagingQuery

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| pageIndex | Query page index | _number_ | - |
| pageSize | Record amount per page | _number_ | - |
