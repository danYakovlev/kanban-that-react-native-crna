import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { Image } from 'react-native';

import immm from './CAT.png';


class Login extends Component {
    onPress = () => {
        alert('on PRESS!!!');
    }

    render() {
        //const { width, height } = Dimensions.get('window');
        
        return (
            <Container>
                <Content contentContainerStyle={{
                    flex: 1,
                    backgroundColor: 'rgb(40,62,90)',
                    justifyContent: 'center',
                }}>
                    <Image
                        source={ require('./CAT.png') }
                        style={{ alignSelf: 'center', marginBottom: 100 }}
                    />
                    <Button
                        light
                        bordered
                        style={{ alignSelf: 'center' }}
                        onPress={() => this.onPress()}    
                    >
                        <Text> TRY </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default Login;