import './gesture-handler.native'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './presentation/routes/StackNavigator';
import SideMenuNavigator from './presentation/routes/SideMenuNavigator';
import BottomTabsNavigator from './presentation/routes/BottomTabsNavigator';

const App = () => {
  return (
    <NavigationContainer>
        {/* <StackNavigator /> */}
         <SideMenuNavigator /> 
        {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
   
  )
}

export default App
