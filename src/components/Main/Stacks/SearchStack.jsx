import { createStackNavigator } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import CourseDetail from '../../CourseDetail/CourseDetail';
import Search from '../Search/Search';
import HeaderTop from './HeaderTop';
import HeaderTopTab from './HeaderTopTab';
// Search screen
const SearchScreen = {
  Detail: CourseDetail,
};
const Stack = createStackNavigator();
const SearchStack = () => (
  <Stack.Navigator initialRouteName="Search" mode="modal">
    {Object.entries({
      ...SearchScreen,
    }).map(([name, component]) => (
      <Stack.Screen key={name} name={name} component={component} options={HeaderTopTab} />
    ))}
    <Stack.Screen name="Search" component={Search} options={HeaderTop} />
  </Stack.Navigator>
);
export default SearchStack;
