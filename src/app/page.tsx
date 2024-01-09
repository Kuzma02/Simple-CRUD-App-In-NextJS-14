import Input from "@/components/Input";


const users= [
  {
    id: 1,
    name: "kuzma"
  },
  {
    id: 2,
    name: "djole"
  },
  {
    id: 3,
    name: "stefan"
  },
];

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Input />

      <ul className="text-center flex flex-col gap-y-2 pt-10">
      { users.map(user => {
        return (
          <li className="bg-gray-100 py-2 text-xl flex justify-between items-center px-5" key={user.id}>
            <h2 className="capitalize font-bold text-2xl">{ user.name }</h2>
            <div className="flex gap-x-2">
              <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Edit</button>
              <button className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700">Delete</button>
            </div>
            </li>
        )
      }) }
      </ul>

    </main>
  )
}
