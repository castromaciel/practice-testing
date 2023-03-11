import axios from 'axios'
import { ApiResponse } from '../interfaces'

export const callEndpoint = async (request: any):Promise<ApiResponse> => { 
  console.log(request)
  const response = await axios.post<ApiResponse>('https://rickandmortyapi.com/api/character/2')
  const { data } = response
  return data
}
