import { ScrollView, Text, View } from 'react-native';
import HeaderPortal from '../components/HeaderPortal';
import NewsCard from '../components/NewsCard';
import FooterActions from '../components/FooterActions';
import screenStyles from '../stylesheet/screenStyles';

const newsItems = [
  {
    id: '1',
    source: 'MIGALHAS QUENTES',
    title: 'Desembargador nega exclusao de materia do SBT sobre Deolane',
    date: '11/4/2025',
  },
  {
    id: '2',
    source: 'MIGALHAS QUENTES',
    title: '1ª turma do STF anula vinculo empregaticio entre jornalista e SBT',
    date: '26/2/2025',
  },
  {
    id: '3',
    source: 'MIGALHAS QUENTES',
    title: 'Autores usam precedente da "Vila do Chaves" e juiz determina correcao',
    date: '12/2/2025',
  },
  {
    id: '4',
    source: 'MIGALHAS QUENTES',
    title: 'SBT perde briga e STJ mantem marca "Chiquititas" com industria',
    date: '10/2/2025',
  },
];

export default function NewsPortalScreen() {
  return (
    <View style={screenStyles.container}>
      <ScrollView
        style={screenStyles.scrollView}
        contentContainerStyle={screenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HeaderPortal />

        <View style={screenStyles.sectionHeader}>
          <View style={screenStyles.sectionAccent} />
          <Text style={screenStyles.sectionTitle}>LEIA MAIS</Text>
        </View>

        <View style={screenStyles.cardsList}>
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>

      <FooterActions />
    </View>
  );
}
