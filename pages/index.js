import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edgar Ferreira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        <button className={styles.card}>
          Home
        </button>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Edgar Ferreira</h1>

        <p className={styles.description}>
          I'm UX Designer, based on Aracaju-SE, Brazil!
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Find out my recent projects and case studies.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>The place where I wrote about UX & Tech.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Podcast &rarr;</h3>
            <p>Personal project where we conduct enterviews and talk-shows.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Social &rarr;</h3>
            <p>Need to know me a bit more? Just check out my Instagram.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
