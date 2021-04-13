import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectPage from "../components/ProjectPage";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg2.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

}));
export default function Project() {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <ProjectPage />
            </div>

    );
}