import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
const Header = () => (
  <header>
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Typography variant="h2" component="h1">March</Typography>
        <Typography variant="h3" component="h2">£0.00</Typography>
        <Divider />
      </Grid>
    </Grid>
  </header>
)

export default Header;