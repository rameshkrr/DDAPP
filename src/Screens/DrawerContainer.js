import React from 'react'
import { StyleSheet, Text, View, Image,FlatList } from 'react-native'
import { NavigationActions } from 'react-navigation'
import {Icon, Button, Container, Header, Content,Left, Body,Right } from 'native-base';
import DropdownMenu from 'react-native-dropdown-menu';
import Display from 'react-native-display';
import { Ionicons, EvilIcons } from '@expo/vector-icons';



export default class DrawerContainer extends React.Component {

  

 
  state={ 
        data:[],
        enable: false,
    }

toggleDisplay() {
    let toggle = !this.state.enable;
    this.setState({enable: toggle});
  }
    fetchData = async() => {
        
        const allCat = "https://dreamdesign.rkhomeappliances.co.in/wp-json/wc/v2/products/categories?per_page=100&consumer_key=ck_45a5668a0951cde83a24b1bedb9741604174a40b&consumer_secret=cs_c0e5f6818a54eecaf2bef01c0516821550497be9"
        const noEmptyCat ="https://dreamdesigners.rkhomeappliances.co.in/wp-json/wc/v2/products/categories?per_page=100&hide_empty=true&consumer_key=ck_6583bdf76fe9b8d80b98880bf009bb9f03ba819e&consumer_secret=cs_603630202af533fd87ac134c55441c69bcfa4d93"
        //response
        const response = await
        fetch(noEmptyCat);
        //posts
        const posts = await response.json();
        this.setState({data:posts});
    }
    componentDidMount(){
        //page load
    this.fetchData();
    //this.props.ProductAction.getProducts();
    }
     toggleDisplay() {
    let toggle = !this.state.enable;
    this.setState({enable: toggle});
  }
  render() {
    const { navigation } = this.props

    return (
      <Container style={styles.container}>
          <Image
          style={styles.drawerImage}
          source={require('../../logo2.png')}/>
      <Content>
      <View>
       
        <Text
          onPress={() => navigation.navigate('HomeUp')}
          style={styles.transparentButton}>
          Home
        </Text>


<Text onPress={this.toggleDisplay.bind(this)}

          style={styles.transparentButton}>
          Categories
          </Text>
              <Right style={{position:'absolute',right:10,top:85}}><EvilIcons name="chevron-down" size={30}  /></Right>

          <Display 
            enable={this.state.enable} 
            enterDuration={300} 
            exitDuration={250}
            exit="fadeOutDown"
            enter="fadeInUp"
          >
         <FlatList contentContainerStyle={styles.list} numColumns={1} 
            data={this.state.data || []}
            keyExtractor = {(x,i) =>i.toString()}
            renderItem = {({item})=>
            <View> 
        
           <Text  onPress={(event) => {
                        // onPress event fires with an event object
                        const { navigate } = this.props.navigation;
                        navigate('Category', { category: item.slug,catname:item.name,catid:item.id });
           }}
 style={styles.transparentButton2}>{ item.name}</Text>
                
        </View>
        } />
                  </Display>

        <Text
          onPress={() => navigation.navigate('Cart')}
          style={styles.transparentButton}>
          Cart
        </Text>
        <Text
          onPress={() => navigation.navigate('Checkout')}
          style={styles.transparentButton}>
          Checkout
        </Text>
        
        
      </View>
      </Content>
    </Container>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  transparentButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4C3E54',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#4C3E54',
    borderWidth: 1,
    textAlign: 'center'
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
  drawerImage:{
    height:170,
    width:320,
    marginLeft:-40,
    marginTop:-55,
    alignItems:'center',
  }
})
