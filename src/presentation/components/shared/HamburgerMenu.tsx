import { DrawerActions, useNavigation } from "@react-navigation/native"
import { useEffect } from "react";
import { Pressable } from "react-native";
import { Text, View } from "react-native";


const HamburgerMenu = () => {

    const navigate = useNavigation();

    useEffect(() => {
        navigate.setOptions({
            headerLeft: () => {
                <Pressable onPress={ () => navigate.dispatch(DrawerActions.toggleDrawer) } >
                    <Text>Menù</Text>
                </Pressable>
            }
        })
    },[])

  return (
    <View>

    </View>
  )
}

export default HamburgerMenu
