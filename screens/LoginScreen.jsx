import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from '../styles/loginStyles';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email === 'admin@enigma.com' && senha === '1234') {
      onLogin();
    } else {
      Alert.alert('Erro', 'E-mail ou senha inválidos');
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.leftSide}>
        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
      </View>

      <View style={styles.rightSide}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
