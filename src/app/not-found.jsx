import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div>
        <h1>page not found</h1>
        <Link href="/">Go to home</Link>
    </div>
  )
}

export default notFound