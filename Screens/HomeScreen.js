import '../global.js';

import DetailsScreen from './DetailsScreen';
import PostsScreen from './PostsScreen';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: global.primary_color,
          shadowColor: global.dark_gray, // iOS
          elevation: 4, // Android
        },
        headerTintColor: global.background_color,
        headerTitleStyle: {
        //   fontWeight: 'bold',    
          color:global.background_color,
          
        },
      }}
      >

    <HomeStack.Screen 
        name="Posts"
        component={PostsScreen}
        options={({route}) => ({
          title: "Assessment",
        //   id: route.params.id,
          headerBackTitleVisible: false,
          headerShown: true
        })}
      />

    <HomeStack.Screen 
        name="DetailsScreen"
        component={DetailsScreen}
        options={({route}) => ({
          title: "Post",
          id: route.params.id,
          userId: route.params.userId,
          headerBackTitleVisible: false,
          headerShown: true
        })}
      />
      
      
    </HomeStack.Navigator>
  );
}

export default HomeScreen;