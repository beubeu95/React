import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import { PRIMARY, WHITE, GRAY } from "../colors";
import PropTypes from "prop-types";

const Button = ({title, onPress, disabled, isLoading}) => {
    return(
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
            styles.container,
            pressed && { backgroundColor: PRIMARY.DARK },
            disabled && { backgroundColor: PRIMARY.LIGHT },
            ]}
            disabled={disabled}
        >
            {isLoading ? (
                <ActivityIndicator size={'small'} color={GRAY.DEFAULT} />
            ) : (
                <Text style={styles.title}>{title}</Text>
            )}
        </Pressable>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY.DEFAULT,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        color: WHITE,
        fontSize: 16,
        fontWeight: '700',
    },

});

export default Button;