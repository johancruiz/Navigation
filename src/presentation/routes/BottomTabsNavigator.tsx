import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import Tab2Screen from '../screens/tabs/Tab2Screen';
import Tab3Screen from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import TopTabsNavigator from './TopTabsNavigator';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator  
      sceneContainerStyle={{
        backgroundColor: globalColors.background
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent'
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0
        }
      }}
    >
      <Tab.Screen 
        options={{ 
          title: 'tab1', 
          tabBarIcon: ({ color }) => (
            <Text style={{ color }}>Tab1</Text>
          )
        }}  
        name="Tab1" 
        component={Tab1Screen} 
      />
      <Tab.Screen 
        options={{ title: 'tab2', tabBarIcon: ({ color }) => (
          <Text style={{ color }}>Tab2</Text>
        ) }} 
        name="tab2" 
        component={TopTabsNavigator} 
      />
      <Tab.Screen 
        options={{ title: 'tab3', tabBarIcon: ({ color }) => (
          <Text style={{ color }}>Tab3</Text>
        ) }} 
        name="tab3" 
        component={StackNavigator} 
      />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;
