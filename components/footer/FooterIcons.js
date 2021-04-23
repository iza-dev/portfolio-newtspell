import { Instagram, LinkedIn } from '@material-ui/icons'
import Icon from '@material-ui/core/Icon'

export default function HomeIcon (props) {
  return (
    <div>
      <Instagram {...props}>
        <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
      </Instagram>
      <LinkedIn {...props}>
        <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
      </LinkedIn>
      <Icon className='fab fa-artstation' style={{ transform: 'scale(0.8)' }} />
    </div>
  )
}
