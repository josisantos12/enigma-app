import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Telas
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ConsultarItensScreen from './screens/ConsultarItensScreen';
import ConsultarEtiquetasScreen from './screens/ConsultarEtiquetasScreen';
import AdicionarEtiquetasScreen from './screens/AdicionarEtiquetasScreen';
import DashboardScreen from './screens/DashboardScreen';
import QRCameraScreen from './screens/QRCameraScreen';
import CadastroUsuarioScreen from './screens/CadastroUsuarioScreen';

// Contexto
import { LogoutContext } from './context/LogoutContext';

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <LogoutContext.Provider value={{ logout: handleLogout }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Consultar Itens" component={ConsultarItensScreen} />
          <Drawer.Screen name="Consultar Etiquetas" component={ConsultarEtiquetasScreen} />
          <Drawer.Screen name="Adicionar Etiquetas" component={AdicionarEtiquetasScreen} />
          <Drawer.Screen name="Dashboard" component={DashboardScreen} />
          <Drawer.Screen name="Validar QR Code" component={QRCameraScreen} />
           <Drawer.Screen name="Cadastro RH" component={CadastroUsuarioScreen} />

        </Drawer.Navigator>
      </NavigationContainer>
    </LogoutContext.Provider>
  );
}
