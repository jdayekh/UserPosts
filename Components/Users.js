import { Dimensions, Button,ScrollView, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, MapContainer } from 'react-native-maps';

const Users = (props, {navigation}) => {
  
const [userId, setUserId] = React.useState(props.value);

const [users, setUsers] = React.useState([]);
const [post, setPost] = React.useState(null);
const [loading , setLoading] = useState(true);

const LATITUDE_DELTA = 0.004;
const LONGITUDE_DELTA = 0.005;
  
useEffect(() => {
  var responseText="";
  const jsonUrl = "https://rawnet-react-native-test.glitch.me/users.json"
  var json = "";
  // var filteredItem = "";
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((responseJson) => {
          var filteredItem = responseJson.filter(item => item.id == userId);
          console.log(filteredItem);
          setUsers(filteredItem);
      })
      .catch((error) => {
      console.error(error);
      });
      setLoading(false);
}, []);

  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <ScrollView>
      <View>
        <View style={styles.container}>
            <View style={styles.sectionContent}>
                <Text style={styles.labelHeading}>Name: </Text>
                <Text style={styles.copyText}>{item.name}</Text>
            </View>
            <View style={styles.sectionContent}>
                <Text style={styles.labelHeading}>Username: </Text>
                <Text style={styles.copyText}>{item.username}</Text>
            </View>
            <View style={styles.sectionContent}>
                <Text style={styles.labelHeading}>Email: </Text>
                <Text style={styles.copyText}>{item.email}</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.sectionContent}>
                <Text style={styles.labelHeading}>Phone: </Text>
                <Text style={styles.copyText}>{item.phone}</Text>
            </View>
            <View style={styles.sectionContent}>
                <Text style={styles.labelHeading}>Website: </Text>
                <Text style={styles.copyText}>{item.website}</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.sectionContent}>
                <Text style={styles.labelHeading}>Company: </Text>
                <Text style={styles.copyText}>{item.company.name}</Text>
            </View>
            <View style={styles.sectionContent}>
                <Text style={styles.labelHeading}>Catch Phrase: </Text>
                <Text style={styles.copyText}>{item.company.catchPhrase}</Text>
            </View>
        </View>
      </View>
      <View style={styles.containerMap}>
            <View style={styles.sectionContent}>
                <MapView
                // var width = Dimensions.get('window').width; //full width
                // var height = Dimensions.get('window').height; //full height
                provider={PROVIDER_GOOGLE} 
                style={styles.map}
                region={{
                  latitude: parseFloat(item.address.geo.lat),
                  longitude: parseFloat(item.address.geo.lng),
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                    // latitude: 31.776685,
                    // longitude: 35.234491,
                }}
              >
                <Marker 
                  coordinate={{
                    latitude: parseFloat(item.address.geo.lat),
                    longitude: parseFloat(item.address.geo.lng),
                  }}
                  image={require('../Assets/map_marker.png')}
                  title={item.company.name}
                  description={item.company.bs}
                >
                  <Callout tooltip>
                    <View>
                      <View style={styles.bubble}>
                        <View style={styles.container}>
                            <View style={styles.sectionContent}>
                                <Text style={styles.labelHeading}>Address: </Text>
                            </View>
                            <Text style={styles.sectionContent}>{item.address.street} - {item.address.suite}</Text>
                            <View style={styles.sectionContent}>
                                <Text style={styles.labelHeading}>City: </Text>
                                <Text style={styles.copyText}>{item.address.city}</Text>
                            </View>
                            <View style={styles.sectionContent}>
                                <Text style={styles.labelHeading}>Zip Code: </Text>
                                <Text style={styles.copyText}>{item.address.zipcode}</Text>
                            </View>
                        </View>
                      </View>
                      <View style={styles.arrowBorder} />
                      <View style={styles.arrow} />
                    </View>
                  </Callout>
                </Marker>
              </MapView>
            </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <View  style={styles.sectionContainer} >
      <FlatList 
          style={styles.flatList}
          renderItem={renderItem}
          data={users}
        />
    </View>
  )
}

export default Users;

const map_width = '110%';
const map_height = '100%';
const width_proportion_left = '95%';
const styles = StyleSheet.create({
map: {
    flex: 1,
    width: map_width,
    height: Dimensions.get('window').width / 1.2, // approximate a square
  },
  container: {
    flex: 1,
    marginHorizontal:5,
  },
  containerMap: {
    width: map_width,
    marginHorizontal:5,
    height: Dimensions.get('window').width / 2, // approximate a square
  },
   // Callout bubble
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    width: 200,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  sectionContainer:{
    flexDirection: "column",
    textAlign: 'left',
    color:global.primary_color,
    backgroundColor:global.background_color,
    padding:5,
    marginTop:5,
    marginRight:5,
    marginLeft:5,
    borderRadius: 7,
    borderWidth: 1,
  },

  body:{
    flexDirection: "column",
    textAlign: 'left',
    color:global.primary_color,
    backgroundColor:global.background_color,
    padding:5,
    marginTop:5,
    marginRight:5,
    marginLeft:5,
    borderRadius: 7,
  },
  user:{
    flexDirection: "column",
    textAlign: 'left',
    color:global.primary_color,
    backgroundColor:global.background_color,
    padding:5,
    marginTop:5,
    marginRight:5,
    marginLeft:5,
    borderRadius: 7,
  },
  comment:{
    flexDirection: "column",
    textAlign: 'left',
    color:global.primary_color,
    backgroundColor:global.background_color,
    padding:5,
    marginTop:5,
    marginRight:5,
    marginLeft:5,
    borderRadius: 7,
  },

    labelHeading:{
    color:global.primary_color,
    fontWeight:'bold',
    fontSize: 17,
    
  },
  sectionContent:{
    flexDirection: "row",
     width: width_proportion_left,
  },
  copyText:{
    fontSize: 17,
    color:global.dark_gray,
    textAlign:'left',
  },
});