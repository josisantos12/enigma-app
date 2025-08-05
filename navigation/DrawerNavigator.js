import React, { useState } from 'react'; // Importa React e o hook useState
import { NavigationContainer } from '@react-navigation/native'; // Importa o container de navegação
import { createDrawerNavigator } from '@react-navigation/drawer'; // Importa o criador de Drawer

// Telas
import LoginScreen from './src/screens/LoginScreen'; // Importa a tela de login
import HomeScreen from './src/screens/HomeScreen'; // Importa a tela inicial
import ConsultarItensScreen from './src/screens/ConsultarItensScreen'; // Importa a tela de consulta de itens
import ConsultarEtiquetasScreen from './src/screens/ConsultarEtiquetasScreen'; // Importa a tela de consulta de etiquetas
import AdicionarEtiquetasScreen from './src/screens/AdicionarEtiquetasScreen'; // Importa a tela de adicionar etiquetas
import DashboardScreen from './src/screens/DashboardScreen'; // Importa a tela de dashboard
import QRCameraScreen from './src/screens/QRCameraScreen'; // Importa a tela de leitura de QR Code
import CadastroUsuarioScreen from './screens/CadastroUsuarioScreen'; // Importa a tela de cadastro de usuário

const Drawer = createDrawerNavigator(); // Cria o navegador Drawer

export default function App() { // Componente principal da aplicação
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar se está logado

  const handleLogin = () => setIsLoggedIn(true); // Função para logar
  const handleLogout = () => setIsLoggedIn(false); // Função para deslogar

  if (!isLoggedIn) { // Se não está logado
    return <LoginScreen onLogin={handleLogin} />; // Mostra a tela de login
  }

  return (
    <NavigationContainer> {/* Container de navegação */}
      <Drawer.Navigator initialRouteName="Home"> {/* Drawer com rota inicial */}
        <Drawer.Screen name="Home">
          {(props) => <HomeScreen {...props} onLogout={handleLogout} />} {/* Tela Home com logout */}
        </Drawer.Screen>
        <Drawer.Screen name="Consultar Itens" component={ConsultarItensScreen} /> {/* Tela de consulta de itens */}
        <Drawer.Screen name="Consultar Etiquetas" component={ConsultarEtiquetasScreen} /> {/* Tela de consulta de etiquetas */}
        <Drawer.Screen name="Adicionar Etiquetas" component={AdicionarEtiquetasScreen} /> {/* Tela de adicionar etiquetas */}
        <Drawer.Screen name="Dashboard" component={DashboardScreen} /> {/* Tela de dashboard */}
        <Drawer.Screen name="Validar QR Code" component={QRCameraScreen} /> {/* Tela de validação de QR Code */}
        <Drawer.Screen name="Cadastro RH" component={CadastroUsuarioScreen} /> {/* Tela de cadastro de usuário */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}