import React from 'react'
import { Text, View } from 'react-native'
import PrimaryButton from '../../components/shared/PrimaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {

  const navigate = useNavigation();

  return (
    <View>
        <Text>Setting Screen</Text>

        <PrimaryButton
          label='Regresar'
          onPress={ () => navigate.goBack()  }
        />

        <PrimaryButton
          label='Regresar Al Home'
          onPress={ () => navigate.dispatch( StackActions.popToTop() )  }
        />
    </View>
  )
}

export default SettingsScreen
