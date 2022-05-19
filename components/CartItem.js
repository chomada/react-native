import { Image, Text, TouchableOpacity, View,StyleSheet } from 'react-native'
import Global from '../styles/Global';
const CartItem = ({ item, handleRemove }) => {





  return (
    <View>
      <Text style={styles.textButton}
      >  {item.nombre}</Text>
      <Image source={{ uri: item.image }}
        style={{
          height: 200,
          width: '95%',
          borderRadius: 15

        }}
        resizeMode="cover" />
      <Text style={styles.textButton}
      > quantity: {item.quantity}</Text>
      <Text style={styles.textButton}
      > total: ${item.price * item.quantity}</Text>
      <TouchableOpacity style={Global.btn} onPress={() => handleRemove(item.id)}>
        <Text style={Global.textButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartItem;

const styles=StyleSheet.create({

  textButton:{
    color: 'white', 
  fontWeight:'bold',
  textAlign:'center',
  margin: 20,
  fontWeight:'bold'
  
  
  }
})
