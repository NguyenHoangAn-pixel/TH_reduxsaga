import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoRequest } from '../redux/userSlice';
import { FontAwesome } from '@expo/vector-icons';

const Screen3 = ({ navigation }) => {
  const [job, setJob] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleAddTodo = () => {
    if (job.trim()) {
      dispatch(addTodoRequest({ userId: user.id, todo: { id: user.todo.length + 1, job } }));
      navigation.goBack();
    } else {
      alert('Please enter a job');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with avatar and greeting */}
      <View style={styles.header}>
        <Image source={{ uri: user?.avatarUrl }} style={styles.avatar} />
        <View style={styles.greeting}>
          <Text style={styles.userName}>Hi {user?.name}</Text>
          <Text style={styles.userMessage}>Have a great day ahead</Text>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>ADD YOUR JOB</Text>

      {/* Job input field */}
      <View style={styles.inputContainer}>
        <FontAwesome name="file-text" size={18} color="#8A2BE2" style={styles.inputIcon} />
        <TextInput
          value={job}
          onChangeText={setJob}
          placeholder="Input your job"
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>

      {/* Finish button */}
      <Pressable onPress={handleAddTodo} style={styles.button}>
        <Text style={styles.buttonText}>FINISH ➔</Text>
      </Pressable>

      {/* Bottom image (note and pencil) */}
      <Image source={require('../assets/Image 95.png')} style={styles.bottomImage} /> {/* Add this image in your assets */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8A2BE2', // Purple color
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    width: '100%',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00CED1', // Turquoise color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  bottomImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 20,
  },
});

export default Screen3;
