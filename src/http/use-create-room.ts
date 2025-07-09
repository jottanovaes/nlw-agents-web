import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateRoomsRequest } from './types/create-rooms-request'
import type { CreateRoomsResponse } from './types/create-rooms-response'

export function useCreateRoom() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: CreateRoomsRequest) => {
      const response = await fetch('http://localhost:3333/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Erro ao criar a sala')
      }

      const result: CreateRoomsResponse = await response.json()
      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-rooms'],
      })
    },
  })
}
