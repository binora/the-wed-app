import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native';
import { Container, Content, Card, CardItem, Text, Header, Footer, Title, Thumbnail} from 'native-base';

import rishuImage from '../images/me.jpg';


// Components
import Login from './login';




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible : false,
      atLogin : true
    }
  }
  showImage() {
    this.setState({
      previewVisible : true
    })
  }
  closeImage() {
    this.setState({
      previewVisible : false
    })
  }
  render() {

    if (this.state.atLogin) {
      return <Login/>
    }
    return (
       <Container style={styles.container}>
         <View style={styles.header}>
           <TouchableOpacity onPress={this.showImage.bind(this)}>
             <Thumbnail style={{marginLeft: 20}} source={rishuImage} size={50}/>
           </TouchableOpacity>
           <Text style={{color : 'white', marginLeft : 20, fontSize: 20}}>
             Welcome Anand Kamra!
           </Text>
         </View>


             <Modal visible={this.state.previewVisible} >
               <Image source={rishuImage}/>
             </Modal>
                <Content style={styles.content}>
                    <Card>
                        <CardItem header button>
                            <Text>
                                Events
                            </Text>
                        </CardItem>
                        <CardItem>
                          <Text>
                            rishu
                          </Text>
                        </CardItem>
                        <CardItem header>
                            <Text>
                              Hotel Details
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                              ALl hotel room details here

                            </Text>
                        </CardItem>
                        <CardItem header>
                            <Text>
                                Gallery
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                              All Shaadi events pics here
                            </Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    flexDirection : 'column'
  },
  content : {
    flex : 1,
    marginTop : 30,
    marginLeft : 10,
    marginRight :10
  },
  header : {
    justifyContent : 'flex-start',
    backgroundColor : "blue",
    flexDirection : 'row',
    alignItems : 'center',
    height :80
  }

});
