import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'

class Splash extends React.Component{
    render(){
        setTimeout(() => {
            this.props.navigation.replace('Home');
        }, 5000);
        return(
            <View style = {{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        

                <Text style={{fontWeight:'bold', fontSize: 40,paddingBottom:35}}>To Do List</Text>
                <ActivityIndicator size='large' color='#0A9EBE'/>
          
            </View>
        )
    }
}
export default Splash;