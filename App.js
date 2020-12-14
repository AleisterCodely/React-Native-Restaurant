import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from  'react-navigation';
import SearchView from './src/Views/SearchView';

const navigator=createStackNavigator({
  Search: SearchView
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Test Flight'
  }
});

export default createAppContainer(navigator);