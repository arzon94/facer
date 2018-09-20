import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  View,
  Text
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const pictureSize = 150;
// const PHOTOS_DIR = FileSystem.documentDirectory + 'photos';

class PhotoScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    selected: false,
    image: null
  };
  _mounted = false;
  componentDidMount() {
    this._mounted = true;
  }
  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    const {uri} = this.props
    const base64 = this.props.base64
    return (<View style={{
        flex: 1, backgroundColor: 'white',
      }}>
      <View style={styles.pictureWrapper}>

        {/* <Text>{this.props.uri}</Text> */}
        <Image style={styles.picture} source={{
            uri
          }}/>

      </View>
      <View style={{flex: .15,}}>
        <Text style={styles.contentText}>Use this Image?</Text>
      </View>
      <View style={{
          flex: .3,
          flexDirection: 'row'
        }}>
        <TouchableOpacity style={[
            styles.toggleButton, {
              backgroundColor: 'red'
            }
          ]} onPress={this.props.onPress
}>
          {/* <Text style={{textAlign: 'center', color: 'white'}}>NO</Text> */}
          <Ionicons name="md-close" size={40} color="white"/>

        </TouchableOpacity>
        <TouchableOpacity style={[
            styles.toggleButton, {
              backgroundColor: '#228B22'
            }
          ]} onPress={() => {

            this.props.navigation.navigate('Results', {
              uri: uri, base64: base64,
            });
          }}>
          {/* <Text style={{textAlign: 'center', color: 'white'}}>YES</Text> */}
          <Ionicons name="md-checkmark" size={40} color="white"/>
        </TouchableOpacity>
      </View>
    </View>)
  }

}
const styles = StyleSheet.create({
  picture: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    flex: 1,
    resizeMode: 'contain'
  },
  contentText: {
    textAlign: 'center',
    // backgroundColor: 'rgb(14, 131, 205)',
    // color: 'white',
    marginHorizontal: 10,
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,

  },
  toggleButton: {
    flex: 0.5,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    padding: 5,
    // alignItems: 'stretch',
    // justifyContent: 'space-around',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pictureWrapper: {
    // width: pictureSize,
    // height: pictureSize,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
});
export default PhotoScreen
