import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../screen/Login';
import List from '../screen/List';
import WHITE, { PRIMARY } from '../colors';
import { Pressable , Text }  from 'react-native';

const Stack = new createNativeStackNavigator();

const NaviStack = () => {
    return(<Stack.Navigator initialRouteName={'Home'} screenOptions={{contentStyle : {backgroundColor : WHITE}, headerTitleAlign : 'center', headerTintColor : PRIMARY.DEFAULT, headerTitleStyle : {fontWeight : '800'}}}>
        <Stack.Screen name={'Home'} component={LogIn} options={{ title : 'TODO List', headerTitle : (props) => {
            return(<Pressable onPress={() => console.log('header')}><Text style={{color : props.tintColor}}>{props.children}</Text></Pressable>);
        }}}/>
        <Stack.Screen name={'List'} component={List} options={{ title : 'TODO List', headerTitle : (props) => {
            return(<Pressable onPress={() => console.log('header')}><Text style={{color : props.tintColor}}>{props.children}</Text></Pressable>);
        }}}/>
    </Stack.Navigator>);
}

export default NaviStack;