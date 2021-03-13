import Link from 'next/link'

import styles from '@/styles/components/footer.module.css'

export function Footer() {
  return(
    <footer className={styles.footer}>
      <div className="container character-style-footer">
        <div className={styles.rights}>
        <Link href="/">
            <img src="/logo-inverter.svg" alt="Progmar" />
            </Link>
          <p>© Progmar Technologies.</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div className={styles.socials}>
          <a href="http://instagram.com/progmar.dev" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Progmar :: Instagram" />
          </a>
          <a href="http://linkedin.com/company/progmartech" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="Progmar :: LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  )
}
