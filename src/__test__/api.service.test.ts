import { ApiExternal } from '@/service/api.service'
import { describe, expect, jest, test } from '@jest/globals'
import axios from 'axios'

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

describe('Test class ApiExternal', () => {
  const api = new ApiExternal('www.example.com')

  const mockData = {
    data: {},
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
    request: {}
  }

  describe('Metodo getData', () => {
    test('Url correct method', async () => {
      mockAxios.get.mockResolvedValue(mockData)
      const data = await api.getData()
      expect(data).toHaveProperty('data')
      expect(data).toHaveProperty('status')
      expect(data).toHaveProperty('statusText')
    })
  })
})
