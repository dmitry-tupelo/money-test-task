import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';

const AppHeader = () => {

    return (
        <View style={styles.headerWrap}>
            <View style={styles.usernameWrapper}>
                <Text style={styles.username}>Дмитрий Петровский</Text>
            </View>
            <TouchableOpacity
            style={styles.refreshButtonWrapper}
            onPress={() => {
                console.log('Updated')
            }}
            ><Text style={styles.refreshButton}>Обновить</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrap: {
        backgroundColor: '#004a9d',
        flexDirection: 'row',
        padding: 20,
    },
    usernameWrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    username: {
        color: '#fff',
        fontSize: 16,
    },
    refreshButtonWrapper: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 8,
        color: '#fff',
        padding: 10,
    },
    refreshButton: {
        color: '#fff'
    }
})

export default AppHeader;
