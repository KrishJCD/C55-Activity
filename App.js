import React, { Component } from 'react';
import { Button, View, Text, Alert, TouchableOpacity,StyleSheet } from 'react-native';
import {Audio} from 'expo-av';


class RedButton extends Component {

  playSound = async ()=>{
    await Audio.Sound.createAsync({
      uri:"https://assets.mixkit.co/sfx/download/mixkit-home-standard-ding-dong-109.wav"
    },
    {
      shouldPlay:true
    }
    );
  }

  render() {
    return (
      <View style={{ padding: 40 }}>
        <Button
          color={this.props.color}
          title={this.props.title}
          onPress={this.playSound}
        />
        
        
      </View>
    );
  }

  displayAlert = () => {
    alert('Dont Disturb Me!');
  };
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 40, backgroundColor: '#000000', flex:1, justifyContent:"space-between", alignItems:"center"}}>
        <RedButton color="cyan" title="Sound1" />
        <RedButton color="magenta" title="Sound2" />
        <RedButton color="red" title="Sound3" />
        <RedButton color="blue" title="Sound4" />
        <Text>My First React Component</Text>


        <TouchableOpacity style={styles.touch}>
          <Text style={styles.text1}>Play Sound</Text>
        </TouchableOpacity>


      </View>
    );
  }

}

const styles=StyleSheet.create({
    touch: {
      backgroundColor:"#ffffff",
      marginBottom:30,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:200,
      width:150,
      height:40,
    },

    text1: {
      color:"#212121", 
      fontSize:20,
      fontWeight:"bold"
      //textAlign:"center"
    }
})
