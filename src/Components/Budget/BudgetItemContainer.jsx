import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import BudgetItemActions from './BudgetItemActions';
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1)
  }
}))
const BudgetItemContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0} variant="outlined">
      <Grid container spacing={2}
      // style={{ border: '1px solid black', margin: '8px 0 0 0' }}
      >
        <Grid item xs={12}
        // style={{ border: '4px solid green' }}
        > {children}</Grid>
        <BudgetItemActions />
      </Grid>
    </Paper>
  )
}

export default BudgetItemContainer;