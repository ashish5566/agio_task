import * as React from 'react';
import {Button,View,Dimensions,TouchableOpacity,Text,TextInput,Image} from 'react-native'
import ButtonComponent from '../Components/button';
import InputComponent from '../Components/Inputcomponent';
const ForgotScreen = ({ navigation }) => {
    return (
        <View style={{padding:20 ,width:Dimensions.get('screen').width,justifyContent:'center',backgroundColor:"#F4F9FF"}}>
        
<View style={{height:"90%"}}>
<TouchableOpacity style={{width:'18%'}}>
         <View style={{borderRadius:150,padding:20,backgroundColor:'#FFF',shadowColor: 'black',
      shadowRadius: 10,shadowOpacity: 1,elevation:20}}>
             <Image source={require('../Images/back.png')} />
         </View>
         </TouchableOpacity>
<View style={{marginTop:150,width:"100%",justifyContent:"center"}}>
         <Text style={{color:"#black",fontSize:38,lineHeight:43}}>Forgot password?</Text>
     </View>
    
    <View style={{marginVertical:50}}>
    <InputComponent placeholder={"Enter Email"}/>
    </View>
     
     <View style={{marginVertical:10,width:"100%",justifyContent:"center"}}>
         <Text style={{color:"#black",fontSize:12,lineHeight:14.4}}>* We will send you a message to set or reset your new password</Text>
     </View>
</View>

    <View style={{height:"10%"}}>
    <ButtonComponent   buttonname={"Send Code"} click={()=>alert("working perfect")}/>
    </View>


        </View>
      
      
    );
  };
  export default(ForgotScreen)