import React from 'react'
import {View, Button, ActivityIndicator, StyleSheet, Image, StatusBar, Text, Alert,} from 'react-native'

import {CLARIFAI_KEY} from 'react-native-dotenv'
import Clarifai from 'clarifai'
import styles from './styles'


class ResultScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      result: '',
      allresults: [],
    }

    this._cancel = this._cancel.bind(this)
  }

  componentDidMount() {
    console.log("component mounted")

    const clarifai = new Clarifai.App({apiKey: CLARIFAI_KEY})
    process.nextTick = setImmediate;
    console.log("clarifai app initiated")
    const {navigation} = this.props;
    const data = navigation.getParam('base64', 'NO-URI');
    const file = {
      base64: data
    }
    clarifai.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", data).then(response => {
      console.log(response.outputs[0].data.colors[0])
      const colors = response.outputs[0].data.colors
      console.log(colors)
      if (colors && colors.length > 0) {
        // const significancevalue = colors.length
        console.log(colors)
        if (colors.length == 1) {
          return this.setState({loading: false, result: colors[0]})
        }
        colors.sort((a, b) => parseFloat(a.value) - parseFloat(b.value))
        console.log('colors', colors[0])
        return this.setState({loading: false, result: colors[0], allresults: colors})

      }
      this.setState({loading: false})
    }).catch(e => {
      console.log(e)
      Alert.alert('Error Sorry, Something is not happy!', JSON.stringify(e), [
        {
          text: 'OK',
          onPress: () => this._cancel()
        }
      ], {cancelable: false})
    })
  }

  _cancel() {
    this.props.navigation.goBack()
    // const backAction = NavigationActions.back()
    // this.props.navigation.dispatch(backAction)
  }

  render() {
    const {uri} = this.props.navigation.state
    // const sourceImage = `data:${type};base64,${data}`
    return (
      <View style={{
          flex: 1, backgroundColor: 'black',
        }}>
      <StatusBar hidden />

      {
        this.state.loading ?
          <View style={styles.loader}>
            <ActivityIndicator size={75} color='#95a5a6' />
            <Text style={styles.loaderText}>Analyzing</Text>
          </View> :
          <View style={styles.container}>
            {/* <AnswerNotification answer={this.state.result} /> */}
            <Image style={styles.picture} source={{
              uri
            }}/>
            <Text style={styles.contentText}>Your color is: </Text>
            <Text style={{backgroundColor: this.state.result.w3c.hex, color:'#fff', fontSize: 60,}}>{this.state.result.w3c.name}</Text>
            {/* <CaptureAndShare
              title='Partager'
              color='#3498db'
              image={sourceImage}
              onCancel={this._cancel}
            /> */}
            <Button
              title='Reccomended Products'
              color='black'
              textOnly
              onPress={this._cancel}
            />
            <Button
              title='Cancel'
              color='black'
              textOnly
              onPress={this._cancel}
            />
          </View>
      }
    </View>
  )}
}

export default ResultScreen
