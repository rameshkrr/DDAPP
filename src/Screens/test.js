import React, { Component } from "react";
import KeyboardSpacer from 'react-native-keyboard-spacer';
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
    TextInput,
    KeyboardAvoidingView,Animated,Keyboard
    
} from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from "react-navigation";
import {Icon, Button, Container, Header, Content,Left ,Right,Item,Input,Card,CardItem} from 'native-base'
import { Ionicons,FontAwesome,Entypo } from '@expo/vector-icons'

import FAIcon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
import * as CartAction from '../actions/CartActions';
import ValidationComponent from 'react-native-form-validator';

class test extends ValidationComponent {

  constructor(props) {
      super(props);
      this.state = {
       
      firstName: '',
      lastName: '',
      address_1: '',
      address_2: '',
      city: 'Salem',
      state:'Tamilnadu',
      postcode:'',
      country:'India',
      email:'',
      phone:'',
      data:[]
      }
  
      }
  
      state={ 
        data:[]
    }
   
    fetchData = async() => {

      //response
      const response = await
      fetch('https://dreamdesign.rkhomeappliances.co.in/wp-json/wc/v2/products?per_page=100&consumer_key=ck_45a5668a0951cde83a24b1bedb9741604174a40b&consumer_secret=cs_c0e5f6818a54eecaf2bef01c0516821550497be9');
      //posts
      const posts = await response.json();
      this.setState({data:posts});
  }
     
    componentDidMount(){
		this.props.CartAction.getCart();
	}
	_keyExtractor = (item, index) => item.id.toString();
  

	
    
      // Call ValidationComponent validate method
     
     render() {
       const valuation = this.validate({
        firstName: {minlength:3, maxlength:7, required: true},
        
        
      });
      
      let item = '';
      const { cart } = this.props;
      console.log('render cart', cart);
      // const {navigate} = this.props.navigation;
      
      const Items = <FlatList 
         data={cart}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) =>
          <View>
          <Text style={{color:"#eee"}}>{pro_id = item.id}</Text>
          
         
          </View>
           

                     }
        />;
        
       return (
          
          <View>
      
   

               </View>
         
          
        )
      
      
  }
 
  removeItem(item) {
		this.props.CartAction.removeFromCart(item);
    }

  
      postOrder(item) {
        
        const {navigate} = this.props.navigation; 
        fname = this.state.firstName;
        lname= this.state.lname;
        add1= this.state.add1;
        add2=this.state.add2;
        postcode=this.state.postcode;
        email=this.state.email;
        phone=this.state.phone;
        
        if(fname == ''){
          alert("Enter First Name");
        }
        if(lname == ''){
          alert("Enter Last Name");
        }
        if(add1 == ''){
          alert("Enter Address");
        }
        if(add2 == ''){
          alert("Enter Address");
        }
        if(postcode == ''){
          alert("Enter Post");
        }
        if(email == ''){
          alert("Enter Email");
        }
        if(phone == ''){
          alert("Enter Mobile Number");
        }

       

        if(fname != '' && lname != '' && add1!= '' && add2 != '' && postcode != '' && email != '' && phone != '' ){
          
          
          
          url = "https://dreamdesigners.rkhomeappliances.co.in/wp-json/wc/v2/orders?&consumer_key=ck_6583bdf76fe9b8d80b98880bf009bb9f03ba819e&consumer_secret=cs_603630202af533fd87ac134c55441c69bcfa4d93";
          
          let data = {
              payment_method: '',
              payment_method_title: 'Cash on delivery',
              billing: {
              first_name: this.state.firstName,
              last_name: this.state.lastName,
              address_1: this.state.address_1,
                  address_2: this.state.address_2,
                  city: this.state.city,
                  state: this.state.state,
                  postcode: this.state.postcode,
                  country: this.state.country,
                  email: this.state.email,
                  phone: this.state.phone
                  },
                  shipping: {
                      first_name: this.state.firstName,
                      last_name: this.state.lastName,
                      address_1: this.state.address_1,
                      address_2: this.state.address_2,
                      city: this.state.city,
                      state: this.state.state,
                      postcode: this.state.postcode,
                      country: this.state.country,
                    },
                line_items: [
                  
                ],
                "shipping_lines": [
                  {
                    "method_id": "free_shipping",
                    "method_title": "Free shipping",
                    "total": "0.00"
                  }
                ]
                
          }
          
          
          var obj = {};
         
                obj["product_id"] = pro_id;
                obj["quantity"] = 1;
                data.line_items.push(obj);
          console.log('Data:' + JSON.stringify(data))
          fetch(url, {
          method: "POST",
          headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
          });
          
          navigate("Success");
          //this.props.CartAction.removeItem(item)
        }
        }
      }
          
      
  
      const styles = StyleSheet.create({
        containerempty: {
          flex: 1,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
        },
          container: {
              justifyContent: 'center',
              padding: 20,
            },
            wrapper: {
    flex: 1
  },
            container2: {
  flex: .5,
    flexDirection: 'row',
    justifyContent: 'flex-start', //replace with flex-end or center
    justifyContent: 'space-between',
    margin:5,
},
container3: {
  flex: .5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop:100 //replace with flex-end or center
},
          textInputStyle:{
              left: 0, 
              height: 45,
              width:'50%'
          },
          textInputStyle2:{
              right: 0, 
              height: 45,
              width:'50%'
          },
   
            button: {
              alignItems: 'center',
              backgroundColor: '#4C3E54',
              paddingTop:20,
              width: '100%',
              height: 50,
              marginTop:10,    
          },
        });
  
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

export default connect(mapStateToProps, mapDispatchToProps)(test);