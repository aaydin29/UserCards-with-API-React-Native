import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: '#c1d5e0',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    margin: 10,
  },
  image_container: {},
  body_container: {
    flex: 1,
    margin: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 1,
  },
  email: {
    fontStyle: 'italic',
    margin: 1,
    fontSize: 15,
  },
  location: {
    margin: 1,
    fontSize: 15,
  },
});
