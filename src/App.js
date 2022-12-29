import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';

function App() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    setUsers(response.data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderUser = ({item}) => (
    <UserCard
      name={item.name}
      email={item.email}
      location={item.location}
      picture={item.picture}
    />
  );

  return (
    <View stlye={styles.main_container}>
      <Text style={styles.header}>Random Users Generate</Text>
      <View style={styles.list}>
        <FlatList data={users} renderItem={renderUser} />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#34515e',
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
  main_container: {
    backgroundColor: 'red',
  },
  list: {
    margin: 5,
  },
});
