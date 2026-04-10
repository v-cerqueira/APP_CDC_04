import { Pressable, Text, View } from 'react-native';
import headerStyles from '../stylesheet/headerStyles';

export default function HeaderPortal() {
  return (
    <View style={headerStyles.container}>
      <Pressable style={headerStyles.button}>
        <Text style={headerStyles.buttonText}>VEJA MAIS NO PORTAL</Text>
      </Pressable>
      <Text style={headerStyles.subtitle}>cadastre-se, comente, saiba mais</Text>
    </View>
  );
}
