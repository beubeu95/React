import { View, StyleSheet , Image} from 'react-native';
import Input from '../components/Input';
import SafeInputView from '../components/SafeInputView';
 
const Login = () => {
    return(
        <SafeInputView>
            <View style={styles.container}>
                <Image 
                    source={require('../../assets/dog.jpg')} 
                    style={styles.image}
                    resizeMode='cover'
                />
                <Input 
                    title={'email'}
                    placeholder={'my@email.com'}
                />
                <Input 
                    title={'password'}
                />
            </View>
        </SafeInputView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 50
    },
    image : {
        height : 150,
        width : '100%',
    }
});

export default Login;