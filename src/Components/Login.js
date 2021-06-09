import {React, state} from 'react'
import { Grid, Paper, Avatar, TextField } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import LockOpenIcon from '@material-ui/icons/LockOpen';
function Login() {
    const paperStyle = {padding: 20, height:'70vh', width:200, margin:"20px auto", border: '1px solid white',borderRadius: "30px!important", backgroundColor: "#343a3f"}
    const avatarStyle = {backgroundColor: "#E84C2A"}
    const textFieldStyle = {color: 'white'}
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <Avatar style = {avatarStyle}><LockOutlinedIcon/></Avatar>
                            <h2 style={{color:'white'}}>Sign In</h2>
                        </Grid>
                        <TextField 
                        style={textFieldStyle} 
                        label='username' 
                        placeholder='Enter Username'  
                        style={{color :'white'}}
                        InputProps={{
                            style: {
                            color: "white" }}}
                        fullWidth required
                        />

                    <TextField 
                        style={textFieldStyle} 
                        label='Password' 
                        placeholder='Enter Password'  
                        type='password'
                        color='white'
                        InputProps={{
                            style: {
                            color: "white" }}}
                        fullWidth required
                        />

                        <FormControlLabel
                                control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                />
                                }
                                label="Remember me" 
                            />

                            <Button type="submit" color="#E84C2A" variant="contained" startIcon={<LockOpenIcon/>} fullWidth>Sign In</Button>


                </Paper>
            </Grid>
        </div>
    )
}

export default Login
