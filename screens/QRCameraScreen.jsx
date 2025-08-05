import React, { useState, useEffect } from 'react'; // Importa React e hooks useState/useEffect
import { View, Text, StyleSheet, Button, Alert } from 'react-native'; // Importa componentes do React Native
import { BarCodeScanner } from 'expo-barcode-scanner'; // Importa o componente de leitura de código de barras do Expo

export default function QRCameraScreen() { // Define o componente QRCameraScreen
  const [hasPermission, setHasPermission] = useState(null); // Estado para permissão da câmera
  const [scanned, setScanned] = useState(false); // Estado para controlar se já escaneou um código
  const [qrValue, setQrValue] = useState(''); // Estado para armazenar o valor lido do QR

  useEffect(() => { // Executa ao montar o componente
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync(); // Solicita permissão da câmera
      setHasPermission(status === 'granted'); // Atualiza o estado conforme a permissão
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => { // Função chamada ao escanear um QR
    setScanned(true); // Marca como escaneado
    setQrValue(data); // Salva o valor lido
    Alert.alert('QR Code Lido', `Valor: ${data}`); // Mostra alerta com o valor
  };

  if (hasPermission === null) { // Se ainda não sabe se tem permissão
    return <Text>Solicitando permissão da câmera...</Text>; // Exibe mensagem de solicitação
  }
  if (hasPermission === false) { // Se não tem permissão
    return <Text>Sem acesso à câmera</Text>; // Exibe mensagem de erro
  }

  return (
    <View style={styles.container}> {/* Container principal */}
      <Text style={styles.title}>Validar QR Code</Text> {/* Título */}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} // Só escaneia se não tiver escaneado ainda
        style={styles.scanner} // Estilo do scanner
      />
      {scanned && (
        <Button title="Escanear novamente" onPress={() => setScanned(false)} /> // Botão para escanear de novo
      )}
      {qrValue ? <Text style={styles.result}>Valor: {qrValue}</Text> : null} // Mostra o valor lido, se houver
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }, // Estilo do container
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }, // Estilo do título
  scanner: { width: '90%', height: 300 }, // Estilo do scanner
  result: { marginTop: 20, fontSize: 16 }, // Estilo do resultado
});