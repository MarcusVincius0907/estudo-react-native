import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import CheckBox from 'expo-checkbox';
import List from "./list";
import { useState, useEffect } from 'react';

const todos_init = [
  {
    id: 0,
    title: 'First Item',
    isChecked: false
  },
  {
    id: 1,
    title: 'Second Item',
    isChecked: false
  },
  {
    id: 2,
    title: 'Third Item',
    isChecked: false
  },
];

export default function App() {

  const [todos, setTodo] = useState(todos_init)
  const [inputTodo, setInputTodo] = useState('')

  const addTodo = () => {
    if(inputTodo){
      let currentTodos = [...todos];
      currentTodos.push({id: todos.length + 1, title: inputTodo, isChecked: false})
      setTodo(currentTodos);
      setInputTodo('');
    }else
      console.log('its empty');
  }

  const checkTodo = (indexTodo: number) => {
    let currentTodos = [...todos];
    currentTodos[indexTodo].isChecked = !currentTodos[indexTodo].isChecked;
    setTodo(currentTodos);
  } 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>

        <Text style={styles.title}>TO DO's App</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setInputTodo(e)}
            value={inputTodo}
            placeholder="Enter a to do"
            testID="textInput"
          ></TextInput>
          <View style={styles.divider}></View>
          <Button testID="btn" onPress={() => addTodo()} title="Confirm">
          </Button>
        </View>
        
        <ScrollView style={styles.scroll}>
          {todos.map((v,i) => 
          <TouchableOpacity  key={i}  onPress={()=> checkTodo(i)
          }>
            <View style={styles.todoItem}>
              <CheckBox
                value={v.isChecked}
                onValueChange={() =>  checkTodo(i)}
              />
              <View style={styles.divider}></View>
              <Text>
                 {v.title}
              </Text>
            </View>
        </TouchableOpacity>
          )}

          
        </ScrollView>

        
        
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    margin: 10,
  },
  inputContainer:{
    flexDirection: "row",
    padding: 10,
    marginTop: 10
  },
  title:{
    fontSize:40,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginLeft:10,
    width: 200,
  },

  btn:{
    height: 40,
    borderWidth: 1,
    padding: 10,
    
  },

  divider:{
    width: 10
  },

  box:{
    width: 10,
    height: 10,
    backgroundColor: 'blue',
  },

  scroll:{
   
  },

  todoItem:{
    flexDirection: "row",
    padding: 10
  },

})
