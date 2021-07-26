import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Divider, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import TransactionActions from './TransactionActions';

import { parseFloatAmount } from '../../utils/numberUtils';


const useStyles = makeStyles((theme) => ({
  transactionContainer: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1)
  }
}));

const Transaction = ({ name }) => {
  const [amount, setAmount] = useState(parseFloat('0').toFixed(2));
  // const [actualAmt, setActualAmt] = useState(planned);

  const handleChange = (e) => { setAmount(e.target.value) }
  const handleBlur = (e) => {
    const val = parseFloatAmount(e.target.value)
    const isNan = window.isNaN(val);
    setAmount(parseFloatAmount('0'));
    if (!isNan) {
      setAmount(val);
    }
  }
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.transactionContainer} container spacing={1}>
        <Grid item xs={6}>
          <TextField
            label="Amount"
            id="filled-start-adornment"
            // className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start">£</InputAdornment>,
            }}
            value={amount}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Description"
            InputLabelProps={{ shrink: true }}
            value={name}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="dateOfTransaction"
            label="Date"
            type="date"
            defaultValue="2021-07-22"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-multiline-static"
            label="Note"
            multiline
            rows={4}
            defaultValue="Default Value"
            style={{ width: '100%' }}
          />
        </Grid>
        <TransactionActions />
        <Grid item xs={12}><Divider /></Grid>
      </Grid>
    </>
  )
}

export default Transaction;