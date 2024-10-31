
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParam } from '../../routes/StackNavigator';
import { useEffect } from 'react';


const ProductScreen = () => {

  const params = useRoute<RouteProp<RootStackParam, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  }, [])

  return (
    <View style={ globalStyles.container } >
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
      }} >
        {params.id} - {params.name}
      </Text>
    </View>
  )
}

export default ProductScreen
