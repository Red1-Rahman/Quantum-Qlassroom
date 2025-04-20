// CircuitBuilder.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const CircuitBuilder = ({ onSubmit }) => {
    const [gate, setGate] = useState('');
    const [gates, setGates] = useState([]);

    const addGate = () => {
        if (gate.trim()) {
            setGates([...gates, gate]);
            setGate('');
        }
    };

    const submitCircuit = () => {
        if (gates.length > 0) {
            onSubmit(gates); // Pass the gates to the parent
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Circuit Builder</Text>
            <TextInput
                style={styles.input}
                value={gate}
                onChangeText={setGate}
                placeholder="Add gate (e.g., H, X, CNOT)"
            />
            <Button title="Add Gate" onPress={addGate} />
            <Text style={styles.gatesList}>Gates: {gates.join(', ')}</Text>
            <Button title="Simulate Circuit" onPress={submitCircuit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        marginBottom: 10,
    },
    gatesList: {
        marginTop: 10,
        fontSize: 16,
    },
});

export default CircuitBuilder;
