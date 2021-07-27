import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionActions from '@material-ui/core/AccordionActions';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import format from 'date-fns/format';
import { parseFloatAmount } from '../../utils/numberUtils';


const useStyles = makeStyles((theme) => ({
  transactionContainer: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1)
  },
  details: {
    flexDirection: 'column'
  },
  column: {
    flexBasis: '33.33%',
  },
}));

const Transaction = ({ name }) => {
  const [amount, setAmount] = useState(parseFloat('0').toFixed(2));
  const [summaryTitle, setSummaryTitle] = useState(name);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (e) => { setAmount(e.target.value) }
  const handleBlur = (e) => {
    const val = parseFloatAmount(e.target.value)
    const isNan = window.isNaN(val);
    setAmount(parseFloatAmount('0'));
    if (!isNan) {
      setAmount(val);
    }
  }

  const handleChangeTitle = (e) => { setSummaryTitle(e.target.value) }
  const handleBlurTitle = (e) => {
    setSummaryTitle(e.target.value)
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  const classes = useStyles();
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{summaryTitle}</Typography>
          </div>

          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}> £{amount}</Typography>
          </div>

          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}> {format(selectedDate, "yyyy/MM/dd")}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
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
                value={summaryTitle}
                onChange={handleChangeTitle}
                onBlur={handleBlurTitle}
              />
            </Grid>
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="yyyy/MM/dd"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
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
          </Grid>
          <AccordionActions>
            <Button size="small">Track Expense</Button>
            <Button size="small" color="secondary">Delete Expense</Button>
          </AccordionActions>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Transaction;