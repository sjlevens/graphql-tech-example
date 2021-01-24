import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Oppo from './oppo'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    paddingTop: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: 'none',
    boxShadow: 'none',
  },
  heroTitle: {
    fontWeight: 'bold',
  },
}))

const OpposDialogContent = ({ data: { opposForToday } }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography className={classes.heroTitle} color="primary" variant="h3">
            Daily Opportunities
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" color="textSecondary">
            Our AI model has identified the following opportunities for your venue today.
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={4}>
            {opposForToday.map((oppo, idx) => (
              <Grid item key={'oppo-row' + idx}>
                <Oppo key={'oppo' + idx} oppo={oppo} idx={idx} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default OpposDialogContent
