import CSSBaseLine from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Layout = ({ children }) => (
    <>
      <CSSBaseLine />
      <Container maxWidth="lg">
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
);

export default Layout;