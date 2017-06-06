import React, { Component } from 'react';

import {
StyleSheet,
TextInput,
View,
Text,
TouchableOpacity,
StatusBar
} from 'react-native';

class LoginForm extends Component {
    render() {
        return (
            <View  style={styles.container}>
                <StatusBar 
                    barStyle="light-content" />
                <TextInput 
                    placeholder="Email veya telefon"
                    placeholderTextColor="rgba(55,55,55,0.7)"
                    returnKeyType="next"
                    onSubmitEditing={()=> this.passwordInput.focus() }
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} 
                    />
                
                <TextInput 
                    placeholder="Şifre"
                    placeholderTextColor="rgba(55,55,55,0.7)"
                    returnKeyType="go"
                    secureTextEntry
                    ref={(input)=> this.passwordInput = input }
                    style={styles.input} 
                    />
                    <TouchableOpacity 
                        style={styles.buttonContainer}>
                        <Text 
                            style={styles.buttonText}>
                            Giriş
                        </Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        paddingHorizontal: 10, 
        color: '#333'
    },
    buttonContainer: {
        backgroundColor: '#D32F2F',
        paddingVertical: 10
    },
    buttonText:{
        textAlign:'center',
        color: '#fff',
        fontWeight: '700'
    }
});

export default LoginForm;