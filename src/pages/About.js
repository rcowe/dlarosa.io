import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '../components/Timeline';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundSize: 'cover',
        background: "linear-gradient(45deg, #0000ff 30%, #4b0082 90%)",
    },

}));

export default function About() {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <Timeline/>
            </div>
    );
}