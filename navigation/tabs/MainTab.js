import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import CategoryStack from '../stacks/CategoryStack';
import CartStack from '../stacks/CartStack';
import OrderStack from '../stacks/OrderStack';

const MainTab = () => {
    const Tab = createBottomTabNavigator();
  return (
    
        <Tab.Navigator
        screenOptions={{headerShown:false}}
        >
            <Tab.Screen name="Home" component={CategoryStack}/>
            <Tab.Screen name="Cart" component={CartStack}/>
            <Tab.Screen name="Orders" component={OrderStack}/>

        </Tab.Navigator>
      
    
  )
}

export default MainTab