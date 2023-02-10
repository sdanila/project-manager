import WorkPlaneApi from './WorkPlaneApi/WorkPlaneApi';

class Api {
  public workPlane: WorkPlaneApi

  constructor(baseUrl = '') {
    this.workPlane = new WorkPlaneApi(baseUrl)
  }
}

export default Api