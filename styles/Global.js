import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
    alignItems: "center"


  },
  marginer: {
    marginTop: 25,
    fontWeight: 'bold'

  },


  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    color: 'white',
    textAlign: 'center'
  },
  orderTitle: {
    fontSize: 16,
    color: 'gray',
    margin: 16,

  },
  myprice: {
    padding: 15,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4FEC1',
    textAlign: 'center'

  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'


  },
  textButton2: {
    color: '#1d3557',
    fontWeight: 'bold',
    textAlign: 'center'


  },
  list: {
    padding: 20,
    marginTop: 20,
    backgroundColor: '#F79F79',
    textAlign: 'center',
    width: 200,

    fontWeight: 'bold'
  },
  modalParent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    height: 500,
    width: 320,
    backgroundColor: 'black',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  btn: {
    padding: 15,
    margin: 10,
    backgroundColor: '#1d3557',
    borderRadius: 15,
    width: 200,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }, btnPurchase: {
    padding: 15,
    margin: 10,
    backgroundColor: 'red',
    borderRadius: 50,
    width: 200,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  close: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'right',
    width: 250,
    color:'white'

  },
  input: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 15,

    margin: 10,

  },
  textWhite: {
    color: 'white',
    textAlign: 'center'
  }

});

export const colors = {
  darkBlue: '#006d77'
}