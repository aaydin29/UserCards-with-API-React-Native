import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './UserCard.style';

const UserCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{uri: props.picture.medium}} />
      </View>
      <View style={styles.body_container}>
        <Text style={styles.name}>
          {props.name.first} {props.name.last}
        </Text>
        <Text style={styles.email}>{props.email}</Text>
        <Text style={styles.location}>
          {props.location.country} / {props.location.city}
        </Text>
      </View>
    </View>
  );
};

export default UserCard;
