import './styles.css';
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Projects';

const useStyles = makeStyles({})

function App() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Switch>
          <Route exact from="/" component={props => <Home {...props} />} />
          <Route exact path="/contact" component={props => <Contact {...props} />} />
          <Route exact path="/about" component={props => <About {...props} />} />
          <Route exact path="/projects" component={props => <Project {...props} />} />
      </Switch>
    </>
  );
}

export default App;
