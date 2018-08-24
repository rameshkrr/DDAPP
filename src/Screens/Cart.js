import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    StatusBar,
	Image,
	TouchableHighlight,
    ToolbarAndroid,
	FlatList,
	ScrollView,
	AsyncStorage
    
} from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from "react-navigation";
import {Icon, Button, Container, Header, Content,Left ,Right,Item,Input,Card,CardItem} from 'native-base'
import { Ionicons,FontAwesome,Entypo } from '@expo/vector-icons'

import FAIcon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
import * as CartAction from '../actions/CartActions';

class Cart extends Component {
	state={ 
        data:[]
    }

    componentDidMount(){
		this.props.CartAction.getCart();
	}
	_keyExtractor = (item, index) => item.id.toString();

	removeItem(item) {
		this.props.CartAction.removeFromCart(item);
	  }
     render() {
    const { cart } = this.props;
	console.log('render cart', cart);
	const { navigate } = this.props.navigation;

    if (cart && cart.length > 0) {
      const Items = <FlatList contentContainerStyle={styles.list}
        data={cart}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) =>
          <View style={styles.lineItem} >
          
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.text}>Name: {item.name}{"\n"} {"\n"} Price: ₹{item.price}</Text>

            <TouchableOpacity style={{ marginLeft: -110,marginTop:110 }} onPress={() => this.removeItem(item)}><Text style={styles.transparentButton2}>Remove</Text></TouchableOpacity>
          
          </View>
        }
      />;
      return (
        <View style={styles.container}>
		  {Items}

		  <TouchableOpacity style={styles.button} underlayColor="#1f1f1f" onPress={() => navigate("Checkout")} >
                        <Text style={{ color: '#fff' }}> CHECKOUT </Text>
                    </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text>Cart is empty!</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  lineItem: {
	flexDirection: 'row',
	marginBottom:10,
  width:600
  
  },
  list: {
    flexDirection: 'column'
  },
  image: {
    width: 150,
    height: 200,
    resizeMode:'contain',
    justifyContent:'center',
    marginLeft:30

  },
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
	
	marginTop:30,marginLeft:30
  },
  price: {
    fontSize: 20,
  padding: 5,
  marginTop:100
  },
  button: {
	alignItems: 'center',
	backgroundColor: '#4C3E54',
	paddingTop:20,
	width: '100%',
	height: 50,
	marginTop:10,    
},
  transparentButton2:{
     fontSize: 18,
    fontWeight: '100',
    color: '#4C3E54',
    padding: 8,
    margin: 5,
    borderRadius: 2,
    borderColor: '#4C3E54',
    borderWidth: 1,
    textAlign: 'center'
  },
})

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    CartAction: bindActionCreators(CartAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);