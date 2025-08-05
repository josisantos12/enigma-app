import React from 'react'; // Importa o React
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'; // Importa componentes do React Native

export default function AdicionarEtiquetasScreen() { // Define o componente AdicionarEtiquetasScreen
  return (
    <View style={styles.container}> {/* Container principal com padding */}
      <Text style={styles.title}>Adicionar Etiqueta</Text> {/* Título da tela */}
      <TextInput style={styles.input} placeholder="Código da Etiqueta" /> {/* Campo para código da etiqueta */}
      <TextInput style={styles.input} placeholder="Descrição" /> {/* Campo para descrição */}
      <Button title="Salvar" onPress={() => alert('Etiqueta salva!')} /> {/* Botão para salvar, exibe alerta */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' }, // Estilo do container principal
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }, // Estilo do título
  input: {
    borderWidth: 1, // Borda do input
    borderColor: '#777', // Cor da borda
    borderRadius: 6, // Bordas arredondadas
    padding: 10, // Espaçamento interno
    marginBottom: 15, // Espaço abaixo do input
     },
});