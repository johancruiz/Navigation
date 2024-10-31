import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import PrimaryButton from '../../components/shared/PrimaryButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParam } from '../../routes/StackNavigator';

const products = [
  {id: 1, name: 'Producto 1'},
  {id: 2, name: 'Producto 2'},
  {id: 3, name: 'Producto 3'},
  {id: 4, name: 'Producto 4'},
  {id: 5, name: 'Producto 5'}
];

const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParam>>();

  return (
    <View style={ globalStyles.container } >
        <Text style={ {marginBottom: 10, fontSize: 30} } >Productos</Text>

        <FlatList
          data={ products }
          renderItem={ ({item}) => (
            <PrimaryButton 
              onPress={ () => { navigation.navigate('Product',  { id: item.id, name: item.name } )} }
              label={ item.name }
            />
          ) }
        />

            <PrimaryButton 
              onPress={ () => {navigation.navigate('Settings' as never )} }
              label={ 'Settings' }
            />
    </View>


  )
}

export default ProductsScreen
