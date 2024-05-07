import { StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import Title from '../components/Title';

export default function GameStartScreen({ onSendNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('')

    function resetHandler() {   //temizleye basıldıgında ınputun icini temizledim.
        setEnteredNumber('');
    }

    function confirmHandler() {
        const chosenNumber = parseInt(enteredNumber)    //girilen string ifadeyi int e cevirdim
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) { 
            Alert.alert(                //gerekli kosullara gore alert verdim
                title = 'Gecersiz deger girdiniz',
                message = 'Girilen sayi 1 ile 99 arasında olmalidir',
                buttons = [{
                    text: 'Tamam',
                    style: 'desctructive',
                    onPress: resetHandler //inputun icini temizledim
                }]
            )
        }
        else {                           
            onSendNumber(chosenNumber);   //girilen deger istenen sekilde ise sayıyı callback ile app.js e yolladım
        }
    }

    function numberHandler(number) {      //inputa girilen degeri useState ile aldım
        setEnteredNumber(number);
    }

    return (
        <View style={styles.container}>
            <Title>Sayi Tahmin Uygulaması</Title>
            <View style={styles.card}>
                <TextInput
                    style={styles.input}
                    keyboardType='number-pad'
                    maxLength={2}
                    value={enteredNumber}
                    onChangeText={(number) => numberHandler(number)}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPress={resetHandler}>
                            Temizle
                        </CustomButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPress={confirmHandler}>
                            Onayla
                        </CustomButton>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    card: {
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        marginTop: 20,
        borderRadius: 20,
        elevation: 4,                                     //golge kodları
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: 'yellow',
        width: 50,
        height: 50,
        marginVertical: 10,
        fontSize: 35,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})