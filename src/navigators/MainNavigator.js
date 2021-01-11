import { createStackNavigator} from 'react-navigation-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import { Right } from 'native-base';

const MainNavigator = createStackNavigator({
    Welcome:{
        screen:Welcome
    },
    Login:{
        screen:Login
    }
}, {
    defaultNavigationOptions:{
        headerTitleAlign: 'center',
        headerLeftContainerStyle:{
            marginLeft: 20
        },
        headerRightContainerStyle:{
            marginRight: 20
        },        
        headerStyle:{
            backgroundColor:'#FFF',
            height: 100
        }
        /*,
        headerTitleStyle:{
            //color:'#FFFFFF',
            fontWeight:'bold'
        },
        headerTintColor:'#FFFFFF',
        //headerBackTitle:'Voltar'
        headerTitleContainerStyle:{
            backgroundColor:'#DDD'
        },
        headerLeftContainerStyle:{
            backgroundColor:'#999'
        },
        headerRightContainerStyle:{
            backgroundColor:'#000000'
        },
        headerTitleAlign: 'center'
        */  
    }
});

export default MainNavigator;