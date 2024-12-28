import React from 'react';
import styles from './QuestionnaireLayout.module.css';

export default function QuestionnaireLayout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.brandSection}>
            <h1 className={styles.brandName}>BLOODCONNECT.</h1>
            <nav className={styles.navigation}>
              <a href="/" className={styles.navLink}>Home</a>
              <a href="/about" className={styles.navLink}>About Us</a>
              <a href="/faq" className={styles.navLink}>FAQs</a>
            </nav>
          </div>
          <div className={styles.userSection}>
            <span className={styles.username}>Username</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/434e834a9098f4c3f02c261749dd36a27fd510d05e7b7579aa6c9bfd60383283?placeholderIfAbsent=true&apiKey=f57fde44dc854af1bb149ad964888ac0" alt="" className={styles.avatar} />
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}