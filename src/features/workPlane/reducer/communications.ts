import { combineReducers } from 'redux'

// import { makeCommunicationReducer } from 'shared/utils/communication/reducer/makeCommunicationReducer'
import { IWorkPlaneState } from '../types'

import * as actions from '../actions'

export default combineReducers<IWorkPlaneState['communications']>({
  // getImages: makeCommunicationReducer(actions.getImages),
  // resetCards: makeCommunicationReducer(actions.resetHiddenCards),
})
