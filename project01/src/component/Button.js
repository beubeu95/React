import { Text, StyleSheet, Pressable } from "react-native";
import PropTypes from 'prop-types';

export const ButtonTypes = {
    NUMBER : 'NUMBER',
    OPERATOR : 'OPERATOR'
}  

const Colors = {
    NUMBER: ['#71717a', '#3f3f46'],
    OPERATOR: ['#f59e0b', '#b45309'],
}

const Button = ({title, onPress, buttonType, buttonStyle}) => {
    return <Pressable
            onPress = { onPress }
            style = {({ pressed }) => [
                styles.button,
                { backgroundColor : Colors[buttonType][0] },
                pressed && { backgroundColor : Colors[buttonType][1]},
                buttonStyle
            ]}
            >
                <Text style={styles.title}>{title}</Text>
            </Pressable>;
}

Button.propTypes = {
	title : PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
} 

Button.defaultProps = {
    buttonType: ButtonTypes.NUMBER,
};


const styles = StyleSheet.create({
    button : {
        alignItems : 'center',
        justifyContent : 'center'
    },
    title : {
        fontSize : 50,
        color : '#fff'
    }
});

export default Button;