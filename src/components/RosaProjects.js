import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';
import projects from '../static/projects';
import useWindowPosition from '../hooks/useWindowPosition';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
}));

export default function () {
    const classes = useStyles();
    const checked = useWindowPosition('container');
    return (
        <div className={classes.root} id="rosa-projects">
            <Card place={projects[1]} checked={checked} />
            <Card place={projects[0]} checked={checked} />
            <Card place={projects[2]} checked={checked} />
        </div>
    );
}