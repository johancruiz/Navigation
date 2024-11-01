import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'


interface Props {
    label: string;
    onPress: () => void
}



const PrimaryButton = ({ label, onPress }: Props) => {
  return (
    <View>
        <Pressable
          onPress={ onPress }
          style={ globalStyles.Button } >
          <Text style={ globalStyles.ButtonText } >{ label }</Text>
        </Pressable>
    </View>
  )
}

export default PrimaryButton
