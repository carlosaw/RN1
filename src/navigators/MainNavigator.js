import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeDrawer from '../navigators/HomeDrawer';
import Config from '../screens/Config';
import Login from '../screens/Login';

const MainNavigator = createBottomTabNavigator({
    Home:{
        screen:HomeDrawer
    },
    Config:{
        screen:Config
    },
    Login:{
        screen:Login
    }
});

export default MainNavigator;