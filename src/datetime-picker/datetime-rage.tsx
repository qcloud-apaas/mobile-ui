import React from 'react';
import { DatetimeRange, DatetimeRangeProps } from '../../pant-react/es/datetime-picker';
import './index.scss';

export class MuiDatetimeRange extends React.PureComponent<DatetimeRangeProps> {
  static readonly __FIELD_BEHAVIOR__ = 'Popup';

  static defaultProps = {
    roundPopup: false,
  };

  comRef = React.createRef<DatetimeRange>();

  getValue(): [Date, Date] {
    return this.comRef.current.getValue();
  }

  clearValue(cb: () => void): void {
    return this.comRef.current.clearValue(cb);
  }

  render(): JSX.Element {
    return (
      <DatetimeRange
        ref={this.comRef}
        cancelButtonText="取消"
        confirmButtonText="确定"
        titleStart="选择开始时间"
        titleEnd="选择结束时间"
        {...this.props}
      />
    );
  }
}
