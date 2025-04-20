// QuizScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const QuizScreen = () => {
    const [score, setScore] = useState(0);

    const handleAnswer = (correct) => {
        if (correct) {
            setScore(score + 1);
            Alert.alert('Correct!', 'Good job!');
        } else {
            Alert.alert('Incorrect!', 'Try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quantum Quiz</Text>
            <Text style={styles.question}>What is a qubit?</Text>
            <Button title="A quantum bit" onPress={() => handleAnswer(true)} />
            <Button title="A classical bit" onPress={() => handleAnswer(false)} />
            <Text style={styles.score}>Score: {score}</Text>
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
        marginBottom: 20,
    },
    question: {
        fontSize: 18,
        marginBottom: 20,
    },
    score: {
        fontSize: 16,
        marginTop: 20,
    },
});

export default QuizScreen;
