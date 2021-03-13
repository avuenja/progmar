import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Contact } from '@/components/home/contact'
import { Performance } from '@/components/home/performance'
import { Team } from '@/components/home/team'
import { Tech } from '@/components/home/tech'
import { Welcome } from '@/components/home/welcome'

import styles from '@/styles/pages/home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Welcome />
        <Performance />
        <Tech />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
