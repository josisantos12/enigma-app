import React, { useState } from 'react'; // Importa o React e o hook useState
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'; // Importa componentes do React Native
import { styles } from '../styles/loginStyles'; // Importa os estilos personalizados

export default function LoginScreen({ onLogin }) { // Define o componente LoginScreen, recebendo a função onLogin como prop
  const [email, setEmail] = useState(''); // Cria o estado 'email' e sua função de atualização
  const [senha, setSenha] = useState(''); // Cria o estado 'senha' e sua função de atualização

  const handleLogin = () => { // Função chamada ao tentar fazer login
    if (email === 'admin@enigma.com' && senha === '1234') { // Verifica se o email e senha estão corretos
      onLogin(); // Chama a função de login passada por prop
    } else {
      Alert.alert('Erro', 'E-mail ou senha inválidos'); // Exibe alerta de erro se as credenciais estiverem erradas
    }
  };

  return (
    <View style={styles.wrapper}> {/* Container principal com estilo */}
      <View style={styles.leftSide}> {/* Lado esquerdo da tela */}
        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" /> {/* Logo da aplicação */}
      </View>

      <View style={styles.rightSide}> {/* Lado direito da tela */}
        <Text style={styles.title}>Login</Text> {/* Título da tela */}

        <TextInput
          style={styles.input} // Estilo do campo de texto
          placeholder="E-mail" // Texto de dica
          keyboardType="email-address" // Tipo de teclado
          value={email} // Valor do campo
          onChangeText={setEmail} // Atualiza o estado ao digitar
          autoCapitalize="none" // Não capitaliza o texto automaticamente
        />
        <TextInput
          style={styles.input} // Estilo do campo de texto
          placeholder="Senha" // Texto de dica
          secureTextEntry // Oculta o texto digitado
          value={senha} // Valor do campo
          onChangeText={setSenha} // Atualiza o estado ao digitar
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}> {/* Botão de login */}
          <Text style={styles.buttonText}>Entrar</Text> {/* Texto do botão */}
        </TouchableOpacity>
          </View>
    </View>
  );
}