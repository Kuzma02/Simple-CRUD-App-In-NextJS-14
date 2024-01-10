import React from 'react'
import { db } from '@/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import EditInput from '@/components/EditInput'
import * as actions from "@/actions";

interface SingleUserProps {
  params: {
    id: string
  }
}

export default async function SingleUser(props: SingleUserProps) {
  const user = await db.user.findFirst({
    where: {
      id: parseInt(props.params.id)
    }
  })

  if(!user){
    notFound();
  }

  const deleteUserAction = actions.deleteUser.bind(null, user.id);
  
  return (
    <div className='text-center py-5 px-10'>
      <h1 className='text-6xl font-bold'>
        { user.name }
        </h1>
        <EditInput user={user}  />
        <form action={deleteUserAction}>
          <button type="submit" className='bg-red-600 px-5 py-2 text-white font-bold my-5 hover:bg-red-500'>Delete User</button>
        </form>
        <Link href="/" className='text-2xl font-bold text-blue-500'>Show All Users</Link>
        </div>
  )
}
