"use client";

import React from 'react'

export default function Input() {
  return (
    <div className='flex justify-center mt-10'>
        <input type="text" placeholder="Enter user's name" className='px-5 py-5 text-xl border-2 rounded outline-none w-full' />
        <button className="bg-blue-500 font-bold text-white px-10 text-xl py-5 rounded-tr-md rounded-br-md hover:bg-blue-600">Add</button>
    </div>
  )
}
