import './gesture-handler.native'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './presentation/routes/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
   
  )
}

export default App
