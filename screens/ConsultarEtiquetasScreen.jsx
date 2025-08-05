import React from 'react'; // Importa o React
import { View, Text, StyleSheet } from 'react-native'; // Importa componentes do React Native

export default function ConsultarEtiquetasScreen() { // Define o componente ConsultarEtiquetasScreen
  return (
    <View style={styles.container}> {/* Container principal centralizado */}
      <Text style={styles.title}>Consultar Etiquetas</Text> {/* Título da tela */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }, // Estilo do container centralizado
  title: { fontSize: 22, fontWeight: 'bold' }, // Estilo do título
});