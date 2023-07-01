/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import SocialSwitch from "./SocialSwitch"
import Header from "./Header"
import HashtagsGraph from "./HashtagsGraph"
import SentimentsGraph from './SentimentsGraph';

function App(): JSX.Element {
  const [isInstagram, setIsInstagram] = useState(true)
  const [showSentiments, setShowSentiments] = useState(true)
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPressSwitchTab = (show: boolean) => {
    setIsInstagram(show)
  }

  const onPressTab = (show: boolean) => {
    setShowSentiments(show)
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <SocialSwitch onPressTab={onPressSwitchTab} isInstagram={isInstagram} />
        <Header onPressTab={onPressTab} showSentiments={showSentiments} />
        {!isInstagram && <View style={styles.emptyContainer}>
            <Text>Nothing to Display for Facebook!</Text>
          </View>}
        <View style={[styles.graphsContainer, !isInstagram && { height: 0}]}>
          {showSentiments && <SentimentsGraph />}
          {!showSentiments && <HashtagsGraph />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  graphsContainer: {
    height: "50%",
    width: '100%',
    marginTop: '10%',
  },
  emptyContainer: {
    height: 500,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
