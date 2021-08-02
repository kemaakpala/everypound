import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DeleteIcon from '@material-ui/icons/Delete';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { parseFloatAmount } from '../../utils/numberUtils';
import Box from '@material-ui/core/Box';
import Transaction from '../Transaction/Transaction';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  budgetItemContainer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  deleteBtn: {
    marginLeft: theme.spacing(1),
    padding: 0
  },
  expandTransactionBtn: {
    '&.expanded': {
      transform: 'rotate(180deg)',
    },
    marginLeft: theme.spacing(1),
    transform: 'rotate(0deg)',
    transition: '150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  collapseTransactionBtn: {
    marginLeft: theme.spacing(1),
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
    paddingBottom: theme.spacing(1),
    border: '1px solid' + theme.palette.primary.dark
  }
}));

const BudgetItem = ({ name }) => {
  const [planned, setPlanned] = useState(parseFloat('0').toFixed(2));
  const [progressVal, setProgressVal] = useState(0);
  const [toggleExpanded, setToggleExpanded] = useState(true);

  const classes = useStyles();
  const [actual, setActual] = useState(0);

  const handleChange = (e) => { setPlanned(e.target.value) }
  const handleBlur = (e) => {
    const val = parseFloatAmount(e.target.value)
    const isNan = window.isNaN(val);
    setPlanned(parseFloatAmount('0'));
    if (!isNan) {
      setPlanned(val);
      setProgressVal(pct(actual, val));
    }
  }

  const handleToggleTransaction = (e) => { setToggleExpanded(!toggleExpanded) }
  const pct100 = (val) => (val > 100) ? 100 : val;
  const pct = (numerator, denominator) => {
    let result = numerator/denominator * 100;
    return pct100(result);
  };
  // const normalize = (value, max, min) => (value - min) * 100 / (max - min);
  const toggleExpandedClass = clsx(classes.expandTransactionBtn, toggleExpanded && 'expanded')

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
          <IconButton aria-label="delete" className={classes.deleteBtn} title="Delete Item Btn">
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="expand transaction Button"
            className={toggleExpandedClass}
            title="Expand Transaction Button"
            onClick={handleToggleTransaction}
          >
            <ExpandLessIcon fontSize="small" />
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
          <Collapse in={!toggleExpanded}>
            <Box className={classes.budgetTransactionContainer}>
              <h3>Transactions</h3>
              <div><Button>Add New</Button></div>
              <Transaction name={name} collapsed />
            </Box>
          </Collapse>
        </Grid>
      </Grid>
    </>
  )
}

export default BudgetItem;