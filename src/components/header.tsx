import Link from 'next/link'

import styles from '@/styles/components/header.module.css'

export function Header() {
  return(
    <header className={`container ${styles.header}`}>
      <Link href="/">
        <img src="/brand.svg" alt="Progmar" />
      </Link>
      <nav>
        <Link href="#o-que-fazemos">O que fazemos</Link>
        <Link href="#quem-somos">Quem Somos</Link>
        <Link href="#contato">Contato</Link>
      </nav>
    </header>
  )
}
