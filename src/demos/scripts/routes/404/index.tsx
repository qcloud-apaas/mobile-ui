import React from 'react';
import { createBEM } from '../../../../../pant-react/es/utils/bem';
import './index.scss';

const bem = createBEM('demo-404');

export class NotFoundRouteComponent extends React.Component {
  render(): JSX.Element {
    return (
      <div className={bem()}>
        <h1>404</h1>
      </div>
    );
  }
}
