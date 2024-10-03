import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { registerUser } from '../services/userService';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await registerUser(formData);
            alert('User registered successfully');
        } catch (error) {
            alert('Registration failed');
        }
    };

    return (
        <Container>
            <Typography variant="h4">Register</Typography>
            <TextField name="name" label="Name" variant="outlined" fullWidth onChange={handleChange} />
            <TextField name="email" label="Email" variant="outlined" fullWidth onChange={handleChange} />
            <TextField name="password" label="Password" type="password" variant="outlined" fullWidth onChange={handleChange} />
            <Button variant="contained" color="primary" onClick={handleSubmit}>Register</Button>
        </Container>
    );
};

export default Register;
