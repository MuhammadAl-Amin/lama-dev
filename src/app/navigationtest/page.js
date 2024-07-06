"use client"
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    
    const q = searchParams.get('by')
// console.log(pathname, q)

const setQueryParams = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('by', 'example')
    params.set('q', 'queryValue')
    router.push(`${pathname}?${params.toString()}`)
}
    const handleButton = () =>{
        // console.log('clicked');
        router.back()
    }
  return (
    <div>
        <Link href="/" prefetch={false}>Click here</Link>
        <button onClick={handleButton}>click here for redirect</button>
        <button onClick={setQueryParams}>Set Query Params</button>
    </div>
  )
}

export default page