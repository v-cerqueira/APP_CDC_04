import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 24,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#d81f26',
    paddingVertical: 13,
    paddingHorizontal: 18,
    borderRadius: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 10,
    color: '#999999',
    fontSize: 15,
  },
});

export default headerStyles;
