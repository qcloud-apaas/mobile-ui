import React from 'react';
import { createBEM } from '../../../pant-react/es/utils/bem';
import { NavBar } from '../../demos/scripts/components/nav-bar';
import { Popup } from '../../../pant-react/es/popup';
import { UICascader, ColumnItem } from '../../cascader';
import { toast } from '../../../pant-react/es/toast';
import { columns } from './constant';
import './index.scss';

const bem = createBEM('demo-cascader');

type CascaderState = {
  cityValue: string[][];
  showPicker: boolean;
};

export class CascaderRouteComponent extends React.PureComponent<any, CascaderState> {
  state: CascaderState = {
    cityValue: [['浙江', '杭州', '余杭区']],
    showPicker: false,
  };

  onChange<T extends string[][] | string[]>(value: T): void {
    value &&
      value.length &&
      toast({
        message: `${value}`,
      });
  }

  onLoad(value: string[]): Promise<ColumnItem[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        let res = columns;
        while (res && value.length) {
          const v = value.shift();
          const item = res.find((item) => item.value === v);
          res = item && item.children;
        }
        resolve(res && res.map((item) => ({ ...item, children: item.isLeaf ? null : [] })));
      }, 1000);
    });
  }

  render(): JSX.Element {
    return (
      <React.Fragment>
        <NavBar title="Cascader" type="cascader" />
        <div className={bem()}>
          <section>
            <h2>Basic Usage</h2>
            <div className={bem('card')}>
              <UICascader title="Basic Usage" data={columns} onChange={this.onChange} />
            </div>
          </section>

          <section>
            <h2>Onload</h2>
            <div className={bem('card')}>
              <UICascader title="Onload" onChange={this.onChange} onLoad={this.onLoad} />
            </div>
          </section>

          <section>
            <h2>With Popup</h2>
            <div
              className={bem('cityinput')}
              onClick={() => {
                this.setState({
                  showPicker: true,
                });
              }}
            >
              <span>City</span>
              <span>{this.state.cityValue.map((item) => item.join('/')).join(', ')}</span>
            </div>
            <Popup
              show={this.state.showPicker}
              position="bottom"
              onClickClose={(): void => {
                this.setState({
                  showPicker: false,
                });
              }}
            >
              <UICascader
                data={columns}
                defaultValue={this.state.cityValue}
                maxSelection={2}
                cancelButtonText="取消"
                confirmButtonText="确定"
                onCancel={(): void => {
                  this.setState({
                    showPicker: false,
                  });
                }}
                onConfirm={(value: string[][]): void => {
                  this.setState({
                    cityValue: value,
                    showPicker: false,
                  });
                }}
              />
            </Popup>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
