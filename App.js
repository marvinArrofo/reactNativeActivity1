import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native';


const FocusApp = () => {
  const initialTime = 60 * 60;
  const [timerCount, setTimerCount] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimerCount(initialTime);
  };
useEffect(() => {
    let timerInterval;
    if (isRunning) {
      timerInterval = setInterval(() => {
        if (timerCount === 0) {
          clearInterval(timerInterval);
          setIsRunning(false);
        } else {
          setTimerCount(prevTime => prevTime - 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isRunning, timerCount]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.nametext}>Marvin Bebetime</Text>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{formatTime(timerCount)}</Text>
      </View>
      <View style={styles.controls}>
        {isRunning ? (
          <TouchableOpacity
          style={[styles.button, styles.pauseButton]}
          onPress={pauseTimer}
        >
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.button, styles.startButton]}
          onPress={startTimer}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      )}
      <View style={{ width: 60, padding: 50 }} />
      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        onPress={resetTimer}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>

        
     
  );
};

const formatTime = (time) => {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'chartreuse',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    shadowRadius: 80,
    shadowColor: 'yellow',
    width: 250,
    height: 250,
    backgroundColor: 'green',
    borderWidth: 5,
    borderColor: 'orange',
    borderRadius: 250,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 60,
    color: 'white',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 60,
  },
  nametext: {
    color: 'white',
    marginBottom: 100,
    fontSize: 30,
  },
  button: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  startButton: {
    backgroundColor: 'hsl(192, 15%, 99%)',
    fontSize: 220,
  },
  pauseButton: {
    backgroundColor: 'hsl(192, 15%, 99%)',
  },
  resetButton: {
    backgroundColor: 'hsl(192, 15%, 99%)',
  },

  
 
});

export default FocusApp;