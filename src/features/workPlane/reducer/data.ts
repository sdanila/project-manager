import { createReducer } from '@reduxjs/toolkit'
import { IWorkPlaneState } from '../types'
import * as actions from '../actions'

const initialState: IWorkPlaneState['data'] = {
  list: [],
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(actions.getAllList.success, (state, action) => {
      state.list = action.payload
    })
})
