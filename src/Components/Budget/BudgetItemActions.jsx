import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const BudgetItemActions = () => (
  <Grid item xs={12}>
    <Divider />
    <Button>Add Transaction</Button>
  </Grid>
)

export default BudgetItemActions;