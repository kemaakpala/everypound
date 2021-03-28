import CSSBaseLine from "@material-ui/core/CSSBaseLine";
// import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Budget from './Components/Budget/Budget'
import Visualization from './Components/Visualization/Visualization';

function App() {
  // const classes = useStyles();
  return (
    <>
      <CSSBaseLine />
      <Container maxWidth="lg">
        <header>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}><Paper>this is the header</Paper></Grid>
          </Grid>
        </header>
        <main>
          <Grid container spacing={2}>
            <Budget />
            {/* <Visualization /> */}
          </Grid>
        </main>
        <footer>this is the footer</footer>
      </Container>
    </>
  );
}

export default App;
