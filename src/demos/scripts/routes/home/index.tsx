import React from 'react';
import { Link } from 'react-router-dom';
import { createBEM } from '../../../../../pant-react/es/utils/bem';
import githubLogo from '../../../assets/github.svg';
import './index.scss';

const bem = createBEM('demo-home');

function Arrow(): JSX.Element {
  return (
    <svg viewBox="0 0 1024 1024" className="demo-home-nav__icon">
      <path
        fill="#B6C3D2"
        d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"
      ></path>
      <path
        fill="#B6C3D2"
        d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"
      ></path>
    </svg>
  );
}

export class HomeRouteComponent extends React.Component {
  render(): JSX.Element {
    return (
      <div className={bem()}>
        <h1>
          <span>Mobile UI</span>
          <a className="github" href="https://github.com/qcloud-apaas/mobile-ui" target="_blank">
            <img src={githubLogo} />
          </a>
        </h1>
        <h2>Tencent Cloud aPaaS Mobile UI Components</h2>

        <section>
          <h3>Form Components</h3>
          <Link to="/cascader/">
            Cascader <Arrow />
          </Link>
          <Link to="/datetime-picker/">
            DatetimePicker <Arrow />
          </Link>
          <Link to="/searchable-picker/">
            SearchablePicker <Arrow />
          </Link>
        </section>

        <section>
          <h3>Display Components</h3>
          <Link to="/data-list/">
            DataList <Arrow />
          </Link>
        </section>
      </div>
    );
  }
}
