import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ConstructInstallPage from 'pages/ConstructInstallPage';
import { ROUTE_PATHS } from 'router/routes'

export class ConstructInstallModule {
  getRoutes() {
    return (
      <Route key={ROUTE_PATHS.CONSTRUCT_INSTALL} path={ROUTE_PATHS.CONSTRUCT_INSTALL}>
        <Switch>
          <Route key={ROUTE_PATHS.CONSTRUCT_INSTALL} path={ROUTE_PATHS.CONSTRUCT_INSTALL} component={ConstructInstallPage} />
        </Switch>
      </Route>
    )
  }
}