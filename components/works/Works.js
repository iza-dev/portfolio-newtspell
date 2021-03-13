import styles from './Works.module.css'

export default function Works () {
  // tableau des works
  return (
    <section className={styles.wrapperWork}>
        <div className={styles.work} style={{backgroundImage: 'url(\'https://picsum.photos/id/687/800/530\')'}}></div>
        <div className={styles.work} style={{backgroundImage: 'url(\'https://picsum.photos/id/610/800/530\')'}}></div>
        <div className={styles.work} style={{backgroundImage: 'url(\'https://picsum.photos/id/628/800/530\')'}}></div>
        <div className={styles.work} style={{backgroundImage: 'url(\'https://picsum.photos/id/688/800/530\')'}}></div>
        <div className={styles.work} style={{backgroundImage: 'url(\'https://picsum.photos/id/614/800/530\')'}}></div>
        <div className={styles.work} style={{backgroundImage: 'url(\'https://picsum.photos/id/602/800/530\')'}}></div>
    </section>
  )
}
