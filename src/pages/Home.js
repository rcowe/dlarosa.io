import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeScroll from '../components/Home-Scroll';
import RosaProjects from "../components/RosaProjects";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

}));
export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HomeScroll />
            <RosaProjects />
        </div>

    );
}