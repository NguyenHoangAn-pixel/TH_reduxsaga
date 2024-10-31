import React from 'react';
import { View, Pressable, Text, StyleSheet, TextInput, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchUserRequest } from '../redux/userSlice';

const Screen1 = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleGetStarted = () => {
    dispatch(fetchUserRequest(1)); // Fetch user with ID 1
    navigation.navigate('Screen2', { id: 1 });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Image 95.png')} style={styles.image} /> {/* Image of the note and pencil */}
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <TextInput
        placeholder="Enter your name"
        placeholderTextColor="#888"
        style={styles.input}
      />
      <Pressable onPress={handleGetStarted} style={styles.button}>
        <Text style={styles.buttonText}>GET STARTED ➔</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8', // Light background
  },
  image: {
    width: 100, // Adjust the width as needed
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8A2BE2', // Purple color for the title
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#00CED1', // Matching turquoise color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Screen1;
