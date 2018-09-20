import React from 'react';
import { StyleSheet, Header, ImageBackground, Button, Image, View, Text } from 'react-native';


// class LogoTitle extends React.Component {
//   render() {
//     return (
//       <Image
//         source={require('../spiro.png')}
//         style={{ width: 30, height: 30 }}
//       />
//     );
//   }
// }

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    // headerTitle instead of title
    // headerTitle: <LogoTitle />,
    // header: <Header title='Facer' subtitle='"ID yo Face"' />,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/ocean.jpg')}>
        <Text style={styles.welcome}>Facer</Text>

        <View style={styles.container}>

          <Button style={styles.button}
            title="Go to Details"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}
          />
          <Text></Text>
          <Button
            color= "#841584"
            title="Go to Camera"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Camera', {
                otherParam: 'anything you want here',
              });
            }}
          />
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  welcome: {
    marginTop: 75,
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    margin: 10,
    padding: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    width: 20,
    color: 'orange',
  },
});

export default HomeScreen
