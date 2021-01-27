import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { createAppContainer } from  'react-navigation';
import { Provider } from 'react-redux';
import { store, persistor } from './src/Store';
import MainNavigator from './src/navigators/MainNavigator'

const AppContainer = createAppContainer (MainNavigator);
  
export default () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppContainer />
        </PersistGate>        
    </Provider>
)