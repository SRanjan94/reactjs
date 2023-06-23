import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Loginpage() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, ConfirmPassword] = useState("");
    let [disableBtn, setBtnDisable] = useState(true)
    useEffect(() => {
        if (username.length >= 6 && username.length <= 12 && password.length >= 6 && password.length <= 12 && password === confirmPassword) {
            console.log("hiii")
            setBtnDisable(false)
        } else {
            setBtnDisable(true)
        }
    }, [username, password, confirmPassword])
    const submit = () => {
        alert("successfully signin")
    }
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <Card sx={{ padding: 2 }}>
                    <h2>SignUp</h2>
                    <form onSubmit={(e) => { e.preventDefault(); submit() }}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={username}
                            helperText={(username.length < 6) ? "username must be 6 character " : (username.length > 12) ? "username Not Be greater Than 12 character" : ""}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            value={password}
                            helperText={(password.length < 6) ? "password must be 6 character " : (password.length > 12) ? "Password Not Be greater Than 12 character" : ""}
                            onChange={(e) => { setPassword(e.target.value) }}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="ConfirmPassword"
                            variant="outlined"
                            type="password"
                            value={confirmPassword}
                            helperText={(password !== confirmPassword) ? "confirm password must be same as password" : ""}
                            fullWidth
                            margin="normal"
                            onChange={(e) => { ConfirmPassword(e.target.value) }}
                        />
                        <Button variant="contained" fullWidth type="submit" disabled={disableBtn}>
                            Login
                        </Button>
                    </form>
                </Card>
            </Box>
        </Container>
    );
}
