import Grid from "@material-ui/core/Grid";
import Budget from './Components/Budget/Budget'
import Layout from './Container/Layout/Layout'
import Visualization from './Components/Visualization/Visualization';

const App = () => (
  <Layout>
    <Grid container spacing={2}>
      <Budget />
      <Visualization />
    </Grid>
  </Layout>
);

export default App;
