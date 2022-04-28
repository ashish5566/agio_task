import * as React from 'react';
import {Button,View,Dimensions,TouchableOpacity,Text,TextInput,Image} from 'react-native'
const ButtonComponent = (props,{ navigation }) => {
    return (
   

     <View style={{marginVertical:10}}>
     <TouchableOpacity onPress={props.click} style={{backgroundColor:"#fff",width:"100%",alignItems:"center",height:50,justifyContent:"center",borderRadius:50,shadowColor: 'black',
            shadowRadius: 10,shadowOpacity: 1,elevation:20}}>
          <View>
              <Text>{props.buttonname}</Text>
          </View>
      </TouchableOpacity> 
     </View>

      
      
    );
  };
  export default(ButtonComponent)