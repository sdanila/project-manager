import { combineReducers } from 'redux'
import { IWorkPlaneState } from '../types'
import communications from './communications'
import data from './data'

export const reducer = combineReducers<IWorkPlaneState>({
  communications,
  data,
})
