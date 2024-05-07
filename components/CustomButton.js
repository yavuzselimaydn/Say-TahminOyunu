import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function CustomButton({ children,onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={ ( { pressed } )  =>        //tıklandıgında style degisikligi 
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                onPress={onPress}                  //callback olarak olusturdum pressi
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 5,
    },
    buttonInnerContainer: {
        paddingVertical: 8
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    pressed:{
        opacity:0.5
    }
})