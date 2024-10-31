import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProductsScreen from '../screens/products/ProductsScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import ProductScreen from '../screens/products/ProductScreen';



export type RootStackParam = {
  Home: undefined,
  Product: {id: number, name: string},
  Products: undefined,
  Settings: undefined
}

const Stack = createStackNavigator<RootStackParam>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Products" component={ProductsScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Product" component={ProductScreen} />
  </Stack.Navigator>
  )
}

export default StackNavigator
