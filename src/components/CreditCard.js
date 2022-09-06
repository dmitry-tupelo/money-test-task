import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Text, Alert, Button, TouchableOpacity} from 'react-native';
import dayjs from 'dayjs';
import Slider from '@react-native-community/slider';
import GetCreditButton from "./GetCreditButton";
import ValueSlider from "./ValueSlider";

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

    const dynamicSliderValue = creditBalance < sliderSumBreakingValue ? sliderStepBeforeBreaking : sliderStepAfterBreaking

    const onSumValueChanged = (value) => setCreditBalance(value)

    const onDateValueChanged = (value) => {
      setCreditLength(value)
      setReturnBy(dayjs().add(value, 'day').format('D/M/YY'))
    }

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
        <Text style={styles.creditBalanceValue}>{creditBalance} грн</Text>
        <View style={styles.separator}/>
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
      <ValueSlider
        sliderTitle='Сумма кредита'
        minValue={sliderSumMin}
        maxValue={sliderSumMax}
        step={sliderSumBreakingValue ? dynamicSliderValue : sliderStep}
        onSliderValueChange={onSumValueChanged}
        value={creditBalance}
      />
      <ValueSlider
        sliderTitle='Срок кредита'
        minValue={sliderDaysMin}
        maxValue={sliderDaysMax}
        step={sliderStep}
        onSliderValueChange={onDateValueChanged}
        value={creditLength}
      />
    </View>

    <GetCreditButton
    creditBalance={creditBalance}
    percentage={percentage}
    returnBy={returnBy}
    creditLength={creditLength}
    />
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
    marginTop: 20,
    marginBottom: 40,
    marginHorizontal: 10,
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
    marginHorizontal: 35,
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
  sumSlider: {
    marginBottom: 10,
  },
});


  export default CreditCard;
