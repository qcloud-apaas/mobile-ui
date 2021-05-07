import React from 'react';
import { Field, FieldProps } from '../../pant-react/es/field';

export * from '../../pant-react/es/field';

import './index.scss';

export class MuiField<T = never> extends React.PureComponent<FieldProps<T>> {
  render(): JSX.Element {
    return <Field {...this.props} />;
  }
}
