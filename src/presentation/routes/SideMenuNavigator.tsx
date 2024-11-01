import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { View } from 'react-native';
import BottomTabsNavigator from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

const SideMenuNavigator =() => {

    

  return (
    <Drawer.Navigator 

        drawerContent={ (props) => <CustomDrawerContent {...props} />  }


        screenOptions={{
            headerShown: false,
            drawerType: 'slide',
            drawerActiveBackgroundColor: globalColors.primary,
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: globalColors.primary,
            drawerItemStyle: {
                borderRadius: 100,
                paddingHorizontal: 20
            }
        }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return(
        <DrawerContentScrollView>
           <View
            style={{
                height: 200,
                backgroundColor: globalColors.primary,
                margin: 30,
                borderRadius: 50
            }}
           >

           </View> 
           <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}


export default SideMenuNavigator;
