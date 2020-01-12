import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ImgMediaCard from './Delete ';
import { Scrollbars } from 'react-custom-scrollbars';
import color from '@material-ui/core/colors/amber';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root_left_side: {
        flexGrow: 5,
        backgroundColor: theme.palette.background.paper,
        height: '400px',
    },

}));

export default function SimpleTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const state = props.state;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Scrollbars style={{ height: "310px" }}>
            <div style={{ maxHeight: "200px" }}>
                <TabPanel value={value} index={0} className={classes.tabsPanel}>
                    <ImgMediaCard state={props.state} handleEdit = {props.handleEdit} handler={props.handler} handleRemover={props.handleRemover} handleChangeData={props.handleChangeData} />
                </TabPanel>
            </div>
        </Scrollbars>
    );
}
