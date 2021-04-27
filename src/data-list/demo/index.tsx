import React from 'react';
import { toast } from '../../../pant-react/es/toast';
import { columns as cascaderColumns } from '../../cascader/demo/constant';
import {
  MuiDataList,
  DataListColumn,
  toolbar,
  sortable2,
  SortBy,
  filterable2,
  selectable2,
  recordActions2,
  batchActions2,
  pageable2,
} from '../../data-list';
import { createBEM } from '../../../pant-react/es/utils/bem';
import { NavBar } from '../../demos/scripts/components/nav-bar';
import logoImg from '../../demos/assets/logo.png';
import plusIcon from '../../assets/plus.svg';
import moreIcon from '../../assets/more.svg';
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

    const batchActionsReuse = batchActions2({
      render(selectable, showActions) {
        const moreIconImg = <img src={moreIcon} style={{ width: '16px', height: '16px' }} onClick={showActions} />;
        const plusIconImg = <img src={plusIcon} style={{ width: '16px', height: '16px' }} />;
        return (
          <div className={bem('actions')}>
            <div className={bem('action-new')}>
              {plusIconImg}
              <span>新建</span>
            </div>
            <div className={bem('action-more')}>{moreIconImg}</div>
          </div>
        );
      },
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
            <MuiDataList
              columns={columns.slice(0, 4)}
              records={records}
              addons={[
                toolbar(),
                filter,
                recordActions2({
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
                pageable2(),
              ]}
            />
          </section>

          <section>
            <h2>Sticky</h2>
            <div ref={this.containerRef}>
              <MuiDataList
                columns={columns}
                records={records}
                addons={[
                  toolbar({ sticky: true, stickyContainer: this.containerRef }),
                  batchActions2({
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
                  sortable2({
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
                  selectable2({
                    value: this.state.selectedValue,
                    onChange: (value) => {
                      this.setState({ selectedValue: value });
                    },
                  }),
                  recordActions2({
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
                  pageable2({ pageSize: 10, sticky: true, stickyContainer: this.containerRef }),
                ]}
              />
            </div>
          </section>

          <section>
            <h2>Record Render</h2>
            <MuiDataList
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
                sortable2({
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
                selectable2({
                  value: this.state.selectedValue,
                  onChange: (value) => {
                    this.setState({ selectedValue: value });
                  },
                }),
                recordActions2({
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
                pageable2(),
              ]}
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}
