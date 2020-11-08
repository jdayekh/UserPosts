import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

// import data from './FetchJsonProduct.json';

// export const ProdItem = (props) => {
const PostItem = (props, {navigation}) => {
  // console.log("=================ccccc22222=================="+navigation);
  // navigation={this.props.navigation} 
  //api insert variables


// const [postID, setPostID] = React.useState(props.route.params.id);
// const [title, setTitle] = React.useState(props.route.params.title);
// const [body, setBody] = React.useState(props.route.params.body);
const [user, setUser] = React.useState([]);
const [post, setPost] = React.useState(null);
const [comment, setComment] = React.useState(null);
const [loading , setLoading] = useState(true);
  
useEffect(() => {
  var responseText="";
  const jsonUrl = "https://rawnet-react-native-test.glitch.me/users.json"
  var json = "";
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
          setUser(responseJson);
      })
      .catch((error) => {
      console.error(error);
      });
      //   .then(response => response.json())
      //   .then(json => setPosts(json))
        console.log("==========sss===============: "+JSON.stringify(responseText));
      //   console.log("==========loading2a===============: "+JSON.stringify(json));
        setLoading(false);
}, []);

useEffect(() => {
  var responseText="";
  const jsonUrl = "https://rawnet-react-native-test.glitch.me/comments.json"
  var json = "";
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
          setComment(responseJson);
      })
      .catch((error) => {
      console.error(error);
      });
      //   .then(response => response.json())
      //   .then(json => setPosts(json))
        console.log("==========sss===============: "+JSON.stringify(responseText));
      //   console.log("==========loading2a===============: "+JSON.stringify(json));
        setLoading(false);
}, []);



  return (
    // <View>
    //   <Text>{props.product_title}</Text>
    //   <Text>{props.product_retail_price}</Text>
    //   {/* <Text onClick={addToCart}>Add to cart</Text> */}
    //   <Button
    //     title="Add to cart"
    //     onPress={addToCart}
    //   />

    //     <TouchableOpacity 
    //         onClick={addToCart}
    //         >
    //         <View>
    //         <Text>Add to cart</Text>
    //         </View>
    //     </TouchableOpacity>
   
    // </View>
    

    <View  style={styles.sectionContainer} >
      {/* <View style={styles.body}>
          <Text style={styles.addToCartQty}>Post Body</Text>
      </View> */}
      <View style={styles.user}>
          <Text style={styles.addToCartQty}>Post User</Text>
      </View>
      <View style={styles.comment}>
          <Text style={styles.addToCartQty}>Post Comments</Text>
      </View>
    </View>
  )
}

export default PostItem;




const styles = StyleSheet.create({

  container: {
    flex: 1,
    // marginLeft:5,
    marginHorizontal:5,
    // marginVertical: 20,
  },
  sectionContainer:{
    // flex: 1,
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

  body:{
    // flex: 1,
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
    // flex: 1,
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
    // flex: 1,
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

  
});