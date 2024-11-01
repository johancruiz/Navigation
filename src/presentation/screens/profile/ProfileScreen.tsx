import React from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PrimaryButton from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View 
      style={{ top: top, marginHorizontal: 20, flex: 1 }}
    >
        <Text 
          style={{ marginBottom: 10 }}
        >Profile Screen</Text>

        <PrimaryButton
          onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer )  }
          label='Menu'
        >
          
        </PrimaryButton>
    </View>
  )
}

export default ProfileScreen
