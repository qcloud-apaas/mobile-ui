import React from 'react';
import { Cascader, CascaderProps } from '../../pant-react/es/cascader';
import checkedIcon from '../assets/checked.svg';

export * from '../../pant-react/es/cascader';

import './index.scss';

export class MuiCascader extends React.PureComponent<CascaderProps> {
  static defaultProps = {
    checkedNode: <img src={checkedIcon} style={{ width: '16px', height: '16px' }} />,
    uncheckedNode: '',
  };

  comRef = React.createRef<Cascader>();

  getValue(): string[] | string[][] {
    return this.comRef.current.getValue();
  }

  clearValue(cb: () => void): void {
    return this.comRef.current.clearValue(cb);
  }

  render(): JSX.Element {
    return <Cascader ref={this.comRef} {...this.props} />;
  }
}
