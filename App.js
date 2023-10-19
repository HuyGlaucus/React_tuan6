import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hinh1 from './components/Hinh1.js';
import Hinh2 from './components/Hinh2.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Hinh1/>
      {/* <Hinh2/> */}
    </View>
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
