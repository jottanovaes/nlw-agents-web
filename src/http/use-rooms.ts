import { useQuery } from '@tanstack/react-query'
import type { GetResponse } from './types/get-rooms-request'

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetResponse = await response.json()

      return result
    },
  })
}
