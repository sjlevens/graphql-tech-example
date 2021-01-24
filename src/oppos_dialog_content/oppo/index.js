import { useState } from 'react'
import { useMutation } from '@apollo/client'
import {
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button,
  CircularProgress,
} from '@material-ui/core'
import { ExpandLess, ExpandMore, Done, Error } from '@material-ui/icons'
import useStyles from './useStyles'
import makeTimeString from 'utils/make-time-string'
import getNumericDiscount from 'utils/get-numeric-discount'
import { POST_OPPO } from 'graphql/mutations'

const Oppo = ({ oppo: { discount, endTime, objectId, prediction, startTime }, idx }) => {
  const [postOppo, { loading, error, called }] = useMutation(POST_OPPO, {
    errorPolicy: 'ignore',
  })
  const [customDiscount, setCustomDiscount] = useState(getNumericDiscount(discount))

  const handlePostOppo = () => {
    try {
      postOppo({ variables: { oppoId: objectId } })
    } catch (err) {
      console.error(err)
    }
  }

  const handleIncrease = () => setCustomDiscount(cur => cur + 5)
  const handleDecrease = () => setCustomDiscount(cur => cur - 5)

  const classes = useStyles()

  return (
    <Grid container direction="column" alignItems="flex-start">
      <Typography className={classes.titleText} variant="h6" color="textPrimary">{`Opportunity ${
        idx + 1
      }`}</Typography>
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <Card className={classes.dealCard}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">{`Deal`}</Typography>
              <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item>
                  <Typography variant="h4" color="primary">
                    {customDiscount}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" color="primary">
                    {'%'}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="space-between"
            className={classes.buttonContainer}
          >
            <Grid item>
              <IconButton
                disabled={called || customDiscount >= 50}
                onClick={handleIncrease}
                className={classes.arrowButton}
              >
                <ExpandLess />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                disabled={called || customDiscount <= 10}
                onClick={handleDecrease}
                className={classes.arrowButton}
              >
                <ExpandMore />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Card>
            <CardContent className={classes.timeCard}>
              <Typography variant="subtitle1" color="textSecondary">{`Time`}</Typography>
              <Typography variant="h6">{makeTimeString({ startTime, endTime })}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent className={classes.peopleCard}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                className={classes.peopleText}
              >{`Estimated Customers`}</Typography>
              <Typography variant="h6">{prediction}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.postContainer}
          >
            <Grid item>
              {!called ? (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.postButton}
                  onClick={handlePostOppo}
                >{`Post Now`}</Button>
              ) : loading ? (
                <CircularProgress className={classes.progress} size={20} />
              ) : error ? (
                <Error className={classes.error} />
              ) : (
                <Done className={classes.success} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Oppo
