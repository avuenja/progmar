import styles from '@/styles/components/home/tech.module.css'

export function Tech() {
  return(
    <section id="quem-somos" className={`container ${styles.quemSomos}`}>
      <div className={styles.techInfo}>
        <h2 className="title">
          Usando o que há de melhor,
          <br />para fazer o que há de melhor
        </h2>
        <p>Utilizamos as melhores linguagens para criarmos juntos o que há de melhor. Desbrave conosco com as melhores tecnologias.</p>
      </div>
      <div className={styles.techLangs}>
        <div>
          <img src="/langs/php.svg" alt="Progmar :: PHP" />
        </div>
        <div>
          <img src="/langs/flutter.svg" alt="Progmar :: Flutter" />
        </div>
        <div>
          <img src="/langs/vue.svg" alt="Progmar :: VueJs" />
        </div>
        <div>
          <img src="/langs/react.svg" alt="Progmar :: React & React Native" />
        </div>
      </div>
    </section>
  )
}
