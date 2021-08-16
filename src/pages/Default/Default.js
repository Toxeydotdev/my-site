import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Paper, withStyles } from '@material-ui/core'

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ContactMailIcon from '@material-ui/icons/ContactMail';

import { Container } from '@material-ui/core';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import About from '../About/About';
import Stats from '../Stats/Stats';
import Socials from '../Socials/Socials';
import { Component } from 'react';
import Vitals from '../Vitals/Vitals';

const drawerWidth = 240;
const useStyles = (theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    paperPadding: {
        padding: "20px"
    },
    title: {
        fontSize: "20px",
        textDecoration: "underline"
    }
});

const itemList = [ // 0 index will be default path for "/"
    // { Text: 'About Me', Icon: <AccountBoxIcon />, path: "/about" },
    { Text: 'Socials', Icon: <ContactMailIcon />, path: "/socials" },
    // { Text: 'Stats', Icon: <SportsEsportsIcon />, path: "/stats" },
];
class Default extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <CssBaseline />
                <Router>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        anchor="left"
                    >
                        <div className={classes.toolbar}>
                            <span className={classes.title}>Toxey.Dev</span>
                        </div>
                        <Divider />
                        <List>
                            {itemList.map((obj, i) => (
                                <Link to={obj.path} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ListItem button key={obj.Text}>
                                        <ListItemIcon>{obj.Icon}</ListItemIcon>
                                        <ListItemText primary={obj.Text} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Drawer>

                    <main className={classes.content}>
                        <Paper elevation={3} className={classes.paperPadding}>
                            <Container maxWidth={false} disableGutters={true}>
                                <div className="app-content">
                                    <Switch>
                                        {/* <Route path="/stats">
                                            <Stats />
                                        </Route> */}
                                        <Route path="/socials">
                                            <Socials />
                                        </Route>
                                        {/* <Route path="/about">
                                            <About />
                                        </Route> */}
                                        <Route path="/vitals">
                                            <Vitals />
                                        </Route>
                                        <Route exact path="/">
                                            <Redirect to={itemList[0].path} />
                                        </Route>
                                    </Switch>
                                </div>
                            </Container>
                        </Paper>
                    </main>
                </Router >
            </div >
        );
    }

}

export default withStyles(useStyles)(Default)