import { summaryItems } from "./data";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <div className={styles.resultContainer}>
          <h1 className={styles.title}>Your Result</h1>
          <div className={styles.circle}>
            <span className={styles.valueHero}>76</span>
            <span className={styles.totalHero}>of 100</span>
          </div>
          <span className={styles.tag}>Great</span>
          <span className={styles.tagDesc}>
            You scored higher than 65% of the people who have taken these tests.
          </span>
        </div>
        <div className={styles.summaryContainer}>
          <h2 className={styles.title}>Summary</h2>
          <ul className={styles.itemsContainer}>
            {summaryItems.map((item, index) => (
              <li
                key={index}
                className={`${styles.item} ${styles[item.className]}`}
              >
                <span className={`${styles.corner} ${styles.topLeft}`} />
                <span className={`${styles.corner} ${styles.bottomLeft}`} />
                <span className={`${styles.corner} ${styles.bottomRight}`} />
                <span className={`${styles.corner} ${styles.topRight}`} />
                <img
                  className={styles.icon}
                  src={item.icon.src}
                  alt={item.icon.alt}
                />
                <span className={styles.label}>{item.label}</span>
                <div className={styles.score}>
                  <span className={styles.value}>{item.score.value}</span>
                  <span className={styles.separator}>/</span>
                  <span className={styles.total}>{item.score.total}</span>
                </div>
              </li>
            ))}
          </ul>
          <button className={styles.btn}>
            <span>Continue</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
