import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import logo from '../myo-logo1.svg'
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };


  const styles = theme => ({ 
    navpaper: {    
        padding: theme.spacing(2),    
        textAlign: 'center',    
        color: theme.palette.text.secondary  
    }});

function Navbar(props){
    
    return (
    <React.Fragment>
      <CssBaseline />
        <HideOnScroll {...props}>
            <AppBar style={{background:"#ffe900"}}>
                <Toolbar>
                    <Grid container  justify="space-between">
                        <img src = {logo} alt="logo" style={{ height:"160px",margin:"-30px 2px"}}/>
                        <Paper className="classes.navpaper">
                            <Button>RESUME</Button>
                            <Button>CV</Button>
                            <Button>COVER LETTER</Button>
                            <Button>SIGN IN</Button>
                            <Button>SIGN UP</Button>
                        </Paper>
                    </Grid>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    </React.Fragment>
    )
}

export default withStyles(styles) (Navbar);
