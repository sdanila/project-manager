import { IApplicationState } from 'setup/store';

export const selectWorkPlaneListData = (state: IApplicationState) => state.workPlane.data.list;
export const selectWorkPlaneListComm = (state: IApplicationState) => state.workPlane.communications.getAllList;