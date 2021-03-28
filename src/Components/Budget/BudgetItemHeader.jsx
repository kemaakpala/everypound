import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  groupLabel: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    '& p': {
      color: 'red',
      paddingLeft: theme.spacing(1)
    }
  }
}));
const BudgetItemHeader = ({ groupTitle }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}
    // style={{ border: '1px solid red' }}
    >
      <Grid container spacing={1} alignItems="center"
      // style={{ border: '1px solid blue' }}
      >
        <Grid item xs={4}>
          <div className={classes.groupLabel}>
            <Avatar>{groupTitle[0].toUpperCase()}</Avatar>
            <Typography variant="h6" component='h1'>{groupTitle}</Typography>
          </div>
        </Grid>
        <Grid item xs={4}><Typography variant="h6" component='h1'>Planned</Typography></Grid>
        <Grid item xs={4}><Typography variant="h6" component='h1'>Actual</Typography></Grid>
      </Grid>
    </Grid>
  )
}

export default BudgetItemHeader;