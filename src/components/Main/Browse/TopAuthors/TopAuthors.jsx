import { Text } from '@ui-kitten/components';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AvatarLarge from '../../../Common/AvatarLarge';

const TopAuthors = () => {
  const authors = [
    {
      id: 1,
      name: 'Avatar',
      avatar: '',
    },
    {
      id: 2,
      name: 'Naruto',
      avatar: '',
    },
    {
      id: 3,
      name: 'Thanh',
      avatar: '',
    },
    {
      id: 4,
      name: 'Sasuke',
      avatar: '',
    },
    {
      id: 5,
      name: 'Avatar',
      avatar: '',
    },
    {
      id: 6,
      name: 'Avatar',
      avatar: '',
    },
    {
      id: 7,
      name: 'Avatar',
      avatar: '',
    },
  ];

  const renderItem = (items) => items.map((item) => <AvatarLarge key={item.id} name={item.name} />);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text category="h6">Top Authors</Text>
      </View>
      <ScrollView horizontal>{renderItem(authors)}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginVertical: 10,
  },
});
export default TopAuthors;