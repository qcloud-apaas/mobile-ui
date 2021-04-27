import React from 'react';
import { SearchablePicker, SearchablePickerProps, DataSet } from '../../pant-react/es/searchable-picker';
import checkedIcon from '../assets/checked.svg';
import checkedBatchIcon from '../assets/checked-batch.svg';
import uncheckedBatchIcon from '../assets/unchecked-batch.svg';

export * from '../../pant-react/es/searchable-picker';

import './index.scss';

export class MuiSearchablePicker extends React.PureComponent<SearchablePickerProps> {
  static defaultProps = {
    rowHeight: 48,
  };

  comRef = React.createRef<SearchablePicker>();

  getValue(): string | string[] {
    return this.comRef.current.getValue();
  }

  clearValue(cb: () => void): void {
    return this.comRef.current.clearValue(cb);
  }

  getDataList(): DataSet {
    return this.comRef.current.getDataList();
  }

  onCancel(): void {
    return this.comRef.current.onCancel();
  }

  render(): JSX.Element {
    const { maxSelection } = this.props;
    const checkedIconIcon = maxSelection > 1 ? checkedBatchIcon : checkedIcon;
    const uncheckedIcon = <img src={uncheckedBatchIcon} style={{ width: '16px', height: '16px' }} />;
    return (
      <SearchablePicker
        ref={this.comRef}
        checkedIcon={<img src={checkedIconIcon} style={{ width: '16px', height: '16px' }} />}
        uncheckedIcon={maxSelection > 1 ? uncheckedIcon : null}
        cancelButtonText="取消"
        confirmButtonText="确定"
        {...this.props}
      />
    );
  }
}
