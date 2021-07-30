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
          <BudgetItem name="Mortgage / Rent" actual={200}/>
          {/* <Divider /> */}
          <BudgetItem name="Water Bi annual Bill" actual={250}/>
          {/* <Divider /> */}
          <BudgetItem name="Natural Gas" actual={200}/>
          {/* <Divider /> */}
          <BudgetItem name="Electricity" actual={82}/>
        </BudgetCategoryContent>
      </BudgetCategory>

      <BudgetCategory>
        <BudgetCategoryHeader title="Food" />
        <BudgetCategoryContent>
          <BudgetItem name="Groceries" actual={250}/>
          <Divider />
          <BudgetItem name="Restaurant" actual={100}/>
          <Divider />
          <BudgetItem name="Lunch" actual={200}/>
          <Divider />
          <BudgetItem name="Take out" actual={100.6}/>
        </BudgetCategoryContent>
      </BudgetCategory>

      <BudgetCategory>
        <BudgetCategoryHeader title="Personal" />
        <BudgetCategoryContent>
          <BudgetItem name="Phone Bill" actual={18}/>
          <Divider />
          <BudgetItem name="Wifeys Phone Bill" actual={47.7}/>
          <Divider />
          <BudgetItem name="Allowance" actual={35}/>
          <Divider />
          <BudgetItem name="Wifeys Allowance" actual={70}/>
        </BudgetCategoryContent>
      </BudgetCategory>
    </Grid>
  )
}

export default Budget;