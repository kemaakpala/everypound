import Grid from'@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const TransactionActions = () => (
  <>
    <Grid item xs={6}></Grid>
    <Grid item xs={3} align="center">
      <Button>Track Expense</Button>
    </Grid>
    <Grid item xs={3} align="center">
      <Button color="secondary">Delete Expense</Button>
    </Grid>
  </>
)

export default TransactionActions;