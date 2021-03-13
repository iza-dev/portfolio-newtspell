import style from './Works.module.css'

export default function Works () {
  return (
    <section className={style.wrapperWorks}>
        <div className={style.work} style={{backgroundImage: 'url(\'https://picsum.photos/id/699/800/530\')'}}></div>
        <div className={style.work} style={{backgroundImage: 'url(\'https://picsum.photos/id/656/800/530\')'}}></div>
        <div className={style.work} style={{backgroundImage: 'url(\'https://picsum.photos/id/645/800/530\')'}}></div>
        <div className={style.work} style={{backgroundImage: 'url(\'https://picsum.photos/id/689/800/530\')'}}></div>
        <div className={style.work} style={{backgroundImage: 'url(\'https://picsum.photos/id/616/800/530\')'}}></div>
        <div className={style.work} style={{backgroundImage: 'url(\'https://picsum.photos/id/601/800/530\')'}}></div>
    </section>
  )
}
