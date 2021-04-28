import React from 'react';
import { DataList, DataListProps } from '../../pant-react/es/data-list';
import arrowUpIcon from '../assets/arrow-up.svg';
import arrowDownIcon from '../assets/arrow-down.svg';

export * from '../../pant-react/es/data-list';

export * from './addons';

import './index.scss';

export class MuiDataList<T = Record<string, any>> extends React.PureComponent<DataListProps<T>> {
  render(): JSX.Element {
    const expandButton = (
      <>
        展开
        <img src={arrowDownIcon} style={{ width: '16px', height: '16px' }} />
      </>
    );
    const collapseButton = (
      <>
        收起
        <img src={arrowUpIcon} style={{ width: '16px', height: '16px' }} />
      </>
    );
    return <DataList<T> {...this.props} expandButton={expandButton} collapseButton={collapseButton} />;
  }
}
