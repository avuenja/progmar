import styles from '@/styles/components/home/welcome.module.css'

export function Welcome() {
  return(
    <section id="o-que-fazemos" className={`container ${styles.oQueFazemos}`}>
      <div className={styles.welcomeInfo}>
        <h1 className="title">
          Por uma WEB mais inteligente
          <br />e conectada
        </h1>
        <p>Bem vindos à Progmar Technologies, desenvolvendo ideais que conectam as pessoas. Qualidade, inteligência e colaboração.</p>
      </div>
      <img src="/illustrations/welcome.svg" alt="Progmar :: Welcome" />
    </section>
  )
}
