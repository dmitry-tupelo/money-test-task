import React, { useState } from 'react';
import { StyleSheet, View, Text, useWindowDimensions, TouchableOpacity} from 'react-native';
import { TabView } from 'react-native-tab-view';

import AppHeader from './src/components/AppHeader';
import CreditCard from './src/components/CreditCard';

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
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const renderTabBar = ({navigationState, position}) => {
    const inputRange = navigationState.routes.map((x, i) => i);
  
    return (
      <View style={styles.tabBar}>
        {navigationState.routes.map((route, i) => {
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          
          return (
            <TouchableOpacity
            key={i}
            style={[
              index === i && styles.activeTabItem,
              styles.tabItem,
            ]}
              onPress={() => setIndex(i)}>
              <Text
                style={[ 
                  index === i && styles.activeTabTextItem,
                  styles.tabTextItem,
                  opacity,
                ]}>
                  {route.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const [routes] = useState([
    { key: 'first', title: 'Швидко' },
    { key: 'second', title: 'Надовго' },
  ]);

  return (
    <View style={styles.container}>
      <AppHeader />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
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
  separator: {
    backgroundColor: '#fff',
    height: 1,
    marginVertical: 10,
  },
  sliderWrapper: {
    marginVertical: 40,
    marginHorizontal: 40,
  }
});
