import * as React from 'react';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import './Auth.css';
import { registerUser } from "../../actions/authActions";

export default function Register () {
    // code unable to pack into => () { ... }
    const [valuex, setValuex] = React.useState({
        name: '',
        username: '',
        password: '',
    });
    
    const [valuey, setValuey] = React.useState({
        name: '',
        username: '',
        password: '',
    });
    
    const handlxChange = (prop) => (event) => {
        setValuex({ ...valuex, [prop]: event.target.value });
    };
    
    const handlyChange = (prop) => (event) => {
        setValuey({ ...valuey, [prop]: event.target.value });
    };
    
    const handlxClickShowPassword = () => {
        setValuex({
        ...valuex,
        showPassword: !valuex.showPassword,
        });
    };
    
    const handlyClickShowPassword = () => {
        setValuey({
        ...valuey,
        showPassword: !valuey.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
            
    const onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
          name: valuex.name,
          username: valuex.username,
          password: valuex.password,
          password2: valuey.password,
        };

        registerUser(newUser);
    };
            
    function LineBreaks () {
        return (
            <><br></br><br></br></>
        );
    }
            
    return (
        <div className='content'>
            <div className='registerHead'>
                <h3 className='loginHeader'>Register</h3><h4 className='loginSubHead'>  below</h4>
                <br></br>
                <span id='haveAccount'>Already have account? <a href='/'>Click here</a></span>
                <LineBreaks />
            </div>
            <FormControl sx={{ m: 1, width: '25ch' }}>
                <TextField id="outlined-basic" label="Enter name" variant="outlined" 
                value={valuex.name}
                onChange={handlxChange('name')}
                />
            </FormControl>
            <LineBreaks />
            <FormControl sx={{ m: 1, width: '25ch' }}>
                <TextField id="outlined-basic" label="Enter username" variant="outlined" 
                InputProps={{
                    startAdornment: <InputAdornment position="start">@</InputAdornment>,
                }}
                value={valuex.username}
                onChange={handlxChange('username')}
                />
                </FormControl>
                <LineBreaks />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={valuex.showPassword ? 'text' : 'password'}
                        value={valuex.password}
                        onChange={handlxChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handlxClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {valuex.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <LineBreaks />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Confirm</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={valuey.showPassword ? 'text' : 'password'}
                        value={valuey.password}
                        onChange={handlyChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handlyClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {valuey.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <LineBreaks />
                <br></br>
                <div className='submitButton'>
                    <Button variant="contained" onClick={onSubmit}>Submit</Button>
                </div>
            </div>
        );
}