import React from 'react';
import { DataList, DataListProps } from '../../pant-react/es/data-list';

export * from '../../pant-react/es/data-list';

export * from './addons';

import './index.scss';

export class MuiDataList<T = Record<string, any>> extends React.PureComponent<DataListProps<T>> {
  render(): JSX.Element {
    const expandButton = <>展开</>;
    const collapseButton = <>收起</>;
    return <DataList<T> {...this.props} expandButton={expandButton} collapseButton={collapseButton} />;
  }
}
