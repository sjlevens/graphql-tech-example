import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core/styles'
import { Dialog, IconButton, Grid, Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import OpposDialogContent from './oppos_dialog_content'
import { OPPOS_QUERY } from 'graphql/querys'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: '100vh',
    backgroundImage: 'url(/bgimage.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  exit: {
    display: 'flex',
    alignContent: 'flex-end',
    width: '100%',
  },
  exitText: {
    color: theme.palette.grey[500],
  },
  grid: {
    height: '100%',
  },
}))

const App = () => {
  const { loading, called, data = { opposForToday: [] } } = useQuery(OPPOS_QUERY)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (called && !loading) setOpen(true)
  }, [called, loading])

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Button variant="contained" size="large" color="primary" onClick={handleOpen}>
            Open Modal
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <Grid container direction="row" justify="flex-end">
          <Grid item>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Grid>
        </Grid>
        <OpposDialogContent data={data} />
      </Dialog>
    </div>
  )
}

export default App
