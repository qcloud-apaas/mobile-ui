import React from 'react';
import { DataList, DataListProps } from '../../pant-react/es/data-list';
import './index.scss';

export * from '../../pant-react/es/data-list';

export * from './addons';

const arrowUpIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/arrow-up.svg';
const arrowDownIcon = 'https://apaas.imgcache.qq.com/assets/apaas/component/arrow-down.svg';

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
