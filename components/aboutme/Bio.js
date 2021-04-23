import style from './Bio.module.css'
import { Typography } from '@material-ui/core'

export default function Bio () {
  return (
    <section>
      <Typography variant='h3' className={style.titre}> Je suis un créatif  </Typography>
      <Typography variant='h4' className={style.sousTitre}>Développeur & CG Artist</Typography>
    <div className={style.bioWrapper}>

      <figure className={style.citation}>
        <blockquote className={style.blockquote} >
            <p>Je veux réaliser de superbes scènes sci-fi ou fantastique avec un enviro from scratch et y ajouter du FX</p>
        </blockquote>
      </figure>

      <p className={style.biographie}>
        Etant technophile depuis très jeune, j'ai commencé à m'autoformer à la 3D par curiosité. Et j'ai eu un réel coup de coeur! J'aime les possibilité créatice qu'offre l'univers de la 3D ainsi que la satisfaction qu'apporte un travail de plusieurs jours (ou plusieurs semaines). Après avoir essayé la modelisation hardsurface avec Maya, le sculpt organique avec Zbrush, le texturing avec Substance Painter. J'ai commencé récement à suivre des formations Houdini afin de réaliser du FX et de l'environnement. J'ai pour objectif de me spécialiser dans ces deux domaines.
      </p>

      </div>
    </section>
  )
}
