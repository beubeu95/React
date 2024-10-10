import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button , {ButtonTypes} from './component/Button';

export default function App() {

    const [result, setResult] = useState(0);

    return (
        <View style={styles.container}>
        <Text style={{ fontSize : 50 }}>{result}</Text>
        <Button 
            title="+" 
            onPress = {() => {
                setResult((prev) => {
                    return prev + 1;
                });
            }}
            buttonType = { ButtonTypes.OPERATOR }
        />
        <Button 
            title="-" 
            onPress = {() => {
                setResult((prev) => {
                    return prev - 1;
                });
            }}
            buttonType = { ButtonTypes.OPERATOR }
        />
        <StatusBar style="auto" />
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
