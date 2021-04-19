import React from 'react';
import { DatetimeRange, DatetimeRangeProps } from '../../pant-react/es/datetime-picker';
import './index.scss';

export class UIDatetimeRange extends React.PureComponent<DatetimeRangeProps> {
  render(): JSX.Element {
    return <DatetimeRange {...this.props} />;
  }
}
