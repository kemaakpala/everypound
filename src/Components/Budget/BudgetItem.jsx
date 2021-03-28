import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  budgetItemContainer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));
const BudgetItem = ({name}) => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.budgetItemContainer} container spacing={1} alignItems="flex-end">
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