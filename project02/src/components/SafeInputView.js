import { KeyboardAvoidingView, StyleSheet, Pressable } from "react-native";
import PropTypes from "prop-types";

const SafeInputView = ({children}) => {
    return(
        <KeyboardAvoidingView
            style={styles.avoid}
        >
            <Pressable style={styles.avoid}>
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