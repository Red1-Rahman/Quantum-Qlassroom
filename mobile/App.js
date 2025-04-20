import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './screens/HomeScreen';
import CircuitSimulatorScreen from './screens/CircuitSimulatorScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            setIsAuthenticated(!!token);
        } catch (e) {
            console.error('Error checking token:', e);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return null; // Or a loading spinner
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                {!isAuthenticated ? (
                    <>
                        <Stack.Screen name='Login'>
                            {props => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
                        </Stack.Screen>
                        <Stack.Screen name='Register' component={RegisterScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name='Home' component={HomeScreen} />
                        <Stack.Screen name='Simulator' component={CircuitSimulatorScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
