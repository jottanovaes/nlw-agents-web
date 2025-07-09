import { RoomList } from '@/components/room-list'
import { CreateRoomForm } from '@/components/ui/create-room-form'

export function CreateRoom() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid-col-2 grid items-start gap-8">
          <div className="flex items-start justify-center gap-2">
            <CreateRoomForm />
            <RoomList />
          </div>
        </div>
      </div>
    </div>
  )
}
