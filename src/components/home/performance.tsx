import styles from '@/styles/components/home/performance.module.css'

export function Performance() {
  return(
    <section className={`container ${styles.performance}`}>
      <img src="/illustrations/performance.svg" alt="Progmar :: Performance" />
      <div className={styles.performanceInfo}>
        <h2 className="title">
          Desenvolvendo aplicações com
          <br />alto desempenho
        </h2>
        <p>A Progmar Technologies vem com uma missão, de tornar a WEB um lugar mais inteligente, desenvolvendo aplicações com alto desempenho e satisfação para seus clientes.</p>
      </div>
    </section>
  )
}
