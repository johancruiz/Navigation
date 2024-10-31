import { Button, StyleSheet } from "react-native";


export const globalColors = {
    primary: '#7037eb',
    secondary: '#f72585',
    tiertiary: '#3a0ca3',
    success: '#4cc9f0',
    warning: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',

    background: '#fff',

}

export const globalStyles = StyleSheet.create({
    container: {
       flex: 1,
       padding: 20,
       backgroundColor: globalColors.background
    },
    Button: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 15,
    },
    ButtonText: {
        color: globalColors.background,
        fontSize: 18
    }
})