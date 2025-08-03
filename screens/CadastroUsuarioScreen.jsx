import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import { styles } from '../styles/cadastroUsuarios'; // Importando os estilos do cabeçalho

export default function CadastroUsuarioScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cargo, setCargo] = useState('');

  const handleCadastro = () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    // Simula salvamento na memória
    const novoUsuario = {
      nome,
      email,
      senha,
      cargo
    };

    console.log('Usuário cadastrado:', novoUsuario);
    Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');

    // Limpa os campos
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
    setCargo('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário (RH)</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="Cargo (opcional)"
        value={cargo}
        onChangeText={setCargo}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

