import * as React from 'react';
import { Button } from '@mui/material';
import './Auth.css';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { loginUser } from '../../actions/authActions';

export default function Login () {

  const [valuex, setValuex] = React.useState({
    username: '',
    password: '',
    showPassword: false,
  });

  const handlxChange = (prop) => (event) => {
    setValuex({ ...valuex, [prop]: event.target.value });
  };
      
        const handlxClickShowPassword = () => {
          setValuex({
            ...valuex,
            showPassword: !valuex.showPassword,
          });
        };

    const submitHandler = (e) => {
        e.preventDefault();

        const newUser = {
          username: valuex.username,
          password: valuex.password
        };

        loginUser(newUser);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function LineBreaks () {
        return (
          <><br></br><br></br></>
        );
      }

    return (
        <div className='content'>
            <div className='loginHead'>
                <h3 className='loginHeader'>Login</h3><h4 className='loginSubHead'>  below</h4>
                <br></br>
                <span id='haveAccountLogin'>Dont already have an account? <a href='/register'>Click here</a></span>
                <LineBreaks />
            </div>
            <form  onSubmit={submitHandler}>

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
            <br></br>
            <div className='submitButton'>
                <Button variant="contained" type="submit">Submit</Button>
            </div>
          </form>
        </div>
    );
}