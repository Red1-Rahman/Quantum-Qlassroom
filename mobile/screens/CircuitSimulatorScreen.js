import React, { useState } from 'react';
import { View, Button, Text, TextInput, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_BASE_URL } from '../config';

export default function CircuitSimulatorScreen() {
    const [gates, setGates] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const simulateCircuit = async () => {
        if (!gates.trim()) {
            setError('Please enter gates');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const token = await AsyncStorage.getItem('userToken');
            const res = await axios.post(`${API_BASE_URL}/api/simulate/`, {
                gates: gates.trim().split(','),
            }, {
                headers: { Authorization: `Token ${token}` },
            });
            setResult(res.data);
        } catch (err) {
            setError(err.response?.data?.error || 'Simulation failed');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Enter gates (e.g., h,x,z):</Text>
            <TextInput
                value={gates}
                onChangeText={setGates}
                style={{ borderWidth: 1, marginVertical: 10 }}
                placeholder="Separate gates with commas"
            />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <Button title='Simulate' onPress={simulateCircuit} />
            )}
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            {result && (
                <View style={{ marginTop: 10 }}>
                    <Text>Simulation Result:</Text>
                    <Text>{JSON.stringify(result.simulation_result, null, 2)}</Text>
                    <Text>ML Prediction:</Text>
                    <Text>{JSON.stringify(result.prediction, null, 2)}</Text>
                </View>
            )}
        </View>
    );
}
