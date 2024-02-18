import React from 'react'
import Link from 'next/link'
const HomePage = () => {
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>Next.js Demo</h1>
      <Link href={"/client"} className='btn btn-accent'>GET STARTED</Link>
    </div>
  )
}

export default HomePage
