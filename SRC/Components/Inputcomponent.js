import * as React from 'react';
import {Button,View,Dimensions,TouchableOpacity,Text,TextInput,Image} from 'react-native'
const InputComponent = (props,{ navigation }) => {
    return (
      

     <View style={{marginVertical:10}}>
     <TextInput
      style={{backgroundColor:"#6C89FF",width:"100%",alignItems:"center",height:50,justifyContent:"center",borderRadius:50,shadowColor: 'black',
      shadowRadius: 10,textAlign:"center",
      shadowOpacity: 1,elevation:20}}
      placeholder={props.placeholder}
      />
     </View>


      
      
    );
  };
  export default(InputComponent)