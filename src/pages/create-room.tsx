import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetAPIResponse = Array<{
  id: string;
  name: string;
}>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetAPIResponse = await response.json();
      return result;
    },
  });
  return (
    <div>
      <h1>Create Room</h1>

      {isLoading && <p>Loading...</p>}

      <div>
        {data?.map((room) => (
          <Link
            className="block underline"
            key={room.id}
            to={`/room/${room.id}`}
          >
            {room.name}
          </Link>
        ))}
      </div>

      <Link className="underline" to="/room">
        Acessar sala
      </Link>
    </div>
  );
}
