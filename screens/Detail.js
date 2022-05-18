
import { useContext,useState } from 'react';
import {View, Text,Image,ImageBackground} from 'react-native';
import ItemCount from '../components/ItemCount';
import {Shop} from '../context/ShopProvider';
import Global from '../styles/Global';
const Detail = ({ route}) => {

  const {item} = route.params;
  const [initial, setInitial] = useState(1);

  const {addCart} = useContext(Shop);
  const handleAdd = (amount) => {
    addCart(item, amount)
    alert("producto agregado")
}

  return (
      <View style ={Global.container}
      >
                      <ImageBackground source={require("./../assets/ps52.jpg")} resizeMode="cover" style={Global.image}></ImageBackground>

          <Text style ={Global.title}
>{item.nombre}</Text>
          <Image source ={{uri: item.image}}
              style = {{
              height: 200,
              width: '95%',
              borderRadius:15

            }}
            resizeMode = "cover"/>
            <Text style ={Global.title}
>${item.price}</Text>
<ItemCount initial={initial} setInitial={setInitial}handleAdd={handleAdd}/>
            
      </View>
  )
}

export default Detail;

