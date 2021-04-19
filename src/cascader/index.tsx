import React from 'react';
import { Cascader, CascaderProps } from '../../pant-react/es/cascader';
import checkedIcon from '../assets/checked.svg';

export * from '../../pant-react/es/cascader';

import './index.scss';

export class UICascader extends React.PureComponent<CascaderProps> {
  static defaultProps = {
    checkedNode: <img src={checkedIcon} style={{ width: '16px', height: '16px' }} />,
    uncheckedNode: '',
  };

  render(): JSX.Element {
    return <Cascader {...this.props} />;
  }
}
