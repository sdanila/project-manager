import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { ROUTE_PATHS } from 'router/routes'

export function createRoutes(modules) {
  const routesFromModules = modules.map(module => module.getRoutes())
  return (
    <>
      <Switch>
        <Redirect exact from="/" to={ROUTE_PATHS.CONSTRUCT_INSTALL} />
        {routesFromModules}
      </Switch>
    </>
  )
}