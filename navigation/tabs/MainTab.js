import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import CategoryStack from '../stacks/CategoryStack';
import CartStack from '../stacks/CartStack';
import OrderStack from '../stacks/OrderStack';
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Image } from 'react-native';



const MainTab = () => {
    const Tab = createBottomTabNavigator();
  return (
    
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            height: 80,
            backgroundColor:'#F79F79'
          },
          tabBarLabelStyle: {
            fontSize: 14,
            margin: 0,
            
          },
        }}

        >
            <Tab.Screen options={{
                    tabBarIcon: () => (<Image source={require("./../../assets/casa.png")} style={{width: 20, height: 20, display:'flex'}} />)
                }}
 name="Home" component={CategoryStack}/>
            <Tab.Screen options={{
                    tabBarIcon: () => (<Image source={require("./../../assets/cart.png")} style={{width: 20, height: 20, display:'flex'}} />)
                }}
 name="Cart" component={CartStack}/>
            <Tab.Screen options={{
                    tabBarIcon: () => (<Image source={require("./../../assets/orders.png")} style={{width: 20, height: 20, display:'flex'}} />)
                }}
 name="Orders" component={OrderStack}/>

        </Tab.Navigator>
      
    
  )
}

export default MainTab;

