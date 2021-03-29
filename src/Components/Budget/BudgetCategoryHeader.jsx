import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  categoryLabel: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    '& h1': {
      paddingLeft: theme.spacing(1)
    }
  }
}));
const BudgetCategoryHeader = ({ title }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}
    // style={{ border: '1px solid red' }}
    >
      <Grid container spacing={1} alignItems="center"
      // style={{ border: '1px solid blue' }}
      >
        <Grid item xs={4}>
          <div className={classes.categoryLabel}>
            <Avatar>{title[0].toUpperCase()}</Avatar>
            <Typography variant="h6" component='h1'>{title}</Typography>
          </div>
        </Grid>
        <Grid item xs={3}><Typography variant="h6" component='h1' align="right">Planned</Typography></Grid>
        <Grid item xs={3}><Typography variant="h6" component='h1' align="right">Actual</Typography></Grid>
        <Grid item xs={2}><Typography variant="h6" component='h1' align="right"></Typography></Grid>
      </Grid>
    </Grid>
  )
}

export default BudgetCategoryHeader;