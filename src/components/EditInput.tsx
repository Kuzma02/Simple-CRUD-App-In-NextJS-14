"use client";

import React, { useState } from "react";
import * as actions from "@/actions";

interface EditInputProps {
    user: {
        id: number,
        name: string
    }
}

export default function EditInput(props: EditInputProps) {

    const [userInput, setUserInput] = useState("");

    const editUserAction = actions.editUser.bind(null, props.user.id, userInput)

  return (
    <form action={editUserAction} className="flex justify-center mt-10">
    <input
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      type="text"
      placeholder="Enter user's name"
      className="px-5 py-5 text-xl border-2 rounded outline-none w-full"
      name="name"
    />
    <button
      type="submit"
      className="bg-blue-500 font-bold text-white px-10 text-xl py-5 rounded-tr-md rounded-br-md hover:bg-blue-600"
    >
      Edit
    </button>
  </form>
  )
}
