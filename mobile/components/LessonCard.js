// LessonCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LessonCard = ({ lesson, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => onPress(lesson)}>
            <Text style={styles.title}>{lesson.title}</Text>
            <Text style={styles.description}>{lesson.description}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginTop: 8,
    },
});

export default LessonCard;
