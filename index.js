/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import Mewbasic from './pages/Mewbasic';
// import AllinOne from './pages/AllinOne';
import CC from './components/CurrencyConverter/CurrencyConverter'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => CC);
