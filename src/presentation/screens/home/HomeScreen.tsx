import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native'
import PrimaryButton from '../../components/shared/PrimaryButton';
import { RootStackParam } from '../../routes/StackNavigator';

const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParam>>();

  useEffect(() => {
    navigation.setOptions({
        headerLeft: () => {
          <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) } >
            <Text>Menu</Text>
          </Pressable>
        }
    })
  }, [])

  return (
    <View style={ globalStyles.container } >
        <PrimaryButton label={ 'Products' } onPress={ () => navigation.navigate('Products') } />
        <PrimaryButton label={ 'Settings' } onPress={ () => navigation.navigate('Settings') } />  
    </View>
  )
}

export default HomeScreen
