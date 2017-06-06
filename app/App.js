import React, {Component} from 'react';
import {
StyleSheet,
Text,
View,
Image,
KeyboardAvoidingView
} from 'react-native';

import LoginForm from './LoginForm';

export default class App extends React.Component
{
    render(){
        return (
            <KeyboardAvoidingView
                behavior="padding" 
                style={styles.container}>
              <Image 
                source={require('./images/background.jpg')} 
                style={styles.backgroundImage}>
                                  
              <View style={styles.boxContainer}>
                <View style={styles.logoContainer}>
                    {/*<Image 
                        style={styles.logo}
                        source={require('./images/logo.png')}>                    
                    </Image>*/}
                    
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>
                        GİRİŞ
                    </Text>
                    <LoginForm/>
                </View>
              </View>
              </Image>                
            </KeyboardAvoidingView>
        );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage:{
    flex:1,
    paddingHorizontal: 30,
    paddingVertical: 140,
     width: null,
    height: null
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  formContainer :{
    marginTop: -50
  },
  boxContainer:{
    backgroundColor:"#fff",
    flex: 1
  },
  logo: {
      height: 64,
      width: 64      
  },
  title: {
      width: 160,
      marginTop: 10,
      paddingLeft:20,
      color: '#D32F2F',
      opacity: 1,
      fontSize: 20,
      fontWeight: '700',
      fontFamily: 'Roboto'
  }
});