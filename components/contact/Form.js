import React, {useState, useEffect} from 'react'
import { Grid, TextField } from '@material-ui/core'

const initialValues={
  from:'',
  to:'',
  subject:'',
  text:'',
  name:'',

}

export default function Form () {
  const [values, setValues] = useState(initialValues)
  return (
    <section>
        <h3>Prendre contact avec moi</h3>
        <form>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <TextField id="standard-basic" label="Votre Nom" value={values.name} />
              <TextField id="standard-basic" label="Votre E-mail" />
            </Grid>
            <Grid item >
              <TextField id="standard-basic" label="Votre Message" />
            </Grid>
          </Grid>
        </form>
    </section>
  )
}