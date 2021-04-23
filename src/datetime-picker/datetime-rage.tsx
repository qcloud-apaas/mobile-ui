import React from 'react';
import { DatetimeRange, DatetimeRangeProps } from '../../pant-react/es/datetime-picker';
import './index.scss';

export class MuiDatetimeRange extends React.PureComponent<DatetimeRangeProps> {
  static readonly __FIELD_BEHAVIOR__ = 'Popup';

  comRef = React.createRef<DatetimeRange>();

  getValue(): [Date, Date] {
    return this.comRef.current.getValue();
  }

  clearValue(cb: () => void): void {
    return this.comRef.current.clearValue(cb);
  }

  render(): JSX.Element {
    return <DatetimeRange ref={this.comRef} {...this.props} />;
  }
}
