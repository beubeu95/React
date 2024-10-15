import { StyleSheet, View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {GRAY, PRIMARY, BLACK} from '../colors';
import { useState , forwardRef} from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const KeyboardTypes = {
    DEFAULT : 'default',
    EMAIL : 'email-address'
}

export const ReturnKeyTypes = {
    DONE : 'done',
    NEXT : 'next'
}

export const Icons = {
    EMAIL : 'email',
    PASSWORD : 'lock'
}


const Input = forwardRef(({title, placeholder,value, iconName, ...props}, ref) => {

    const [isFocused, setIsFocused] = useState(false);
    
    return(
        <View style={styles.container}>
            <Text 
                style={[styles.text,value && styles.hasValueTitle , isFocused && styles.isFocusedTitle]}
            >
                {title}
            </Text>

            <View>
                <TextInput 
                    {...props}
                    ref={ref}
                    value={value}
                    style={[styles.textInput,value && styles.hasValueInput, isFocused && styles.isFocusedInput]}
                    placeholder={placeholder ?? title}
                    autoCapitalize = {'none'}
                    autoCorrect = {false}
                    textContentType={'none'}
                    keyboardAppearance={'light'}
                    onBlur = {() => setIsFocused(false)}
                    onFocus = {() => setIsFocused(true)}
                />
                <View style={styles.icon}>
                    <MaterialIcons name={iconName} size={20} color={(() => {
                        switch (true) {
                            case isFocused:
                            return PRIMARY.DEFAULT;
                            case !!value:
                            return BLACK;
                            default:
                            return GRAY.DEFAULT;
                        }
                        })()} 
                    />
                </View>
            </View>
        </View>
    );
});

Input.displayName = 'Input';

Input.defaultProps = {
    returnKeyType: ReturnKeyTypes.DONE,
};

// Input.propTypes = {
//     title: PropTypes.string,
//     placeholder: PropTypes.string,
//     value: PropTypes.string,
//     iconName : PropTypes.oneOf(Object.values(Icons))
// };

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
        paddingHorizontal : 10,
        height : 42,
        paddingLeft : 30
    },
    isFocusedTitle : {
        fontWeight : '800',
        color : PRIMARY.DEFAULT
    },
    isFocusedInput : {
        borderColor : PRIMARY.DEFAULT,
        color : PRIMARY.DEFAULT,
        borderWidth : 2,
        fontWeight : '800'
    },
    hasValueTitle : {
        color : BLACK
    },
    hasValueInput : {
        color : BLACK,
        borderWidth : 2,
        fontWeight : '800'
    },
    icon : {
        position : 'absolute',
        left : 8,
        height : '100%',
        justifyContent : 'center'
    }
});

export default Input;