import React from 'react';
import { SearchablePicker, SearchablePickerProps } from '../../pant-react/es/searchable-picker';
import checkedIcon from '../assets/checked.svg';

export * from '../../pant-react/es/searchable-picker';

import './index.scss';

export class MuiSearchablePicker extends React.PureComponent<SearchablePickerProps> {
  static defaultProps = {
    rowHeight: 48,
    checkedNode: <img src={checkedIcon} style={{ width: '16px', height: '16px' }} />,
    uncheckedNode: '',
  };

  comRef = React.createRef<SearchablePicker>();

  getValue(): string | string[] {
    return this.comRef.current.getValue();
  }

  clearValue(cb: () => void): void {
    return this.comRef.current.clearValue(cb);
  }

  render(): JSX.Element {
    return <SearchablePicker ref={this.comRef} {...this.props} />;
  }
}
