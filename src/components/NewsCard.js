import { Text, View } from 'react-native';
import newsCardStyles from '../stylesheet/newsCardStyles';

export default function NewsCard({ item }) {
  return (
    <View style={newsCardStyles.card}>
      <Text style={newsCardStyles.source}>{item.source}</Text>
      <Text style={newsCardStyles.title}>{item.title}</Text>
      <Text style={newsCardStyles.date}>{item.date}</Text>
    </View>
  );
}
