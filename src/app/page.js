
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
<div className={styles.container}>
<div className={styles.textContainer}>
      <h1 className={styles.title}>Creative thought agency.</h1>
      <p className={styles.description}>Wh-questions begin with what, when, where, who, whom, which, whose, why and how. We use them to ask for information. The answer cannot be yes or no:.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>learn more</button>
        <button className={styles.button}>contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandsImg}></Image>
      </div>

    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroGif}></Image>
    </div>
</div>
  );
}
