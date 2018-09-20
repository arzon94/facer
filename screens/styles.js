import {StyleSheet} from 'react-native'


const blackTransparent = 'rgba(0,0,0,0.75)'
const white = 'rgba(255,255,255,1.0)'

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
    backgroundColor: 'rgb(14, 131, 205)',
    color: 'white',
    marginHorizontal: 10,
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20
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
  },
  container: {
   flex: 1,
   alignSelf: 'stretch',
   justifyContent: 'flex-end',
   alignItems: 'center',
   alignContent: 'center',
 },
 loader: {
   position: 'absolute',
   top: 20,
   bottom: 0,
   left: 0,
   right: 0,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: blackTransparent,
 },
 loaderText: {
   color: white,
   fontSize: 16,
 },
})
export default styles
