import {ActivityIndicator, FlatList, Image, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View,} from 'react-native';
import { TextInput, ListItem, SearchBar } from 'react-native-elements';
import React , { useContext, useEffect, useReducer, useState } from 'react';

import  DetailsScreen  from './DetailsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PostsScreen = (props, {navigation}) => {
    const [posts , setPosts] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        var responseText="";
        setLoading(true);
        const jsonUrl = "https://rawnet-react-native-test.glitch.me/posts.json";
        var json = "";
        fetch(jsonUrl)
        .then((response) => response.json())
        .then(responseJson => {  
                setPosts(responseJson);  
                setLoading(false);  
        });
    }, []);

    const  handlePress = (item) => {
        const {navigate} = props.navigation ;
        props.navigation.navigate('DetailsScreen', {
          id: item.id,
          title: item.title,
          body:item.body,
          userId:item.userId,
        });
    };

    const renderHeader = () => {    
    return (    
        <View>
            <Text style={styles.itemTitle}>No data</Text>
        </View>
    );

  }

if(loading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }else
  return (
      
    <View style={styles.container}>
        <StatusBar backgroundColor={global.primary_color} barStyle="light-content"/>
        <View>
            <Text style={styles.title}>Posts</Text>
        </View>
        <FlatList style={styles.flatList}
            data={posts}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableWithoutFeedback onPress={ () => handlePress(item)}>
                  <View style={styles.cellRow} >
                    <View style={styles.cellRowLeft} >
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.textBody}>{item.body}</Text>
                    </View>
                    <View style={styles.cellRowRight} >
                        <MaterialIcons 
                            name='navigate-next'
                            color={global.dark_gray}
                            size={30}
                            paddingTop={13}
                        />
                    </View>
                  </View>
             </TouchableWithoutFeedback>
            )
           }
      />
      </View>
  )
}

export default PostsScreen;

const width_proportion_left = '90%';
const width_proportion_right = '10%';
const styles = StyleSheet.create({
  container: {
    backgroundColor: global.secondary_color,
  },
  viewHeader:{
    flexDirection: "row",
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: global.secondary_color,
    marginTop: 0,
  },
  title: {
    fontSize: 20,
    color:global.dark_gray,
    fontWeight:'bold',
    padding:20,
    textAlign: 'center',
    alignSelf: 'center',
  },
  flatList:{
    backgroundColor: global.secondary_color,
  },
  cellRow: {
    flexDirection: 'row',
    flex:1,
    justifyContent: 'space-between',
    color:global.primary_color,
    backgroundColor:global.background_color,
    padding:5,
    marginTop:5,
    marginRight:5,
    marginLeft:5,
    borderRadius: 7,
  },
  cellRowLeft:{
    width: width_proportion_left,
  },
  cellRowRight:{
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    width: width_proportion_right,
    justifyContent: 'space-between',
    padding:5,
  },
  itemTitle: {
    fontSize: 16,
    color:global.dark_gray,
    fontWeight:'bold',
  },
  textBody: {
    fontSize: 14,
    color:global.primary_color,
  },
});