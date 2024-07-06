import Image from "next/image";
import styles from "./postUser.module.css";

import React from "react";
import { getUser } from "@/lib/data";

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new error("Something went to wrong");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // const user = await getData(userId);

  const user = await getUser(userId)
  

  return (
    <div className={styles.postContainer}>
      
      <div className={styles.container}>
        <div className={styles.profileImgContainer}>
          <Image
            src="/profile.jpg"
            alt=""
            fill
            className={styles.profileImg}
          ></Image>
        </div>
        <div>
          <p className={styles.author}>Author</p>
          <p className={styles.name}>{user.name}</p>
        </div>
        <div>
          <p className={styles.publish}>Publish</p>
          <p className={styles.date}>july 4 2099</p>
        </div>
      </div>
    </div>
  );
};

export default PostUser;
