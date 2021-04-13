import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Projects';

const useStyles = makeStyles({})

export default function App() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Router>
                <Header />
                <Switch>
                    <Route exact from="/" render={props => <Home {...props} />} />
                    <Route exact path="/contact" render={props => <Contact {...props} />} />
                    <Route exact path="/about" render={props => <About {...props} />} />
                    <Route exact path="/projects" render={props => <Project {...props} />} />
                </Switch>
            </Router>
        </div>
    );
}