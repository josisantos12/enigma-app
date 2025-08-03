import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { LogoutContext } from '../context/LogoutContext';

export default function HomeScreen({ navigation }) {
  const { logout } = useContext(LogoutContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Enigma Serviços</Text>
      <Text style={styles.subtitle}>Escolha uma opção no menu lateral</Text>

      <Button title="Abrir Menu" onPress={() => navigation.openDrawer()} />
      <Button title="Sair" onPress={logout} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 16, marginTop: 10 },
});
