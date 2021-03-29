import {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import {parseFloatAmount} from '../../utils/numberUtils';


const useStyles = makeStyles((theme) => ({
  budgetItemContainer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  deleteBtn: {
    marginLeft: theme.spacing(1),
    padding: 0
  },
  planned: {
    '& input': {
      textAlign: 'right'
    }
  }
}));
const BudgetItem = ({name}) => {
  const classes = useStyles();
  const [planned, setPlanned] = useState(parseFloat('0').toFixed(2));

  const handleChange = (e) => { setPlanned(e.target.value) }
  const handleBlur = (e) => {
    const val = parseFloatAmount(e.target.value)
    const isNan = window.isNaN(val);
    setPlanned(parseFloatAmount('0'));
    if (!isNan){
      setPlanned(val)
    }
  }

  return (
    <>
      <Grid className={classes.budgetItemContainer} container spacing={1} alignItems="flex-end">
        <Grid item xs={4}>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item xs={3} align="right">
          <TextField
            className={classes.planned}
            InputProps={{
              startAdornment: <InputAdornment position="start">£</InputAdornment>
            }}
            value={planned}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={3} align="right">
          <Typography>£0.00</Typography>
        </Grid>
        <Grid item xs={2} align="right">
        <IconButton aria-label="delete" className={classes.deleteBtn}>
          <DeleteIcon fontSize="small" />
        </IconButton>
        </Grid>
      </Grid>
    </>
  )
}

export default BudgetItem;