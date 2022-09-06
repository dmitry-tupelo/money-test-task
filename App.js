import React, { useState } from 'react';
import {StyleSheet, View, SafeAreaView } from 'react-native';

import { Tab, Text, TabView } from '@rneui/themed';

import CreditCard from './src/components/CreditCard';
import AppHeader from "./src/components/AppHeader";

const renderScene = ({ route }) => {
  switch (route.key) {
    case 'first':
      return <CreditCard
      cardBackgroundColor={'#004a9d'}
      defaultCreditBalance={3000}
      defaultPercentage={100}
      defaultReturnBy={10}
      defaultCreditLength={10}
      sliderSumMin={400}
      sliderSumMax={10000}
      sliderSumBreakingValue={1000}
      sliderStepBeforeBreaking={200}
      sliderStepAfterBreaking={500}
      sliderDaysMin={3}
      sliderDaysMax={14}
      />;
    case 'second':
      return <CreditCard
      cardBackgroundColor={'#2b9730'}
      defaultCreditBalance={10000}
      defaultPercentage={100}
      defaultReturnBy={28}
      defaultCreditLength={28}
      sliderSumMin={10000}
      sliderSumMax={30000}
      sliderStep={1000}
      sliderDaysMin={28}
      sliderDaysMax={140}
      sliderDaysStep={14}
       />;
    default:
      return null;
  }
};


export default function App() {

  const [index, setIndex] = useState(0);

  return (
      <SafeAreaView>
        <AppHeader />
        <View style={styles.container}>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                variant="primary"
                containerStyle={{backgroundColor: '#004a9d', borderRadius: 25, padding: 5,}}
                disableIndicator
            >
              <Tab.Item
                  title="Быстро"
                  titleStyle={(active) => ({
                      color: active ? '#004a9d' : '#7fa4ce',
                      borderRadius: active ? 10 : undefined,
                      paddingVertical: 0,
                      fontSize: 16,
                      fontWeight: 'bold',
                  })
                  }
                  containerStyle={(active) => ({
                      backgroundColor: active ? '#fff' : undefined,
                      borderRadius: 20,
                      padding: 2,
                      margin: 0,
                      minHeight: 0
                  })}
              />
                <Tab.Item
                    title="Надолго"
                    titleStyle={(active) => ({
                        color: active ? '#004a9d' : '#7fa4ce',
                        borderRadius: active ? 10 : undefined,
                        paddingVertical: 0,
                        fontSize: 16,
                        fontWeight: 'bold',
                    })
                    }
                    containerStyle={(active) => ({
                        backgroundColor: active ? '#fff' : undefined,
                        borderRadius: 20,
                        padding: 2,
                        margin: 0,
                        minHeight: 0
                    })}
                />
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring">
              <TabView.Item style={{width: '100%'}}>
                <CreditCard
                    cardBackgroundColor={'#004a9d'}
                    defaultCreditBalance={3000}
                    defaultPercentage={100}
                    defaultReturnBy={10}
                    defaultCreditLength={10}
                    sliderSumMin={400}
                    sliderSumMax={10000}
                    sliderSumBreakingValue={1000}
                    sliderStepBeforeBreaking={200}
                    sliderStepAfterBreaking={500}
                    sliderDaysMin={3}
                    sliderDaysMax={14}
                />
              </TabView.Item>
              <TabView.Item style={{width: '100%'}}>
                <CreditCard
                    cardBackgroundColor={'#2b9730'}
                    defaultCreditBalance={10000}
                    defaultPercentage={100}
                    defaultReturnBy={28}
                    defaultCreditLength={28}
                    sliderSumMin={10000}
                    sliderSumMax={30000}
                    sliderStep={1000}
                    sliderDaysMin={28}
                    sliderDaysMax={140}
                    sliderDaysStep={14}
                />
              </TabView.Item>
            </TabView>

        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 40,
    minHeight: '100%'
  },
  tabBar: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 40,
    backgroundColor: '#004a9d',
    marginBottom: 20,
    margin: 40
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 4,
    margin: 4,
    borderRadius: 40,
  },
  activeTabItem: {
    backgroundColor: '#fff',
  },
  tabTextItem: {
    color: '#7fa4ce',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTabTextItem: {
    color: '#004a9d',
  },
});
