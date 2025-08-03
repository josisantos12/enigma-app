import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Telas
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ConsultarItensScreen from './src/screens/ConsultarItensScreen';
import ConsultarEtiquetasScreen from './src/screens/ConsultarEtiquetasScreen';
import AdicionarEtiquetasScreen from './src/screens/AdicionarEtiquetasScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import QRCameraScreen from './src/screens/QRCameraScreen';
import CadastroUsuarioScreen from './screens/CadastroUsuarioScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home">
          {(props) => <HomeScreen {...props} onLogout={handleLogout} />}
        </Drawer.Screen>
        <Drawer.Screen name="Consultar Itens" component={ConsultarItensScreen} />
        <Drawer.Screen name="Consultar Etiquetas" component={ConsultarEtiquetasScreen} />
        <Drawer.Screen name="Adicionar Etiquetas" component={AdicionarEtiquetasScreen} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Validar QR Code" component={QRCameraScreen} />
        <Drawer.Screen name="Cadastro RH" component={CadastroUsuarioScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
