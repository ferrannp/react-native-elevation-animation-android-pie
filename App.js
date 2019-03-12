import * as React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Button } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    opacity: new Animated.Value(1),
    visible: true,
  };

  toggleVisibility = () => {
    if (this.state.visible) {
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start(() => this.setState({ visible: false }));
    } else {
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start(() => this.setState({ visible: true }));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{ opacity: this.state.opacity }}>
          <View style={styles.box} />
        </Animated.View>
        <View style={styles.buttonContainer}>
          <Button onPress={this.toggleVisibility}>Press me</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  box: {
    backgroundColor: 'tomato',
    width: 150,
    height: 150,
    elevation: 6,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
  },
});
