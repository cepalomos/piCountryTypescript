import axios, { AxiosResponse } from 'axios'

export class ApiExternal {
  private readonly url: string
  constructor (url: string) {
    this.url = url
  }

  async getData (): Promise<AxiosResponse<{ data: unknown }>> {
    return await axios.get(this.url)
  }
}
