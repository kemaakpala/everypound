import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
const Header = () => (
  <footer>
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Divider />
        <Typography variant="body1">this is the footer</Typography>
      </Grid>
    </Grid>
  </footer>
);

export default Header;