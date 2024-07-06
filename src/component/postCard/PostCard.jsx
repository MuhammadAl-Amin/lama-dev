import React from 'react'
import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
        <div className={styles.imgContainer}>
            <Image src="/profile.jpg" alt='' fill className={styles.img}></Image>
            
        </div>
        <span className={styles.date}>Nov 03 2023</span>
        </div>
        <h2>{post.title}</h2>
        <h5 >{post.body}</h5>
        <Link href={`/blog/${post.id}`}><span className={styles.button}>Read More</span></Link>
    </div>
  )
}

export default PostCard