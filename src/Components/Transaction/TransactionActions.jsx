import Grid from'@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const TransactionActions = () => (
  <>
    <Grid item xs={2}>
      <Button>Track Expense</Button>
    </Grid>
    <Grid item xs={2}>
      <Button>Delete Expense</Button>
    </Grid>
  </>
)

export default TransactionActions;