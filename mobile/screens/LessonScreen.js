// LessonScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LessonScreen = ({ route, navigation }) => {
    const { lesson } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{lesson.title}</Text>
            <Text style={styles.content}>{lesson.content}</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
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
    },
    content: {
        fontSize: 16,
        marginTop: 20,
    },
});

export default LessonScreen;
