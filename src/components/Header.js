import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            flexGrow: 1
        }
    },
    header: {
        background: "linear-gradient(45deg, #0000ff 30%, #4b0082 90%)",
        color: "white",
        boxShadow: "0px 0px 0px 0px"
    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly"

    },
    styling: {
        height: 80,
    }

}));

const Header = props => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = pageURL => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };

    const menuItems = [
        {
            menuTitle: "Home",
            pageURL: "/"
        },
        {
            menuTitle: "About",
            pageURL: "/about"
        },
        {
            menuTitle: "Projects",
            pageURL: "/projects"
        },
        {
            menuTitle: "Contact",
            pageURL: "/contact"
        },

    ];

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        <FontAwesomeIcon icon={faTerminal} />DLAROSA.IO
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuItems.map(menuItem => {
                                    const { menuTitle, pageURL } = menuItem;
                                    return (
                                        <MenuItem onClick={() => handleMenuClick(pageURL)}>
                                            {menuTitle}
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </>
                    ) : (
                        <div className={classes.headerOptions}>
                            <Button
                                variant="contained"
                                onClick={() => handleButtonClick("/")}
                            >
                                HOME
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => handleButtonClick("/about")}
                            >
                                <FontAwesomeIcon icon={faUser}/> ABOUT
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => handleButtonClick("/projects")}
                            >
                                <FontAwesomeIcon icon={faLaptopCode}/> PROJECTS
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => handleButtonClick("/contact")}
                            >
                                <FontAwesomeIcon icon={faPaperPlane} /> CONTACT
                            </Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(Header);
