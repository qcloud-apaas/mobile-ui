import React from 'react';
import { SearchablePicker, SearchablePickerProps, DataSet } from '../../pant-react/es/searchable-picker';
import './index.scss';

export * from '../../pant-react/es/searchable-picker';

const checkedIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/checked.svg';
const checkedBatchIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/checked-batch.svg';
const uncheckedBatchIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/unchecked-batch.svg';

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
        {...this.props}
      />
    );
  }
}
