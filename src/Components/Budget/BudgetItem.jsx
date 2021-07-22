import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { parseFloatAmount } from '../../utils/numberUtils';
import { Button } from '@material-ui/core';
import Transaction from '../Transaction/Transaction';


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
  },
  budgetTransactionContainer: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1)
  }
}));
const BudgetItem = ({ name, actual }) => {
  const classes = useStyles();
  const [planned, setPlanned] = useState(parseFloat('0').toFixed(2));
  const [progressVal, setProgressVal] = useState(0);
  // const [actualAmt, setActualAmt] = useState(planned);

  const handleChange = (e) => { setPlanned(e.target.value) }
  const handleBlur = (e) => {
    const val = parseFloatAmount(e.target.value)
    const isNan = window.isNaN(val);
    setPlanned(parseFloatAmount('0'));
    if (!isNan) {
      setPlanned(val);
      setProgressVal(pctVal(val, actual));
    }
  }

  const pctVal = (numerator, denominator) => (numerator - denominator) * 100 / (numerator - denominator);

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
          <Typography>£{parseFloatAmount(actual)}</Typography>
        </Grid>
        <Grid item xs={2} align="right">
          <IconButton aria-label="delete" className={classes.deleteBtn} title="Add Transaction Item">
            <AddIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="delete" className={classes.deleteBtn} title="Delete Budget Item">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <div style={{ position: 'relative' }}>
            {
              progressVal === 0
                ? <LinearProgress variant="determinate" value={0} style={{ position: 'absolute', width: '100%', height: '1px' }} />
                : <LinearProgress variant="determinate" value={progressVal} />
            }
          </div>
        </Grid>
        <Grid item xs={12}>
          <Transaction name={name} collapsed />
          <Transaction name={name} collapsed />
          <Transaction name={name} collapsed />
        </Grid>
      </Grid>
    </>
  )
}

export default BudgetItem;