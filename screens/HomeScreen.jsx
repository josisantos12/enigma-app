import React, { useContext } from 'react'; // Importa React e o hook useContext
import { View, Text, Button, StyleSheet } from 'react-native'; // Importa componentes do React Native
import { LogoutContext } from '../context/LogoutContext'; // Importa o contexto de logout

export default function HomeScreen({ navigation }) { // Define o componente HomeScreen, recebe navigation por props
  const { logout } = useContext(LogoutContext); // Usa o contexto para obter a função de logout

  return (
    <View style={styles.container}> {/* Container principal centralizado */}
      <Text style={styles.title}>Bem-vindo à Enigma Serviços</Text> {/* Título de boas-vindas */}
      <Text style={styles.subtitle}>Escolha uma opção no menu lateral</Text> {/* Subtítulo de instrução */}

      <Button title="Abrir Menu" onPress={() => navigation.openDrawer()} /> {/* Botão para abrir o menu lateral */}
      <Button title="Sair" onPress={logout} color="red" /> {/* Botão para sair, chama logout */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }, // Estilo do container centralizado
  title: { fontSize: 24, fontWeight: 'bold' }, // Estilo do título
  subtitle: { fontSize: 16, marginTop: 10 }, // Estilo do subtítulo
});