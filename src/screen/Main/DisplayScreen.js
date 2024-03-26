import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLOR, FONTSIZES } from '../../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton } from 'react-native-paper';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default function DisplayScreen() {
  const [Todo, setTodo] = useState('');
  const [todoList, settodoList] = useState([]);
  const [editTodo, seteditTodo] = useState('');
  const [checkTodo, setcheckTodo] = useState([]);

  const handleAddTodo = () => {
    if (Todo == '') {
      return;
    }
    settodoList([...todoList, { id: Date.now().toString(), text: Todo }]);
    setTodo('');
  };
  const handleTodoDelete = (id) => {
    const updatedTodoList = todoList.filter((Todo) => Todo.id !== id);
    settodoList(updatedTodoList);
  };

  const handleTodoEdit = (item) => {
    seteditTodo(item);
    setTodo(item.text);
  };
  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editTodo.id) {
        return { ...item, text: Todo };
      }
      return item;
    });
    settodoList(updatedTodos);
    seteditTodo(null);
    setTodo('');
  };

  const handleLineThrough = (item) => {
    if (checkTodo.id == item.id) {
      setcheckTodo('');
    } else setcheckTodo(item);
  };

  // const handleLineThroughToggle = (item) => {
  //   setcheckTodo(item);
  //   setcheckTodo('');
  // };

  //Render items
  const renderTodos = ({ item, index }) => {
    return (
      <View style={styles.TodoContainer}>
        {checkTodo.id == item.id ? (
          <IconButton
            icon="checkbox-marked"
            iconColor="green"
            style={{
              width: 23,
            }}
            onPress={() => handleLineThrough(item)}
          />
        ) : (
          <IconButton
            icon="checkbox-blank-outline"
            iconColor="black"
            style={{
              width: 23,
            }}
            onPress={() => handleLineThrough(item)}
          />
        )}

        {checkTodo.id == item.id ? (
          <Text
            style={[
              styles.TodoText,
              {
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              },
            ]}
          >
            {item.text}
          </Text>
        ) : (
          <Text style={styles.TodoText}>{item.text}</Text>
        )}

        <IconButton icon="pencil" onPress={() => handleTodoEdit(item)} />
        <IconButton
          icon="trash-can"
          onPress={() => handleTodoDelete(item.id)}
        />
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>Today's Tasks</Text>
        </View>
        <View>
          <FlatList data={todoList} renderItem={renderTodos} />
        </View>
      </View>
      <View style={styles.addIcon}>
        <View style={{ height: 55, width: '80%' }}>
          <TextInput
            placeholder="Do something good today"
            style={styles.inputStyle}
            value={Todo}
            onChangeText={(text) => setTodo(text)}
          />
        </View>
        <View>
          {editTodo ? (
            <TouchableOpacity onPress={() => handleUpdateTodo()}>
              <Image
                source={require('../../../assets/icon-plus.png')}
                style={{ width: 50, height: 50, tintColor: COLOR.primary }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleAddTodo()}>
              <Image
                source={require('../../../assets/icon-plus.png')}
                style={{ width: 50, height: 50, tintColor: COLOR.primary }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    paddingHorizontal: 15,
    paddingTop: 25,
  },
  headerText: {
    fontSize: FONTSIZES.h3,
    fontWeight: 'bold',
    paddingVertical: 15,
  },
  TodoContainer: {
    // backgroundColor: COLOR.primary,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TodoText: {
    flex: 1,
    fontSize: FONTSIZES.h5,
    fontWeight: 'bold',
  },
  addIcon: {
    backgroundColor: COLOR.white,
    position: 'absolute',
    flexDirection: 'row',
    bottom: 10,
    right: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    padding: 10,
    borderColor: COLOR.black,
    borderWidth: 1,
    flex: 1,
  },
});
