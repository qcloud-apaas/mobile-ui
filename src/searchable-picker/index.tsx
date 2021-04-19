import React from 'react';
import { SearchablePicker, SearchablePickerProps } from '../../pant-react/es/searchable-picker';
import checkedIcon from '../assets/checked.svg';

export * from '../../pant-react/es/searchable-picker';

import './index.scss';

export class UISearchablePicker extends React.PureComponent<SearchablePickerProps> {
  static defaultProps = {
    rowHeight: 48,
    checkedNode: <img src={checkedIcon} style={{ width: '16px', height: '16px' }} />,
    uncheckedNode: '',
  };

  render(): JSX.Element {
    return <SearchablePicker {...this.props} />;
  }
}
