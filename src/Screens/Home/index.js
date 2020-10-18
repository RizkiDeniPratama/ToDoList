import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

class Home extends React.Component {
  state = {
    data: [],
    input: '',
  };
  addData = () => {
    const data = this.state.input;
    this.state.data.push(data);
    this.setState({data: this.state.data});
    this.setState({input: ''});
  };
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.textHeader}> To Do List</Text>
        </View>
    
        <ScrollView style={styles.scroll}>
          {this.state.data.map((value, key) => {
            return (
              <View style={styles.boxList} key={key}>
                <View style={styles.content}>
                  <Text>{value}</Text>
                </View>
                <View style={styles.delete}>
                 
                    <Icon name='trash-2' size={30} color='white' onPress = {() => {
                    this.state.data.splice(key,1)
                    this.setState({data: this.state.data});
                    }} />
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={{width:'100%',height:55,flexDirection:'row',elevation:5,backgroundColor:'white'}}>
          <View style={{width: '80%', borderWidth: 1.5, borderRadius: 4, borderColor: '#A3A3A3', margin: 8}}>
            <TextInput
              placeholder="Tulis Kegiatan"
              backgroundColor='white'
              value={this.state.input}
              onChangeText={(text) => this.setState({input: text})}
            />
          </View>
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Icon name="plus-square" color='#0A9EBE' size={40} onPress={() => this.addData()} />
          </View>
        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 50,
    
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  scroll: {
    flex: 1,
    
  },
  boxList: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 5,
    marginTop: 10,
    borderLeftWidth:20,
    borderLeftColor:'#0A9EBE'
  },
  content: { 
    height: 50,
    width: '80%',
    padding: 5,
  },
  delete: {
    height: 50,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#A90101'
  },
});