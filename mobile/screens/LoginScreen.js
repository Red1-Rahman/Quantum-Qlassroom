import React, { useState } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_BASE_URL } from '../config';

export default function LoginScreen({ navigation, setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const storeToken = async (token) => {
        try {
            await AsyncStorage.setItem('userToken', token);
        } catch (e) {
            console.error('Error storing token:', e);
        }
    };

    const login = async () => {
        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/api/login/`, {
                username,
                password,
            });
            if (response.data.token) {
                await storeToken(response.data.token);
                setIsAuthenticated(true);
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Login</Text>
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
                <>
                    <Button title="Login" onPress={login} />
                    <Button title="Register" onPress={() => navigation.navigate('Register')} />
                </>
            )}
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        </View>
    );
}
