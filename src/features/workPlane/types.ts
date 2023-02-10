import { ICommunication } from 'shared/models/Communication/Communication'
import { IServerWorkPlaneItem } from 'shared/models/WorkPlane'

export interface IWorkPlaneState {
  communications: {
    getAllList: ICommunication
  }
  data: {
    list: IServerWorkPlaneItem[]
    // cashbackHistory: IConvertedBonusHistory
  }
}
