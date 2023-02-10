import { createAction } from '@reduxjs/toolkit'
import {
  makeCommunicationActionCreator
} from 'shared/utils/communication/actions/makeCommunicationActionCreator'
import { IServerWorkPlaneItem } from 'shared/models/WorkPlane'


export const getAllList = makeCommunicationActionCreator({
  loading: '@workPlane/GET_ALL_LIST_LOADING',
  success: '@workPlane/GET_ALL_LIST_SUCCESS',
  error: '@workPlane/GET_ALL_LIST_ERROR',
  reset: '@workPlane/GET_ALL_LIST_RESET',
})<void, IServerWorkPlaneItem[]>(
  async ({
    deps: {
      extra: { api },
    },
  }) => {
    const response = await api.workPlane.getAllList()
    return response.data
  },
)