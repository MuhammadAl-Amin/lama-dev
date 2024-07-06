import React from 'react';
import styles from './blog.module.css'
import PostCard from '@/component/postCard/PostCard';
import error from '../error';
import { getPosts } from '@/lib/data';

// with api ...............
// const getData = async () =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate: 3600}})
//   if(!res.ok){
//     throw new error('Something went to wrong')
//   }
//   return res.json()
// }
const BlogPage = async () => {

  // with api .............
  // const posts = await getData()

  // withOut api ..............

  const posts = await getPosts()
  
  return (
    <div className={styles.container}>
      {
        posts.map(post =><PostCard key={post.id} post={post}></PostCard>)
      }
      
    </div>
  )
}

export default BlogPage