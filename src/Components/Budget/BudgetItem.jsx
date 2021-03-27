import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';

const BudgetItem = ({name}) => {
  return (
    <>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item xs={4}>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            InputProps={{
              startAdornment: <InputAdornment position="start">£</InputAdornment>
            }}
            defaultValue='0.00'
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>£0.00</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default BudgetItem;