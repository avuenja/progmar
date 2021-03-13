import styles from '@/styles/components/home/team.module.css'

export function Team() {
  return(
    <section className={`container ${styles.team}`}>
      <div className={styles.members}>
        <div>
          <img src="/avatars/marcelo.png" alt="Marcelo Pecin" className={styles.avatar} />
          <p>Marcelo Pecin | CTO</p>
          <div className={styles.socials}>
            <a href="http://instagram.com/celopeccin" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram-inverse.svg" alt="Marcelo Pecin :: Instagram" />
            </a>
            <a href="http://linkedin.com/in/celopeccin" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin-inverse.svg" alt="Marcelo Pecin :: LinkedIn" />
            </a>
          </div>
        </div>
        <div>
          <img src="/avatars/giovana.jpeg" alt="Giovana Schnorr" className={styles.avatar} />
          <p>Giovana Schnorr | Designer</p>
          <div className={styles.socials}>
            <a href="http://instagram.com/gischnorr" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram-inverse.svg" alt="Giovana Schnorr :: Instagram" />
            </a>
            <a href="http://linkedin.com/in/gioschnorr/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin-inverse.svg" alt="Giovana Schnorr :: LinkedIn" />
            </a>
          </div>
        </div>
        <div>
          <img src="/avatars/william.jpeg" alt="William David" className={styles.avatar} />
          <p>William David | Developer</p>
          <div className={styles.socials}>
            <a href="http://instagram.com/williamd_cwb" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram-inverse.svg" alt="William David :: Instagram" />
            </a>
            <a
              href="http://linkedin.com/in/william-david-56a085b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/linkedin-inverse.svg" alt="William David :: LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.teamInfo}>
        <h2 className="title">
          Junto com o melhor time para
          <br />criarmos e irmos sempre além
        </h2>
        <p>O melhor time de profissionais que estão sempre prontos para o desafio, e lhe ajudando na melhor solução. Tornando assim, uma WEB mais inteligente e conectada.</p>
      </div>
    </section>
  )
}
