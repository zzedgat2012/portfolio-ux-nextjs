import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>design - Edgar Ferreira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Hi! It's Edgar! 👋</h1>

        <p className={styles.description}>
          I'm an UX Designer, based on Aracaju-SE, Brazil!
        </p>

        <div className={styles.grid}>
          <a href="https://projects.edgar-ferreira.com/" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Find out my recent projects and case studies.</p>
          </a>

          <a href="https://blog.edgar-ferreira.com/" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>The place where I wrote about UX & Tech.</p>
          </a>

          <a
            href="https://anchor.fm/musubi/"
            className={styles.card}
          >
            <h3>Podcast &rarr;</h3>
            <p>Personal project where we conduct enterviews and talk-shows.</p>
          </a>

          <a
            href="https://www.instagram.com/edgarferreira95/"
            className={styles.card}
          >
            <h3>Social &rarr;</h3>
            <p>Need to know me a bit more? Just check out my Instagram.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
