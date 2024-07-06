import React, { Suspense } from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import PostUser from '@/component/postUser/postUser'
import { getPost } from '@/lib/data'

// with API ...................
// const getData = async (slug) =>{
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//   if(!res.ok){
//     throw new error('Something went to wrong')
//   }
//   return res.json()
// }
const SingleBlogPage = async ({params}) => {
  const {slug} = params;
  // with api ............
  // const post = await getData(slug);

  // withOut api .............
  const post = await getPost(slug)

  return (
    <div className={styles.container}>
      
      <div className={styles.imgContainer}>
        <Image src="/profile.jpg" alt='' fill className={styles.img}></Image>
      </div>
      <div className={styles.profileContainer}>
        <p className={styles.title}>{post.title}</p>
       <div>
       <Suspense fallback={<div>Loading....</div>}>
       <PostUser userId={post.userId}></PostUser>
       </Suspense>
       </div>
        <p className={styles.dsc}>{post.body}</p>
      </div>
    </div>
  )
}

export default SingleBlogPage