
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AuthenTabs from './tabview';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '100vh',
            width: '100%',
            overflow: 'hidden'
        },
        boxLeft: {
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#536DFE',
        },
        boxRight: {
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f6f7ff',
        },
        paper: {
            height: '100px',
            width: '800px',
        },
        logoText: {
            color: 'white',
            fontSize: '84px',
            fontWeight: 500,
            marginTop: '20px'
        }, imglogo: {

        },
        boxcenter: {
            display: 'contents',
        },
        copy_right: {
            color: "#536DFE",
            position: "absolute",
            bottom: '5px',
        }
    }),
);




const Authen: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={7} className={classes.boxLeft}>
                    <div className={classes.boxcenter}>
                        <img src="https://flatlogic.github.io/react-material-admin/static/media/logo.3d432ca2.svg" className={classes.imglogo} />
                        <p className={classes.logoText}> Material Admin </p>
                    </div>
                </Grid>
                <Grid item xs={5} className={classes.boxRight}>
                    <AuthenTabs />
                    <p className={classes.copy_right}> © 2014-2021 Flatlogic, LLC. All rights reserved</p>

                </Grid>

            </Grid>
        </div>
    );
}
export default Authen;