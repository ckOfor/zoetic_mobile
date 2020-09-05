// react
import React, { useEffect, useState } from 'react';

// react-native
import { StyleSheet, Text, View } from 'react-native';

// third-parties
import { StatusBar } from 'expo-status-bar';
import { NavigationScreenProps } from "react-navigation";
import { Asset } from 'expo-asset'
import * as Font from "expo-font"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

// redux
import DebugConfig from "./config/debug-config"
import { AppWithNavigationState } from "./navigation/redux-navigation"
import configureStore from "./redux/create-store"

export const { store, persistor } = configureStore();

interface ContactUsScreenProps extends NavigationScreenProps {}

type Props = ContactUsScreenProps

const App = (props: Props) => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)

  useEffect(() => {
    loadResourcesAsync()
  }, [])

  const loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        
      ]),
      Font.loadAsync({
       
      }),
    ]);

    setIsLoadingComplete(true)
  };

  if (!isLoadingComplete) return null;

  return (
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Text> Loading... </Text>}>
          <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
          </View>
        </PersistGate>
      </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// allow reactotron overlay for fast design in dev mode
//@ts-ignore
export default DebugConfig.useReactotron ? console.tron.overlay(App) : App
