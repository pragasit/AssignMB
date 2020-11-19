import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

import bgimage from './src/bg.jpg'

const massageInput = (props) =>{
  const [Massage = setMesage] = useState(true);
  return 
}

export default function App() {
  return (

    <ImageBackground style={styles.backg} source={bgimage}>
      <View style={styles.container}>
        <Text style={styles.texth}>
          Assignment
        </Text>
        
        <StatusBar style="auto" />
      </View>
      <View style={styles.viewinput}>
        <TextInput style={styles.text} placeholder={'กรุณากรอกข้อความ'}></TextInput>
      </View>
      <View>
      <Text style={styles.massage}>Hello</Text>
      </View>
    </ImageBackground>



  );
}

const styles = StyleSheet.create({
  backg: {
    flex: 1,

    justifyContent: 'center',
    width: null,
    height: null,
  },
  texth:{
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
    fontSize:28,
    fontWeight: 'bold',
    marginTop: -600,
    borderRadius: 10
  },
  massage: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 10
  },
  container:{
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'white',
    borderRadius: 20,
    height : 30,
    width: 250,
    textAlign: 'center'
  },
  viewinput: {
    alignItems: 'center',
    marginTop: -550
  }
});
