import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Orders from "../../screens/Orders";


const OrderStack = () => {

  const Stack = createNativeStackNavigator();

  return (
    
      <Stack.Navigator
        
      >
        <Stack.Screen 
        name='Orders Tab' 
        component={Orders}
        options={{ title: 'Orders',
        headerStyle: {
          backgroundColor: '#FAE48BFF',
        },
        headerTintColor: '#666',
        headerTitleStyle: {
          fontWeight: 'bold'
        } }} />
       
      </Stack.Navigator>
    
  )
}

export default OrderStack