import React, { useState } from 'react'; // Importa React e o hook useState
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native'; // Importa componentes do React Native
import { styles } from '../styles/cadastroUsuarios'; // Importa os estilos personalizados

export default function CadastroUsuarioScreen() { // Define o componente CadastroUsuarioScreen
  const [nome, setNome] = useState(''); // Estado para o nome do usuário
  const [email, setEmail] = useState(''); // Estado para o email do usuário
  const [senha, setSenha] = useState(''); // Estado para a senha
  const [confirmarSenha, setConfirmarSenha] = useState(''); // Estado para confirmação de senha
  const [cargo, setCargo] = useState(''); // Estado para o cargo (opcional)

  const handleCadastro = () => { // Função chamada ao pressionar o botão de cadastro
    if (!nome || !email || !senha || !confirmarSenha) { // Verifica se todos os campos obrigatórios estão preenchidos
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios.'); // Alerta se faltar algum campo
      return;
    }

    if (senha !== confirmarSenha) { // Verifica se as senhas coincidem
      Alert.alert('Erro', 'As senhas não coincidem.'); // Alerta se as senhas forem diferentes
      return;
    }

    // Simula salvamento na memória
    const novoUsuario = {
      nome, // Nome do usuário
      email, // Email do usuário
      senha, // Senha do usuário
      cargo // Cargo do usuário (opcional)
    };

    console.log('Usuário cadastrado:', novoUsuario); // Exibe no console o usuário cadastrado
    Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!'); // Mostra alerta de sucesso

    // Limpa os campos
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
    setCargo('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}> {/* Container principal com rolagem */}
      <Text style={styles.title}>Cadastro de Usuário (RH)</Text> {/* Título da tela */}

      <TextInput
        style={styles.input} // Estilo do campo de texto
        placeholder="Nome" // Placeholder do campo
        value={nome} // Valor do campo
        onChangeText={setNome} // Atualiza o estado ao digitar
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

      <TouchableOpacity style={styles.button} onPress={handleCadastro}> {/* Botão de cadastro */}
        <Text style={styles.buttonText}>Cadastrar</Text> {/* Texto do botão */}
      </TouchableOpacity>
    </ScrollView>
  );
}