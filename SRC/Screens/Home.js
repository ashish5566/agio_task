import * as React from 'react';
import {Button,View,Dimensions,TouchableOpacity,Text,TextInput,Image} from 'react-native'
import ButtonComponent from '../Components/button';
import InputComponent from '../Components/Inputcomponent';
const HomeScreen = ({ navigation }) => {
    return (
        <View style={{padding:20 ,height:Dimensions.get('screen').height,width:Dimensions.get('screen').width,justifyContent:'center',backgroundColor:"#F4F9FF"}}>

    <InputComponent placeholder={"Enter Username"}/>
    <InputComponent placeholder={"Enter Password"}/>
     <View style={{marginVertical:10,width:"100%",justifyContent:"center",alignItems:"flex-end"}}>
         <Text style={{color:"#black"}}>Forgot Password</Text>
     </View>

    <ButtonComponent buttonname={"Login"} click={()=>navigation.navigate('ForgotScreen')}/>

     <View style={{marginVertical:10,width:"100%",justifyContent:"center",alignItems:"center"}}>
         <Text style={{color:"#black"}}>or</Text>
         <Text style={{color:"#black"}}>Log In with</Text>
     </View>

     <View style={{marginVertical:10,width:"100%",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
        <TouchableOpacity>
         <View style={{borderRadius:150,padding:20,backgroundColor:'#FFF',shadowColor: 'black',
      shadowRadius: 10,shadowOpacity: 1,elevation:20,marginHorizontal:25}}>
             <Image source={require('../Images/google.png')} />
         </View>
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={{borderRadius:150,padding:20,backgroundColor:'#FFF',shadowColor: 'black',
      shadowRadius: 10,shadowOpacity: 1,elevation:20}}>
             <Image source={require('../Images/facebook.png')} />
         </View>
         </TouchableOpacity>
     </View>

     <ButtonComponent   buttonname={"Signup"} click={()=>navigation.navigate('ForgotScreen')}/>


        </View>
      
      
    );
  };
  export default(HomeScreen)