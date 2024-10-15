import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const List = ({navigation, route}) => {
    return(
        <View style={ styles.container }>
            <Text style={ styles.text}>ListScreen</Text>
            <Button title="push" onPress={() => navigation.push('List')}></Button>
            <Button title="navigate" onPress={()=>navigation.navigate('List')}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        fontWeight : '800',
        fontSize : 20
    }
});
export default List;