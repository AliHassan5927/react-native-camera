import React from 'react'
import { LogBox } from 'react-native'
import Routes from './src/routes'
import store from './src/redux'
import { Provider } from 'react-redux';


const App = () => {
  LogBox.ignoreAllLogs()
  return (

    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App