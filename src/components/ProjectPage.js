import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';
import projects from '../static/projects';

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
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root} id="rosa-projects">
            <Card place={projects[1]} checked={checked} />
            <Card place={projects[0]} checked={checked} />
            <Card place={projects[2]} checked={checked} />
        </div>
    );
}