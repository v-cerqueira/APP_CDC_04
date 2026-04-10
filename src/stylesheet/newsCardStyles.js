import { StyleSheet } from 'react-native';

const newsCardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
    minHeight: 128,
    justifyContent: 'space-between',
  },
  source: {
    color: '#c81920',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 14,
  },
  title: {
    color: '#111111',
    fontSize: 20,
    lineHeight: 29,
    fontWeight: '800',
    marginBottom: 18,
  },
  date: {
    color: '#9c9c9c',
    fontSize: 13,
    fontWeight: '700',
  },
});

export default newsCardStyles;
