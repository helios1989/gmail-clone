import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./Login.css";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-credentials">
            <TextField
                error
                id="standard-error-helper-text"
                label="Username"
                defaultValue=""
                helperText="Incorrect entry."
            />
            <TextField
                error
                id="standard-error-helper-text"
                label="Password"
                defaultValue=""
                helperText="Incorrect entry."
            />
            <Button variant="contained" color="primary">Submit</Button>
            <Button variant="contained" color="secondary">Cancel</Button>
            </div>
        </div>
    );
};

export default Login;