import React from 'react'; // Importa o React
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importa o criador de Stack Navigator nativo
import LoginScreen from '../screens/LoginScreen'; // Importa a tela de login
import DrawerNavigator from './DrawerNavigator'; // Importa o DrawerNavigator (menu lateral)

const Stack = createNativeStackNavigator(); // Cria o Stack Navigator

export default function StackNavigator() { // Componente principal do StackNavigator
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}> {/* Stack sem cabeçalho, começa pelo Login */}
      <Stack.Screen name="Login" component={LoginScreen} /> {/* Tela de login */}
      <Stack.Screen name="MainApp" component={DrawerNavigator} /> {/* Tela principal com Drawer */}
    </Stack.Navigator>
  );
}