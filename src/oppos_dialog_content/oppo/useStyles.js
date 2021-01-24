import { makeStyles } from '@material-ui/core/styles'
import { green, red } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  dealCard: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    textAlign: 'left',
  },
  timeCard: {
    textAlign: 'left',
    width: theme.spacing(18),
    height: theme.spacing(12),
  },
  peopleCard: {
    width: theme.spacing(18),
    height: theme.spacing(12),
    textAlign: 'left',
  },
  peopleText: {
    lineHeight: 1,
  },
  postButton: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    textTransform: 'none',
    fontWeight: 'bold',
  },
  arrowButton: {
    width: theme.spacing(5.5),
    height: theme.spacing(5.5),
    backgroundColor: theme.palette.grey[800],
    color: 'white',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: theme.palette.grey[500],
    },
  },
  titleText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    height: '100%',
  },
  postContainer: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  error: {
    color: red[400],
  },
  success: {
    color: green[400],
  },
}))

export default useStyles
