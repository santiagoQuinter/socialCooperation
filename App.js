import React, { Component }  from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//importamos el input genérico
import DefaultInput from './src/components/UI/DefaultInput/DefaultInput';

export default class App extends Component {
  state = {
    name:''
  }
  
  updadeValue = (val) =>{
    this.state.name = val;
  }
  
  buttonClicked = () =>{
    alert(`hola  ${this.state.name}`) 
  }

  render(){
    return (
      <View style={styles.container}> 
        <Text>Open up App.js to start working on your app!
              testing react native from cellphone
        </Text>
        <Greeting name="Jose repelin cuchara"/>
        <DefaultInput 
          placeholder ='introduce tú nombre'
          // value={this.state.name}
          onChangeText={this.updadeValue}
        />
        <View style={styles.buttonContainer}>
          <Button
            title='Click me'
            onPress = {this.buttonClicked}/>
        </View>
      </View>
    );
  }
}

// export default function App() {
//   return (
//     <View style={styles.container}> 
//       <Text>Open up App.js to start working on your app!
//             testing react native from cellphone
//       </Text>
//       <Greeting name="Jose repelin cuchara"/>
//       <DefaultInput placeholder ='introduce tú nombre'/>
//       <View style={styles.buttonContainer}>
//         <Button
//           title='Click me'
//           onPress = {buttonClicked}/>
//       </View>
//     </View>
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    backgroundColor : '#fff',
    padding : 10,
    margin : 5,
    borderRadius : 5,
    borderWidth: 1,
    borderColor: 'black',
  }
});

const Greeting = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

// const buttonClicked = () =>{
//   alert('button clicked')
// }