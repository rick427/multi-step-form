import React from 'react';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const Success = () => {
    return (
        <MuiThemeProvider>
            <>
            <AppBar title="Successadd"/>
             <h1>Thank you for your submission</h1>
             <p>You will get an email about more stuff</p>
            </>
        </MuiThemeProvider>
    )
}

export default Success
