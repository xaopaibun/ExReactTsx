import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {  Theme, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles, createStyles } from '@material-ui/core';
import { useStyles } from './style';
import Login from './login';
import NewUser from './newuser';


const AntTabs = withStyles({
    indicator: {
        backgroundColor: '#546cfa',
        height: '2px'
    },
})(Tabs);

interface StyledTabProps {
    label: string;
}

const AntTab = withStyles((theme: Theme) =>
    createStyles({
        root: {
            fontSize: '20px',
            textTransform: 'none',
            minWidth: 130,
            fontWeight: theme.typography.fontWeightRegular,
            marginRight: theme.spacing(4),
            '&$selected': {
                color: '#546cfa',
                fontWeight: theme.typography.fontWeightMedium,
            },
            '&:focus': {
                color: '#546cfa',
            },
        },
        selected: {},
    }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);


export default function AuthenTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                <AntTab label="LOGIN" />
                <AntTab label="NEW USER" />
            </AntTabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <Login value={value} index={0} dir={theme.direction} />
                <NewUser value={value} index={1} dir={theme.direction} />
            </SwipeableViews>
        </div>
    );
}