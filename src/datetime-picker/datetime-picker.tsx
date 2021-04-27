import React from 'react';
import { DatetimePicker, DatetimePickerProps } from '../../pant-react/es/datetime-picker';
import './index.scss';

export class MuiDatetimePicker extends React.PureComponent<DatetimePickerProps> {
  comRef = React.createRef<DatetimePicker>();

  getValue(): Date {
    return this.comRef.current.getValue();
  }

  clearValue(cb: () => void): void {
    return this.comRef.current.clearValue(cb);
  }

  render(): JSX.Element {
    return <DatetimePicker ref={this.comRef} cancelButtonText="取消" confirmButtonText="确定" {...this.props} />;
  }
}
