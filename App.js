import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Sandbox from './components/Sandbox';
import TodoItem from './components/TodoItem';

const App = () => {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'paly on the switch', key: '3'},
  ])

  const pressHandler = (key) => {
     setTodos((prevTodos) => {
       return prevTodos.filter(todo => todo.key != key)
     })
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos(( prevTodos ) => {
        return[
          {text: text, key: Math.random().toString() },
          ...prevTodos, 
        ]
      })
    }
    else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long.',[
        {text: 'Understood', onPress: () => console.log('closed')}
      ])
    }
      
  }
  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
      <Header/>
        <View style={styles.content}>
         <AddTodo submitHandler={submitHandler}/>
           <View style={styles.list}>
             <FlatList
               data={todos}
               renderItem={({item}) => (
                 <TodoItem item={item} pressHandler={pressHandler}/>
               )}
             />
           </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
   },
   content: {
     padding: 40,
     flex: 1,
     backgroundColor: '#D1D1D1'
   },
   list: {
     flex: 1,
     marginTop: 20,
    //  backgroundColor: 'rgb(247, 234, 218)'
   }
});

export default App;
