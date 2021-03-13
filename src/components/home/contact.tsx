import styles from '@/styles/components/home/contact.module.css'

export function Contact() {
  return(
    <section id="contato" className={`container ${styles.contato}`}>
      <div className={styles.contactInfo}>
        <h2 className="title">
          Mande um oi para nós,
          <br />vamos criar juntos
        </h2>
        <p>Entre em contato conosco, e bata um papo para criarmos juntos uma WEB mais inteligente e conectada.</p>
        <a href="mailto:oi@progmar.dev" className="character-style-title">oi@progmar.dev</a>
      </div>
      <img src="/illustrations/contact.svg" alt="Progmar :: Contact" />
    </section>
  )
}
