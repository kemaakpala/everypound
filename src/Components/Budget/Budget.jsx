import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import BudgetCategoryHeader from './BudgetCategoryHeader';
import BudgetCategory from './BudgetCategory';
import BudgetCategoryContent from './BudgetCategoryContent';
import BudgetItem from './BudgetItem';

const Budget = () => {
  return (
    <Grid item xs={12} sm={9} md={9}>
      <BudgetCategory>
        <BudgetCategoryHeader title="Housing" />
        <BudgetCategoryContent>
          <BudgetItem name="Mortgage / Rent" />
          {/* <Divider /> */}
          <BudgetItem name="Water Bi annual Bill" />
          {/* <Divider /> */}
          <BudgetItem name="Natural Gas" />
          {/* <Divider /> */}
          <BudgetItem name="Electricity" />
        </BudgetCategoryContent>
      </BudgetCategory>

      <BudgetCategory>
        <BudgetCategoryHeader title="Food" />
        <BudgetCategoryContent>
          <BudgetItem name="Groceries" />
          <Divider />
          <BudgetItem name="Restaurant" />
          <Divider />
          <BudgetItem name="Lunch" />
          <Divider />
          <BudgetItem name="Take out" />
        </BudgetCategoryContent>
      </BudgetCategory>

      <BudgetCategory>
        <BudgetCategoryHeader title="Personal" />
        <BudgetCategoryContent>
          <BudgetItem name="Phone Bill" />
          <Divider />
          <BudgetItem name="Wifeys Phone Bill" />
          <Divider />
          <BudgetItem name="Allowance" />
          <Divider />
          <BudgetItem name="Wifeys Allowance" />
        </BudgetCategoryContent>
      </BudgetCategory>
    </Grid>
  )
}

export default Budget;