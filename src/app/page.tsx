import { db } from "@/db";

import Input from "@/components/Input";
import Link from "next/link";


// disable caching
export const revalidate = 0;

export default async function Home() {
  const users = await db.user.findMany({});

  return (
    <main className="max-w-7xl mx-auto px-10">
      <Input mode="create" />

        <ul className="text-center flex flex-col gap-y-2 pt-10">
          {users.map((user) => {
            return (
              <li
                className="bg-gray-100 py-2 text-xl flex justify-between items-center px-5"
                key={user.id}
              >
                <h2 className="capitalize font-bold text-2xl">{user.name}</h2>
                <div className="flex gap-x-2">
                  <Link
                    href={`/user/${user.id}`}
                    className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                  >
                    View
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      
    </main>
  );
}
