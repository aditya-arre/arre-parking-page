import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/arre-logo.png" alt="Logo" className={styles.logo} />
        <img src="/arreVoiceLogo.svg" alt="Logo" className={styles.logo} />
      </footer>
    </>
  )
}
