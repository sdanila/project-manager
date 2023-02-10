import { BaseHttpService } from '../BaseHttpService'
import { QueryTypes } from '../data'

class WorkPlaneApi extends BaseHttpService {

  constructor(baseUrl: string) {
    super(baseUrl)
    this.baseUrl = `${baseUrl}/v1/outlay-rows/entity/someKey/row`
  }

  async getAllList() {
    return this.sendQuery({
      url: `${this.baseUrl}/list`,
      type: QueryTypes.GET,
    })
  }
}

export default WorkPlaneApi