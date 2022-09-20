/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as ReduxProvider} from 'react-redux';

import store from './src/redux';

const app = () => (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );

AppRegistry.registerComponent(appName, () => app);
