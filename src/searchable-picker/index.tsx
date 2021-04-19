import React from 'react';
import { SearchablePicker as PantSearchablePicker, SearchablePickerProps } from '../../pant-react/es/searchable-picker';
import checkedIcon from './selected.svg';

export { SearchablePickerProps };

import './index.scss';

export class SearchablePicker extends React.PureComponent<SearchablePickerProps> {
  static defaultProps = {
    rowHeight: 48,
    checkedNode: <img src={checkedIcon} style={{ width: '16px', height: '16px' }} />,
    uncheckedNode: '',
  };

  render(): JSX.Element {
    return <PantSearchablePicker {...this.props} />;
  }
}
