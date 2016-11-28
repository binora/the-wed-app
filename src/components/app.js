import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Container, Content, Card, CardItem, Text } from 'native-base';





export default class App extends Component {
  render() {
    return (
       <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Text>
                                Hello wrold
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                Hello wrold
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
});
