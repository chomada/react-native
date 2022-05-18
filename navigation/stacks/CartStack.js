import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Cart from "../../screens/Cart";


const CartStack = () => {

  const Stack = createNativeStackNavigator();

  return (

    <Stack.Navigator

    >
      <Stack.Screen
        name='Cart Tab'
        component={Cart}
        options={{
          title: 'Cart',
           headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} />

    </Stack.Navigator>

  )
}

export default CartStack;

