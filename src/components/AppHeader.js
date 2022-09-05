import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';

const AppHeader = () => {

    return (
        <View style={styles.headerWrap}>
            <View style={styles.usernameWrapper}>
                <Text style={styles.username}>Дмитрий Петровский</Text>
            </View>
            <Button
            title="Обновить"
            style={styles.refreshButton}
            onPress={() => {
                console.log('Updated')
            }}
            />
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
        fontSize: 16
    },
    refreshButton: {
        borderWidth: 1,
        borderRadius: 8,
        color: '#fff',
    }
})

export default AppHeader;