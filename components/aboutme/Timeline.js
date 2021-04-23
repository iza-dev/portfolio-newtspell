import style from './Timeline.module.css'

export default function Timeline () {
  return (
    <section className={style.timeline}>
      <ol>
        <li>
          <div>
            <time>Avant</time>
            Some content here
          </div>
        </li>
        <li>
          <div>
            <time>2017</time>
            Some content here
          </div>
        </li>
        <li>
          <div>
            <time>2018</time>
            Some content here
          </div>
        </li>
        <li>
          <div>
            <time>2019</time>
            Some content here
          </div>
        </li>
        <li>
          <div>
            <time>2020</time>
            Some content here
          </div>
        </li>
        <li>
          <div>
            <time>2021</time>
            Some content here
          </div>
        </li>
      </ol>
    </section>

  )
}
