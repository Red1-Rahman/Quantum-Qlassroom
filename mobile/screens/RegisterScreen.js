import React, { useState } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '../config';

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const register = async () => {
        if (!username || !password) {
            setMessage('Please fill in all fields');
            return;
        }
        setLoading(true);
        try {
            await axios.post(`${API_BASE_URL}/api/register/`, {
                username,
                password,
            });
            setMessage('Registration successful! Please log in.');
            navigation.navigate('Login');
        } catch (err) {
            setMessage(err.response?.data?.error || 'Registration failed. Try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Register</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={{ borderWidth: 1, marginVertical: 10 }}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ borderWidth: 1, marginVertical: 10 }}
            />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <Button title="Register" onPress={register} />
            )}
            {message && <Text style={{ color: message.includes('successful') ? 'green' : 'red' }}>{message}</Text>}
        </View>
    );
}
