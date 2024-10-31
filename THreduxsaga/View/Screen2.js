import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

const Screen2 = ({ navigation }) => {
  const { user, todos, loading } = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {/* Header with greeting */}
          <View style={styles.header}>
            <Image source={{ uri: user?.avatarUrl }} style={styles.avatar} /> {/* Add user avatar */}
            <View style={styles.greeting}>
              <Text style={styles.userName}>Hi {user?.name}</Text>
              <Text style={styles.userMessage}>Have a great day ahead</Text>
            </View>
          </View>

          {/* Search bar */}
          <View style={styles.searchContainer}>
            <FontAwesome name="search" size={18} color="#888" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#888"
              style={styles.searchInput}
            />
          </View>

          {/* Todo list */}
          <FlatList
            data={todos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.todoItem}>
                <FontAwesome name="check-square" size={20} color="green" style={styles.checkIcon} />
                <Text style={styles.todoText}>{item.job}</Text>
                <Text>{item.name}</Text>
                <FontAwesome name="pencil" size={20} color="red" style={styles.editIcon} />
              </View>
            )}
            contentContainerStyle={styles.todoList}
          />

          {/* Add button */}
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Screen3')}>
            <FontAwesome name="plus" size={24} color="#FFF" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userMessage: {
    fontSize: 14,
    color: '#888',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  todoList: {
    paddingBottom: 80, // Space for add button
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  checkIcon: {
    marginRight: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  editIcon: {
    marginLeft: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#00CED1',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen2;
