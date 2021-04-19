import React from 'react';
import { DatetimePicker, DatetimePickerProps } from '../../pant-react/es/datetime-picker';
import './index.scss';

export class UIDatetimePicker extends React.PureComponent<DatetimePickerProps> {
  render(): JSX.Element {
    return <DatetimePicker {...this.props} />;
  }
}
