import React from 'react'
import { Text, View } from 'react-native'
import PrimaryButton from '../../components/shared/PrimaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../theme/theme';

const SettingsScreen = () => {

  const navigate = useNavigation();

  return (
    <View style={ globalStyles.container } >
        <Text style={ { fontSize: 20, marginBottom: 10 } } >Settings Screen</Text>

        <PrimaryButton
          label='Back'
          onPress={ () => navigate.goBack()  }
        />

        <PrimaryButton
          label='Go Back Home'
          onPress={ () => navigate.dispatch( StackActions.popToTop() )  }
        />
    </View>
  )
}

export default SettingsScreen
