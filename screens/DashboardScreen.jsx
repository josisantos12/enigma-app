import React from 'react'; // Importa o React
import { View, Text, StyleSheet } from 'react-native'; // Importa componentes do React Native

export default function DashboardScreen() { // Define o componente DashboardScreen
  return (
    <View style={styles.container}> {/* Container principal centralizado */}
      <Text style={styles.title}>Dashboard</Text> {/* Título da tela */}
      <Text style={styles.info}>Gráficos e métricas virão aqui...</Text> {/* Informação de placeholder */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }, // Estilo do container centralizado
  title: { fontSize: 22, fontWeight: 'bold' }, // Estilo do título
  info: { fontSize: 16, marginTop: 10 }, // Estilo do texto informativo
});