import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import {Icon, Button, Container, Header, Content,Left, Body } from 'native-base';
import HomePage from './src/Screens/HomePage'
import HomeUp from './src/Screens/HomeUp'
import OriginPage from './src/Screens/OriginPage'
import Products from './src/Screens/Products'
import Category from './src/Screens/Category'
import Checkout from './src/Screens/Checkout'
import Success from './src/Screens/Success'
import Cart from './src/Screens/Cart'
import InitialState from './src/reducers/InitialState';
import DrawerContainer from './src/Screens/DrawerContainer';
import configureStore from './src/store/configureStore';
import DropdownMenu from 'react-native-dropdown-menu'; 
import Splash from './src/Screens/Splash'


const DrawerNavigation = DrawerNavigator({
   HomeUp: {
    screen: HomeUp,
    navigationOptions: {
      title: "Dream Designers"
    }
  },
  OriginPage: {
    screen: OriginPage,
    navigationOptions: {
      title: "Dream Designers"
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      title: "Category"
    }
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: {
      title: "Checkout"
    }
  },
  Products: {
    screen: Products,
    navigationOptions: {
      title: "Products"
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      title: "Cart"
    }
  },
  Success: {
    screen: Success,
    navigationOptions: {
      title: "Success"
    }
  },
}, {
    contentComponent: DrawerContainer,
    initialRouteName:'HomeUp',
    
    
  });


const StackNavigation = StackNavigator({
  DrawerNavigation: { screen: DrawerNavigation }
}, {
  headerMode: 'float',
    navigationOptions: ({ navigation, screenProps }) => ({
      headerStyle: { backgroundColor: '#4C3E54' },
      headerTintColor: 'white',
      headerLeft: drawerButton(navigation),
      headerRight: cartButton(navigation, screenProps)
    })
  });

const drawerButton = (navigation) => (
  <Text
    style={{ padding: 15, color: 'white' }}
    onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }
    }><Ionicons name="ios-menu" size={30} /></Text>
);

const cartButton = (navigation, screenProps) => (
  <Text style={{ padding: 15, color: 'white' }}
    onPress={() => { navigation.navigate('Cart') }}
  >
    <EvilIcons name="cart" size={30} />
    {screenProps.cartCount}
  </Text>
);

class CA extends React.Component {
  render() {
    const cart = {
      cartCount: this.props.cart.length
    }
    return (
      <StackNavigation screenProps={cart} />
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const ConnectedApp = connect(mapStateToProps, null)(CA);

const store = configureStore();

class App extends React.Component {
  constructor(props){
 super(props);

 
 this.state = {
  component : <Splash />
 };
 
}
test(){
  return(
  <Provider store={store}>
        <ConnectedApp />
      </Provider>
      )
}
componentDidMount(){
     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
      // Add your logic for the transition
      this.setState({ component: this.test() })
 }, 3000);
}
  render() {
    console.disableYellowBox = true;

    return (
      
        this.state.component
      
    )
  }
}

export default App;