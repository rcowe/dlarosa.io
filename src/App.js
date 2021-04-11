import logo from './logo.svg';
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
    <div className="App">
      <Header />
      <Switch>
        <Route />
      </Switch>

    </div>
  );
}

export default App;
