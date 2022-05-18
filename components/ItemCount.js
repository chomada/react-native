import Global from '../styles/Global';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';



const ItemCount = ({initial, setInitial,handleAdd}) => {
        
    const plus = () => {
        if (initial < 10) setInitial(initial + 1);


    }
    const min = () => {
        if (initial > 1) setInitial(initial - 1);
    }
    return (
        <View><View style={styles.flexi}>
            <TouchableOpacity style={styles.btn}


                onPress={min}><Text>-</Text></TouchableOpacity><Text style={Global.textWhite}>{' '}{initial} {' '}</Text><TouchableOpacity style={styles.btn} onPress={plus}><Text>+</Text></TouchableOpacity>


</View>
                <TouchableOpacity onPress={()=>handleAdd(initial)}>
                    <Text style={Global.btn}
                    >Add to cart</Text>
                </TouchableOpacity>
            
        </View>

    )
}

export default ItemCount;

const styles = StyleSheet.create({

    flexi:{
        
        display:"flex",
        flexDirection:"row",
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center'
        
    },
    btn: {
        alignItems:'center',
        padding: 2,
        margin: 2,
        backgroundColor:'#F79F79',
        borderRadius:15,
        minWidth:20,
        textAlign:'center',
        color: 'white',
        fontWeight:'bold'
    }
})