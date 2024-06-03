import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [feedback, setFeedback] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const userGuess = parseInt(guess);
    if (isNaN(userGuess)) {
      Alert.alert('Invalid input', 'Please enter a number between 1 and 100');
      return;
    }
    if (userGuess < randomNumber) {
      setFeedback('Too low!');
    } else if (userGuess > randomNumber) {
      setFeedback('Too high!');
    } else {
      setFeedback('Correct! Generating a new number...');
      setRandomNumber(generateRandomNumber());
    }
    setGuess('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number!</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter your guess"
        value={guess}
        onChangeText={setGuess}
      />
      <Button title="Submit Guess" onPress={handleGuess} />
      {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  feedback: {
    marginTop: 20,
    fontSize: 18,
  },
});
