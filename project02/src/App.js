import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './screens/SigninScreen';

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            {/* <Text style={{fontSize : 50}}>TODO LIST</Text> */}
            <SignInScreen />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});

export default App;
