import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Signin from './screens/SignInScreen';
import Home from './screens/HomeScreen';
import TextMode from './screens/TextModeScreen';
import Message from './screens/MEssageScreen';
import ConvertAudio from './screens/AudioScreen';
import AudioMode from './screens/AudioModeScreen';
import AudioReply from './screens/AudioReplyScreen';
import EmergencyMode from './screens/EmergencyScreen';
import Active from './screens/ActivateScreen';
import Create from './screens/CreateAccount';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="In" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="In" component={Signin} />
        <Stack.Screen name="Acct" component={Create} />
        <Stack.Screen name="HS" component={Home} />
        <Stack.Screen name="Text" component={TextMode} />
        <Stack.Screen name="Mess" component={Message} />
        <Stack.Screen name="Aud" component={ConvertAudio} />
        <Stack.Screen name="AudMode" component={AudioMode} />
        <Stack.Screen name="Reply" component={AudioReply} />
        <Stack.Screen name="Emer" component={EmergencyMode} />
        <Stack.Screen name="Actv" component={Active} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
