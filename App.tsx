
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Navigator from "./src/routes/routes"
import store from './src/store';
import * as Font from "expo-font"
import AppLoading from 'expo-app-loading'

export default function App() {

  const getFont = () => Font.loadAsync({
    'carter': require('./assets/fonts/CarterOne-Regular.ttf')
  })

  const [fontLoaded, setFontsLoaded] = useState(false)

  return (
    <Provider store={store}>
      {fontLoaded ?
        <Navigator />
      : <AppLoading startAsync={getFont} onFinish={() => setFontsLoaded(true)}  onError={() => console.log('error')}/>
      }
    </Provider>
  );
}
