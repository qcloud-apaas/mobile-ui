import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { closeAllactionSheets } from 'pant-react/es/action-sheet';
import { closeAllDialogs } from 'pant-react/es/dialog';
import { clearAllNotifies } from 'pant-react/es/notify';
import { clearAllToasts } from 'pant-react/es/toast';
import { HomeRouteComponent } from './routes/home';
import { SearchablePickerRouteComponent } from '../../searchable-picker/demo';
import { NotFoundRouteComponent } from './routes/404';

export class RootComponent extends React.Component {
  private bindedOnHashChange = this.onHashChange.bind(this);

  componentDidMount(): void {
    window.addEventListener('hashchange', this.bindedOnHashChange);
  }

  componentWillUnmount(): void {
    window.removeEventListener('hashchange', this.bindedOnHashChange);
  }

  private onHashChange(): void {
    const parentRoute = (parent as any).$componentRoute;
    if (parentRoute) {
      parentRoute(location.hash);
      this.onRouteChange();
    }
  }

  private onRouteChange(): void {
    closeAllactionSheets();
    closeAllDialogs();
    clearAllNotifies();
    clearAllToasts();
  }

  render(): JSX.Element {
    return (
      <Router>
        <Switch>
          <Route path="/searchable-picker/">
            <SearchablePickerRouteComponent />
          </Route>
          <Route path="/" exact>
            <HomeRouteComponent />
          </Route>
          <Route path="*">
            <NotFoundRouteComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}
