import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import BudgetHeader from './BudgetHeader';
import BudgetItemContainer from './BudgetItemContainer';
import BudgetItemContent from './BudgetItemContent';
import BudgetItem from './BudgetItem';

const Budget = () => {
  return (
    <Grid item xs={12} sm={8} md={8}>
      <BudgetItemContainer>
        <BudgetHeader groupTitle="Housing" />
        <BudgetItemContent>
          <BudgetItem name="Mortgage / Rent" />
          <Divider />
          <BudgetItem name="Water Bi annual Bill" />
          <Divider />
          <BudgetItem name="Natural Gas" />
          <Divider />
          <BudgetItem name="Electricity" />
        </BudgetItemContent>
      </BudgetItemContainer>

      <BudgetItemContainer>
        <BudgetHeader groupTitle="Food" />
        <BudgetItemContent>
          <BudgetItem name="Groceries" />
          <Divider />
          <BudgetItem name="Restaurant" />
          <Divider />
          <BudgetItem name="Lunch" />
          <Divider />
          <BudgetItem name="Take out" />
        </BudgetItemContent>
      </BudgetItemContainer>

      <BudgetItemContainer>
        <BudgetHeader groupTitle="Personal" />
        <BudgetItemContent>
          <BudgetItem name="Phone Bill" />
          <Divider />
          <BudgetItem name="Wifeys Phone Bill" />
          <Divider />
          <BudgetItem name="Allowance" />
          <Divider />
          <BudgetItem name="Wifeys Allowance" />
        </BudgetItemContent>
      </BudgetItemContainer>
    </Grid>
  )
}

export default Budget;