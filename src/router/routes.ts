import { generatePath } from 'react-router-dom'

export enum ROUTE_PATHS {
  CONSTRUCT_INSTALL = '/construction-installation',
}

export const ROUTE_URLS = {
  MAIN: () => generatePath(ROUTE_PATHS.CONSTRUCT_INSTALL),
}