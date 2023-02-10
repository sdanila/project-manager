import { eID } from 'shared/utils/constants'
import { IServerWorkPlaneItem } from 'shared/models/WorkPlane'

import { BaseHttpService } from '../BaseHttpService'
import { QueryTypes } from '../data'

class WorkPlaneApi extends BaseHttpService {

  constructor(baseUrl: string) {
    super(baseUrl)
    this.baseUrl = `${baseUrl}/v1/outlay-rows/entity/${eID}/row`
  }

  async getAllList() {
    return this.sendQuery<IServerWorkPlaneItem[], IServerWorkPlaneItem[], any>({
      url: `${this.baseUrl}/list`,
      type: QueryTypes.GET,
    })
  }
}

export default WorkPlaneApi