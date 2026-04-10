import { Text, View } from 'react-native';
import footerStyles from '../stylesheet/footerStyles';

const actions = [
  { id: 'mail', icon: '✉', color: '#cd2028' },
  { id: 'whatsapp', icon: '◉', color: '#25d366' },
  { id: 'telegram', icon: '✈', color: '#199bd7' },
];

export default function FooterActions() {
  return (
    <View style={footerStyles.wrapper}>
      <Text style={footerStyles.caption}>
        Receba nosso informativo <Text style={footerStyles.captionStrong}>gratuitamente</Text>
      </Text>

      <View style={footerStyles.actionsRow}>
        {actions.map((action, index) => (
          <View
            key={action.id}
            style={[
              footerStyles.actionItem,
              index < actions.length - 1 && footerStyles.actionDivider,
            ]}
          >
            <Text style={[footerStyles.icon, { color: action.color }]}>{action.icon}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
