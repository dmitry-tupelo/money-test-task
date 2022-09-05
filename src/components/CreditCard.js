import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert, Button } from 'react-native';
import dayjs from 'dayjs';
import Slider from '@react-native-community/slider';

const CreditCard = (props) => {

  const {
    cardBackgroundColor,
    defaultCreditBalance,
    defaultPercentage,
    defaultReturnBy,
    defaultCreditLength,
    sliderSumMin,
    sliderSumMax,
    sliderStep,
    sliderSumBreakingValue,
    sliderStepBeforeBreaking,
    sliderStepAfterBreaking,
    sliderDaysMin,
    sliderDaysMax,
    sliderDaysStep,
  } = props;
  
    const [creditBalance, setCreditBalance] = useState(defaultCreditBalance || 3000)
    const [percentage, setPercentage] = useState(defaultPercentage || 100)
    const [returnBy, setReturnBy] = useState(defaultReturnBy || 10)
    const [creditLength, setCreditLength] = useState(defaultCreditLength || 10)


    useEffect(() => {
      setPercentage((creditBalance/100) * creditLength)
    }, [creditBalance, creditLength])
  
    useEffect(() => {
      setReturnBy(dayjs().add(returnBy, 'days').format('DD/MM/YY'))
    },[])
    
    const dynamicSliderValue = creditBalance < 1000 ? sliderStepBeforeBreaking : sliderStepAfterBreaking

    const showResult = () => 
      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "Ask me later",
            onPress: () => console.log("Ask me later pressed")
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    

  return (
    <View>
      <View style={
          [
            styles.cardWrapper,
            cardBackgroundColor && { backgroundColor: cardBackgroundColor, shadowColor: cardBackgroundColor, },
          ]
        }>
        <View>
          <Text style={styles.creditBalanceTitle}>
            Кредитный баланс
            </Text>
          <Text style={styles.creditBalanceValue}>{creditBalance} uah</Text>
          <View style={styles.separator}></View>
          <View style={[{marginBottom:20}, styles.cardRow]}>
            <View>
              <Text style={styles.cardRowLabel}>Процент</Text>
              <Text style={styles.cardRowValue}>{percentage}</Text>
            </View>
            <View>
              <Text style={styles.cardRowLabel}>К оплате</Text>
              <Text style={[{ textAlign: 'right'},styles.cardRowValue]}>{creditBalance + percentage}</Text>
            </View>
          </View>
          <View style={styles.cardRow}>
            <View>
              <Text style={styles.cardRowLabel}>Вернуть до</Text>
              <Text style={styles.cardRowValue}>{returnBy}</Text>
            </View>
            <View>
              <Text style={styles.cardRowLabel}>До конца срока</Text>
              <Text style={[{ textAlign: 'right'},styles.cardRowValue]}>{creditLength}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.sliderWrapper}>
        <View style={styles.sumSlider}>
          <Text style={styles.sliderTitle}>Сумма кредита</Text>
          <View style={styles.sliderHeader}>
            <Text>{sliderSumMin}</Text>
            <Text style={styles.sliderValue}>{creditBalance}</Text>
            <Text>{sliderSumMax}</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={sliderSumMin}
            maximumValue={sliderSumMax}
            step={sliderSumBreakingValue ? dynamicSliderValue : sliderStep}
            onValueChange={(value) => setCreditBalance(value)}
            value={creditBalance}
            minimumTrackTintColor="#004a9d"
            maximumTrackTintColor="#81cff5"
            thumbTintColor="#81cff5"
          />
          </View>
          <View style={styles.dateSlider}>
            <Text style={styles.sliderTitle}>Срок кредита</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>{sliderDaysMin}</Text>
              <Text style={{flex: 1, textAlign: 'center', color: '#004a9d', fontSize: 24, fontWeight: '700'}}>{creditLength}</Text>
              <Text>{sliderDaysMax}</Text>
            </View>
            <Slider
                style={styles.slider}
                minimumValue={sliderDaysMin}
                maximumValue={sliderDaysMax}
                step={sliderDaysStep}
                onValueChange={(value) => {
                  setCreditLength(value)
                  setReturnBy(dayjs().add(value, 'day').format('D/M/YY'))  
                }}
                value={creditLength}
                minimumTrackTintColor="#004a9d"
                maximumTrackTintColor="#81cff5"
                thumbTintColor="#81cff5"
            />
            </View>
        </View>
        <Button
        title="Получить деньги"
        onPress={() => {
          
        }}/>
        </View>
  )
  };

  
const styles = StyleSheet.create({
  slider: {
    width: '100%',
    height: 40,
    marginTop: 40,
    alignSelf: 'center',
},
  cardWrapper: {
    backgroundColor: '#004a9d',
    padding: 20,
    margin: 20,
    borderRadius: 20, 
    shadowColor: "#004a9d",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 12
  },
  separator: {
    backgroundColor: '#fff',
    height: 1,
    marginVertical: 10,
  },
  cardRowLabel:{
    color: '#b3cae2', 
    marginBottom: 5,
  },
  cardRowValue: {
    color: '#fff',
    fontWeight: '600',
  },
  sliderWrapper: {
    marginVertical: 40,
    marginHorizontal: 40,
  },
  creditBalanceTitle: {
    color: '#fff',
     fontSize: 18,
  },
  creditBalanceValue: {
    fontWeight: '700',
    fontSize: 20,
    color: '#fff'
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  }
});


  export default CreditCard;