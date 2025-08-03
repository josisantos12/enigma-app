import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    backgroundColor: '#e8f0fe',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#1a237e',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#c5cae9',
  },
  button: {
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
