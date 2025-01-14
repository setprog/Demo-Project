import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeWind } from 'nativewind';
import LoginScreen from './Apps/Screen/LoginScreen';

export default function App() {
  return (
    <View className="flex-1  bg-white">
      <StatusBar style="auto" />
      <LoginScreen/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
