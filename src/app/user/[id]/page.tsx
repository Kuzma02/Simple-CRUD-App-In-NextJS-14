import React from 'react'
import { db } from '@/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import EditInput from '@/components/EditInput'

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
  
  return (
    <div className='text-center py-5 px-10'>
      <h1 className='text-6xl font-bold'>
        { user.name }
        </h1>
        <EditInput user={user}  />
        <Link href="/" className='text-2xl font-bold text-blue-500'>Show All Users</Link>
        </div>
  )
}
