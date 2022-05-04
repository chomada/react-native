
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Categories from '../../screens/Categories';
import Products from '../../screens/Products';
import Detail from '../../screens/Detail';


const CategoryStack = () => {

  const Stack = createNativeStackNavigator();

  return (
    

    <Stack.Navigator
      initialRouteName="Categories"
    >
      <Stack.Screen name='Categories' component={Categories} options={{ title: 'Shop' }} />
      <Stack.Screen name='Products' component={Products} options={({route})=>({ title: route.params.category })} />
      <Stack.Screen name='Detail' component={Detail} options={({route})=>({ title: route.params.title })} />

    </Stack.Navigator>

  )
}

export default CategoryStack;