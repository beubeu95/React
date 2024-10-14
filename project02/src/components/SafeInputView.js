import { KeyboardAvoidingView, StyleSheet, Pressable, Keyboard, Platform } from "react-native";
import PropTypes from "prop-types";

const SafeInputView = ({children}) => {
    return(
        <KeyboardAvoidingView
            style={styles.avoid}
            behavior={Platform.select({ ios: 'padding' })}
        >
            <Pressable style={styles.avoid} onPress={() => Keyboard.dismiss()}>
                {children}
            </Pressable>
        </KeyboardAvoidingView>
    );
};

SafeInputView.PropTypes = {
    children : PropTypes.node,
}

const styles = StyleSheet.create({
    avoid: { flex: 1 }, 
});
  
  export default SafeInputView;