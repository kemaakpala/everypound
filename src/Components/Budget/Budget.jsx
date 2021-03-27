import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import BudgetHeader from './BudgetHeader';
import BudgetItemContainer from './BudgetItemContainer';
import BudgetItem from './BudgetItem';

const Budget = () => {
  return (
    <Grid item xs={12} sm={8} md={8}>
      <Paper elevation={0}>
        <Grid container spacing={2} style={{ border: '1px solid black' }}>
          <BudgetHeader groupTitle="Housing" />
          <BudgetItemContainer>
            <BudgetItem name="Mortgage / Rent" />
            <Divider />
            <BudgetItem name="Water Bi annual Bill" />
            <Divider />
            <BudgetItem name="Natural Gas" />
            <Divider />
            <BudgetItem name="Electricity" />
          </BudgetItemContainer>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Budget;