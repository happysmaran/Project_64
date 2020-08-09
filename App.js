import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import dictionary from './Database'
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
    text:'',
    isSearchPressed:false,
    word:"",
    lexicalCategory:'',
    examples:[],
    definition:""
    };
  }

  getWord=(text)=>{
    var text = text.toLowerCase()
    var word=dictionary[text]["word"]
    var lexicalCategory=dictionary[text]["lexicalCategory"]
    var definition=dictionary[text]["definition"]
    this.setState({
      "word" : word,
      "lexicalCategory" : lexicalCategory,
      "definition" : definition
    })
  }    
    
  

  render() {
    return (
      <View style={styles.heading}>

        <TextInput
        style={styles.inputBox}
        onChangeText={text => {
          this.setState({
            text:text,
            isSearchPressed:false,
            word:"loading...",
            lexicalCategory:'',
            examples:[],
            definition:""
          });
        }}
        value={this.state.text}
      ></TextInput>
      <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({isSearchPressed:true});
            this.getWord(this.state.text)
          }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>

        <View>
          <Text>
            Word:{""}
          </Text>
          <Text style={{fontSize:18}}>
            {this.state.word}
          </Text>
        </View>

        <View>
          <Text>
            Type:{""}
          </Text>
          <Text style={{fontSize:18}}>
            {this.state.lexicalCategory}
          </Text>
        </View>

        <View>
          <Text>
            Definition:{""}
          </Text>
          <Text style={{fontSize:18}}>
            {this.state.definition}
          </Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
   goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    backgroundColor:'grey'
  }
});
