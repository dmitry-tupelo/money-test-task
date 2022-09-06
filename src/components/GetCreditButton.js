import React from 'react'
import {View, Alert, Text, TouchableOpacity, StyleSheet} from "react-native";

const GetCreditButton = (props) =>{

    return (
        <View style={{ marginHorizontal: 35 }}>
            <TouchableOpacity
                style={styles.buttonWrapper}
                onPress={() => {
                    Alert.alert(
                        "Результат",
                        `${props?.creditBalance}, ${props?.percentage}, ${props?.returnBy}, ${props?.creditLength}`,
                        [
                            {text: "Cancel"},
                            { text: "OK" }
                        ]
                    );
                }}
            >
                <Text style={styles.buttonText}>Получить деньги</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        justifyCenter: 'center',
        backgroundColor: '#ed6608',
        padding: 20,
        borderRadius: 40,
        marginTop: 40,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        textTransform: 'uppercase'
    },
})

export default GetCreditButton
