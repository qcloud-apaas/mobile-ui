import React from 'react';
import { createBEM } from '../../../pant-react/es/utils/bem';
import { NavBar } from '../../demos/scripts/components/nav-bar';
import { Popup } from '../../../pant-react/es/popup';
import { SearchablePicker, DataSet } from '..';
import { toast } from '../../../pant-react/es/toast';
import './index.scss';

const data = [
  '河北省邯郸市',
  '河北省保定市',
  '河北省张家口市',
  '山西省大同市',
  '内蒙呼和浩特市',
  '辽宁省本溪市',
  '辽宁省丹东市',
  '辽宁省锦州市',
  '辽宁省阜新市',
  '辽宁省辽阳市',
  '黑龙江省鸡西市',
  '黑龙江省鹤岗市',
  '黑龙江省大庆市',
  '黑龙江省伊春市',
  '黑龙江省佳木斯市',
  '黑龙江省牡丹江市',
  '江苏省无锡市',
  '江苏省常州市',
  '江苏省苏州市',
  '浙江省宁波市',
  '安徽省合肥市',
  '安徽省淮南市',
  '安徽省淮北市',
  '福建省厦门市',
  '山东省枣庄市',
  '山东省烟台市',
  '山东省潍坊市',
  '山东省泰安市',
  '山东省临沂市',
  '河南省开封市',
  '河南省洛阳市',
  '河南省平顶山市',
  '河南省安阳市',
  '河南省新乡市',
  '河南省焦作市',
  '湖北省黄石市',
  '湖北省襄樊市',
  '湖北省荆州市',
  '湖南省株洲市',
  '湖南省湘潭市',
  '湖南省衡阳市',
  '广东省深圳市',
  '广东省汕头市',
  '广东省湛江市',
  '广西南宁市',
  '广西柳州市',
  '青海省西宁市',
];

const bem = createBEM('demo-searchable-picker');

type SearchablePickerState = {
  cityValue: string[];
  showPicker1: boolean;
  showPicker2: boolean;
};

export class SearchablePickerRouteComponent extends React.PureComponent<any, SearchablePickerState> {
  state: SearchablePickerState = {
    cityValue: ['河北省保定市'],
    showPicker1: false,
    showPicker2: false,
  };

  onChange<T extends string | string[]>(value: T): void {
    value &&
      toast({
        message: `${value}`,
      });
  }

  onSearch(text: string): Promise<DataSet> {
    text = text.trim();
    if (!text) {
      return Promise.resolve(data);
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.filter((item) => item.indexOf(text) >= 0));
      }, 1000);
    });
  }

  render(): JSX.Element {
    return (
      <React.Fragment>
        <NavBar title="SearchablePicker" type="searchable-picker" />
        <div className={bem()}>
          <section>
            <h2>Basic Usage</h2>
            <div className={bem('card')}>
              <SearchablePicker title="Basic Usage" data={data} onChange={this.onChange} />
            </div>
          </section>

          <section>
            <h2>On Search</h2>
            <div className={bem('card')}>
              <SearchablePicker title="On Search" onChange={this.onChange} onSearch={this.onSearch.bind(this)} />
            </div>
          </section>

          <section>
            <h2>With Popup</h2>
            <div
              className={bem('cityinput')}
              onClick={() => {
                this.setState({
                  showPicker1: true,
                });
              }}
            >
              <span>City</span>
              <span>{this.state.cityValue.join(', ')}</span>
            </div>
            <Popup
              show={this.state.showPicker1}
              position="bottom"
              onClickClose={(): void => {
                this.setState({
                  showPicker1: false,
                });
              }}
            >
              <SearchablePicker
                data={data}
                defaultValue={this.state.cityValue}
                maxSelection={2}
                onSearch={this.onSearch.bind(this)}
                cancelButtonText="取消"
                confirmButtonText="确定"
                onCancel={(): void => {
                  this.setState({
                    showPicker1: false,
                  });
                }}
                onConfirm={(value: string[]): void => {
                  this.setState({
                    cityValue: value,
                    showPicker1: false,
                  });
                }}
              />
            </Popup>
          </section>

          <section>
            <h2>Full Screen</h2>
            <div
              className={bem('cityinput')}
              onClick={() => {
                this.setState({
                  showPicker2: true,
                });
              }}
            >
              <span>City</span>
              <span>{this.state.cityValue.join(', ')}</span>
            </div>
            <Popup
              show={this.state.showPicker2}
              position="bottom"
              onClickClose={(): void => {
                this.setState({
                  showPicker2: false,
                });
              }}
              style={{ height: '100%' }}
            >
              <SearchablePicker
                title="Full Screen"
                data={data}
                defaultValue={this.state.cityValue}
                maxSelection={2}
                toolbarPosition="bottom"
                fullscreen
                onSearch={this.onSearch.bind(this)}
                onCancel={(): void => {
                  this.setState({
                    showPicker2: false,
                  });
                }}
                onConfirm={(value: string[]): void => {
                  this.setState({
                    cityValue: value,
                    showPicker2: false,
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
