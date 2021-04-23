import React from 'react';
import { toast } from '../../../pant-react/es/toast';
import { columns as cascaderColumns } from '../../cascader/demo/constant';
import {
  UIDataList,
  DataListColumn,
  toolbar,
  sortable,
  SortBy,
  filterable2,
  selectable,
  recordActions,
  batchActions,
  pageable,
} from '../../data-list';
import { createBEM } from '../../../pant-react/es/utils/bem';
import { NavBar } from '../../demos/scripts/components/nav-bar';
import logoImg from '../../demos/assets/logo.png';
import './index.scss';

const bem = createBEM('demo-data-list');

const records = [
  {
    name: 'Gary',
    mobile: '1867551****',
    wechat: 'gary',
    qq: '25183****',
    weibo: 'gary',
  },
  {
    name: 'Gary',
    mobile: '1867551****',
    wechat: 'gary',
    qq: '25183****',
    weibo: 'gary',
  },
  {
    name: 'Gary',
    mobile: '1867551****',
    wechat: 'gary',
    qq: '25183****',
    weibo: 'gary',
  },
  {
    name: 'Gary',
    mobile: '1867551****',
    wechat: 'gary',
    qq: '25183****',
    weibo: 'gary',
  },
  {
    name: 'Gary',
    mobile: '1867551****',
    wechat: 'gary',
    qq: '25183****',
    weibo: 'gary',
  },
  {
    name: 'Gary',
    mobile: '1867551****',
    wechat: 'gary',
    qq: '25183****',
    weibo: 'gary',
  },
  {
    name: 'Gary',
    mobile: '1867551****',
    wechat: 'gary',
    qq: '25183****',
    weibo: 'gary',
  },
  {
    name: 'Gary',
    mobile: '1867551****',
    wechat: 'gary',
    qq: '25183****',
    weibo: 'gary',
  },
  {
    name: 'Gary',
    mobile: '1867551****',
    wechat: 'gary',
    qq: '25183****',
    weibo: 'gary',
  },
  {
    name: 'Gary',
    mobile: '1867551****',
    wechat: 'gary',
    qq: '25183****',
    weibo: 'gary',
  },
  {
    name: 'Gary',
    mobile: '1867551****',
    wechat: 'gary',
    qq: '25183****',
    weibo: 'gary',
  },
  {
    name: 'Gary',
    mobile: '1867551****',
    wechat: 'gary',
    qq: '25183****',
    weibo: 'gary',
  },
  {
    name: 'Gary',
    mobile: '1867551****',
    wechat: 'gary',
    qq: '25183****',
    weibo: 'gary',
  },
];

const columns: DataListColumn[] = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'mobile',
    header: 'Mobile',
    render(options) {
      return options.record.mobile;
    },
  },
  {
    key: 'wechat',
    header: 'Wechat',
  },
  {
    key: 'qq',
    header: 'QQ',
  },
  {
    key: 'weibo',
    header: 'Weibo',
  },
];

type DataListRouteState = {
  selectedValue: string[];
  sortValue: SortBy[];
  filterValue: Record<string, any>;
};

export class DataListRouteComponent extends React.PureComponent {
  private containerRef = React.createRef<HTMLDivElement>();

  state: DataListRouteState = {
    selectedValue: ['0'],
    sortValue: [{ by: 'name', order: 'desc' }],
    filterValue: { exactMatch: true, name: 'Gary', birthday: new Date() },
  };

  render(): JSX.Element {
    const filter = filterable2({
      columns: [
        { key: 'exactMatch', header: 'Exact Match', type: 'switch' },
        { key: 'name', header: 'Name', placeholder: 'Input name' },
        { key: 'mobile', header: 'Mobile', placeholder: 'Input mobile' },
        { key: 'wechat', header: 'Wechat', placeholder: 'Input wechat' },
        {
          key: 'city',
          header: 'City',
          placeholder: 'Select city',
          type: 'searchable-picker',
          componentProps: { data: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'] },
        },
        {
          key: 'location',
          header: 'Location',
          placeholder: 'Select location',
          type: 'cascader',
          componentProps: { data: cascaderColumns, maxSelection: 10 },
        },
        {
          key: 'hobby',
          header: 'Hobby',
          placeholder: 'Select hobby',
          type: 'searchable-picker',
          componentProps: {
            maxSelection: 3,
            data: [
              'Football',
              'Basketball',
              'Tennis',
              'Ping Pong Ball',
              'Swiming',
              'Travel',
              'Reading',
              'Cooking',
              'Walking',
              'Watching TV',
              'Driving',
            ],
          },
        },
        {
          key: 'birthday',
          header: 'Birthday',
          placeholder: 'Select birthday',
          type: 'datetime',
          componentProps: { type: 'date' },
        },
        {
          key: 'createdAt',
          header: 'Created At',
          placeholder: 'Select datetime range',
          type: 'datetime-range',
          componentProps: { type: 'datetime' },
        },
      ],
      value: this.state.filterValue,
      onChange: (value) => {
        this.setState({ filterValue: value });
        toast({ message: JSON.stringify(value, null, 2), textAlign: 'left', duration: 10000, clearOnClick: true });
      },
    });

    const batchActionsReuse = batchActions({
      getActions() {
        return [
          {
            name: 'Toggle',
            action(selectable) {
              selectable.toggleAll();
            },
          },
          {
            name: 'New',
            action(selectable) {
              console.log(selectable.getValue()); /* eslint-disable-line */
            },
          },
          {
            name: 'View',
            action(selectable) {
              console.log(selectable.getValue()); /* eslint-disable-line */
            },
          },
          {
            name: 'Delete',
            action(selectable) {
              console.log(selectable.getValue()); /* eslint-disable-line */
            },
          },
        ];
      },
    });

    return (
      <React.Fragment>
        <NavBar title="DataList" type="data-list" />
        <div className={bem()}>
          <section>
            <h2>Basic Usage</h2>
            <UIDataList
              columns={columns.slice(0, 4)}
              records={records}
              addons={[
                toolbar(),
                filter,
                recordActions({
                  actions: [
                    {
                      name: 'View',
                      action(record) {
                        toast(`View ${record.name}`);
                      },
                    },
                    {
                      name: 'Delete',
                      action(record) {
                        toast(`Delete ${record.name}`);
                      },
                    },
                  ],
                }),
                pageable(),
              ]}
            />
          </section>

          <section>
            <h2>Sticky</h2>
            <div ref={this.containerRef}>
              <UIDataList
                columns={columns}
                records={records}
                addons={[
                  toolbar({ sticky: true, stickyContainer: this.containerRef }),
                  batchActions({
                    getActions() {
                      return [
                        {
                          name: 'Toggle',
                          action(selectable) {
                            selectable.toggleAll();
                          },
                        },
                        {
                          name: 'New',
                          action(selectable) {
                            console.log(selectable.getValue()); /* eslint-disable-line */
                          },
                        },
                        {
                          name: 'View',
                          action(selectable) {
                            console.log(selectable.getValue()); /* eslint-disable-line */
                          },
                        },
                        {
                          name: 'Delete',
                          action(selectable) {
                            console.log(selectable.getValue()); /* eslint-disable-line */
                          },
                        },
                      ];
                    },
                  }),
                  sortable({
                    columns: [
                      { key: 'name', header: 'Name', prefer: 'asc' },
                      { key: 'mobile', header: 'Mobile' },
                      { key: 'wechat', header: 'Wechat' },
                    ],
                    value: this.state.sortValue,
                    onChange: (value) => {
                      this.setState({ sortValue: value });
                    },
                  }),
                  filter,
                  selectable({
                    value: this.state.selectedValue,
                    onChange: (value) => {
                      this.setState({ selectedValue: value });
                    },
                  }),
                  recordActions({
                    actions: [
                      {
                        name: 'View',
                        action(record) {
                          toast(`View ${record.name}`);
                        },
                      },
                      {
                        name: 'Delete',
                        action(record) {
                          toast(`Delete ${record.name}`);
                        },
                      },
                    ],
                  }),
                  pageable({ pageSize: 10, sticky: true, stickyContainer: this.containerRef }),
                ]}
              />
            </div>
          </section>

          <section>
            <h2>Record Render</h2>
            <UIDataList
              records={records}
              recordRender={(record) => {
                return (
                  <div className="record-content">
                    <img src={logoImg} />
                    <div>
                      <h3>{record.name}</h3>
                      <div>{record.mobile}</div>
                      <div>{record.wechat}</div>
                      <div>{record.qq}</div>
                      <div>{record.weibo}</div>
                    </div>
                  </div>
                );
              }}
              addons={[
                toolbar(),
                batchActionsReuse,
                sortable({
                  columns: [
                    { key: 'name', header: 'Name', prefer: 'asc' },
                    { key: 'mobile', header: 'Mobile' },
                    { key: 'wechat', header: 'Wechat' },
                  ],
                  value: this.state.sortValue,
                  onChange: (value) => {
                    this.setState({ sortValue: value });
                  },
                }),
                filter,
                selectable({
                  value: this.state.selectedValue,
                  onChange: (value) => {
                    this.setState({ selectedValue: value });
                  },
                }),
                recordActions({
                  actions: [
                    {
                      name: 'View',
                      action(record) {
                        toast(`View ${record.name}`);
                      },
                    },
                    {
                      name: 'Delete',
                      action(record) {
                        toast(`Delete ${record.name}`);
                      },
                    },
                  ],
                }),
                pageable(),
              ]}
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}
