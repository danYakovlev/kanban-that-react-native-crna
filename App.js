import React, { Component } from 'react';
import { Text as TextNative, TextInput } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selected: 0,
      text: 'This is react-native components!',
    }
  }

  onClick = () => {
    if(this.state.selected == 0) {
      this.setState({
        selected: 1,
      });
    } else {
      this.setState({
        selected: 0,
      });
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Segment>
              <Button onPress={() => this.onClick()} first active={this.state.selected == 0}><Text>Pupp</Text></Button>
              <Button onPress={() => this.onClick()} last active={this.state.selected == 1}><Text>Cubs</Text></Button>
            </Segment>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Text> Hello!</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TextNative>{this.state.text}</TextNative>
        </Content>
      </Container>
    );
  }
}