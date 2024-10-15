import { View, StyleSheet , Image, Keyboard} from 'react-native';
import { useState, useRef, useEffect } from 'react';
import SafeInputView from '../components/SafeInputView';
import Input, { KeyboardTypes, ReturnKeyTypes, Icons } from '../components/Input';
import Button from '../components/Button';
import { signIn } from '../api/auth';
import PropTypes from 'prop-types';

const Login = ({navigation, route}) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordFocus = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
      setDisabled(!email || !password);
    }, [email, password]);
    

    const onSubmit = async () => {
        if (!disabled && !isLoading) {
          Keyboard.dismiss();
          setIsLoading(true);
          try {
            const data = await signIn(email, password);
            console.log(data);
            navigation.push('List')
          } catch (e) {
            console.log(e);
          }
          setIsLoading(false);
        }
      };

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
                    value={email}
                    onChangeText = {(text) => setEmail(text.trim())}
                    placeholder={'my@email.com'}
                    keyboardType={KeyboardTypes.EMAIL}
                    returnKeyType={ReturnKeyTypes.NEXT}
                    iconName={Icons.EMAIL}
                    onSubmitEditing={() => passwordFocus.current.focus()}
                />
                <Input 
                    ref={passwordFocus}
                    title={'password'}
                    value= {password}
                    onChangeText = {(text) => setPassword(text.trim())}
                    iconName={Icons.PASSWORD}
                    secureTextEntry
                    onSubmitEditing={ onSubmit}
                />
                <View style={styles.buttonContainer}>
                    <Button title={'LOGIN'} onPress={onSubmit} disabled={disabled} isLoading={isLoading}/>
                </View>
            </View>
        </SafeInputView>
    );
}

Login.propTypes = {
   navigation: PropTypes.object,
};

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
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
});

export default Login;