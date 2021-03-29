import Grid from '@material-ui/core/Grid';

const BudgetCategoryContent = ({children}) => {
  return (
    <Grid
      item xs={12} 
      // style={{ border: '4px solid green' }}
    >
      {children}
    </Grid>
  )
}

export default BudgetCategoryContent;