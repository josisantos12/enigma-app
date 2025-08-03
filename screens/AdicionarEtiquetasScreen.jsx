import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function AdicionarEtiquetasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Etiqueta</Text>
      <TextInput style={styles.input} placeholder="Código da Etiqueta" />
      <TextInput style={styles.input} placeholder="Descrição" />
      <Button title="Salvar" onPress={() => alert('Etiqueta salva!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
  },
});
