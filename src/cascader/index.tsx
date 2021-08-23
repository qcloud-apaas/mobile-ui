import React from 'react';
import { Cascader, CascaderProps } from '../../pant-react/es/cascader';
import './index.scss';

export * from '../../pant-react/es/cascader';

const checkedIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/checked.svg';
const checkedBatchIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/checked-batch.svg';
const uncheckedBatchIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/unchecked-batch.svg';

export class MuiCascader extends React.PureComponent<CascaderProps> {
  comRef = React.createRef<Cascader>();

  getValue(): string[] | string[][] {
    return this.comRef.current.getValue();
  }

  clearValue(cb: () => void): void {
    return this.comRef.current.clearValue(cb);
  }

  onCancel(): void {
    return this.comRef.current.onCancel();
  }

  render(): JSX.Element {
    const { maxSelection } = this.props;
    const checkedIconIcon = maxSelection > 1 ? checkedBatchIcon : checkedIcon;
    const uncheckedIcon = <img src={uncheckedBatchIcon} style={{ width: '16px', height: '16px' }} />;
    return (
      <Cascader
        ref={this.comRef}
        checkedIcon={<img src={checkedIconIcon} style={{ width: '16px', height: '16px' }} />}
        uncheckedIcon={maxSelection > 1 ? uncheckedIcon : null}
        {...this.props}
      />
    );
  }
}
