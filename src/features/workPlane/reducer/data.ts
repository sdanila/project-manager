import { createReducer } from '@reduxjs/toolkit'
import { IWorkPlaneState } from '../types'
import * as actions from '../actions'

const initialState: IWorkPlaneState['data'] = {
  // images: [],
  // hiddenCards: [],
}

export default createReducer(initialState, (builder) => {

})
