import React from "react";
import {Text, View, StyleSheet} from "react-native";
import Slider from "@react-native-community/slider";

const ValueSlider = (props) => {
    const {
        sliderTitle,
        minValue,
        maxValue,
        step,
        value,
        onSliderValueChange
    } = props
    return (
        <View style={styles.sumSlider}>
            <Text style={styles.sliderTitle}>{sliderTitle}</Text>
            <View style={styles.sliderHeader}>
                <Text>{minValue}</Text>
                <Text style={styles.sliderValue}>{value}</Text>
                <Text>{maxValue}</Text>
            </View>
            <Slider
                style={styles.slider}
                minimumValue={minValue}
                maximumValue={maxValue}
                step={step}
                onValueChange={onSliderValueChange}
                value={value}
                minimumTrackTintColor="#004a9d"
                maximumTrackTintColor="#81cff5"
                thumbTintColor="#81cff5"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    slider: {
        width: '100%',
        height: 40,
        marginTop: 40,
        alignSelf: 'center',
    },
    sliderTitle: {
        textAlign: 'center',
        color: '#7f7f7f',
        marginBottom: 10
    },
    sliderHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sliderValue: {
        flex: 1,
        textAlign: 'center',
        color: '#004a9d',
        fontSize: 24,
        fontWeight: '700'
    },
})
export default ValueSlider
