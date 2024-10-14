import { StyleSheet, View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {GRAY} from '../colors';

const Input = ({title, placeholder}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
            <TextInput 
                style={styles.textInput}
                placeholder={placeholder}
            />
        </View>
    );
}

Input.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
};

const styles = StyleSheet.create({
    container : {
        width : '100%',
        marginVertical : 10
    },
    text : {
        marginBottom: 4,
    },
    textInput : {
        borderWidth : 1,
        borderRadius : 8,
        borderColor : GRAY.DEFAULT,
        height : 40,
        paddingHorizontal : 10
    }
});

export default Input;