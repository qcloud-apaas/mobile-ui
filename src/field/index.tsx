import React from 'react';
import { Field, FieldProps } from '../../pant-react/es/field';

export * from '../../pant-react/es/field';

import './index.scss';

export class UIField<T = never> extends React.PureComponent<FieldProps<T>> {
  static defaultProps = {
    direction: 'column',
  };

  render(): JSX.Element {
    return <Field {...this.props} />;
  }
}
