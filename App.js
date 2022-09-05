import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title/';
import Form from './src/components/Form/';

export default function App() {
  return (
    <View style={styles.container}>
    <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f6f6',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:80,
  },
});
