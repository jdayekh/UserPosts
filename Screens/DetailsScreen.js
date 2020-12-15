import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Comments from "../Components/Comments";
import React from "react";
import Users from "../Components/Users";
import { createStackNavigator } from "@react-navigation/stack";

const DetailsScreen = (props, { navigation }) => {
  const [postID, setPostID] = React.useState(props.route.params.id);
  const [title, setTitle] = React.useState(props.route.params.title);
  const [body, setBody] = React.useState(props.route.params.body);
  const [userId, setUserId] = React.useState(props.route.params.userId);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.body}>
              <Text style={styles.copyText}>{body}</Text>
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.bodyText}>User Details</Text>
            <Users value={userId} />
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.bodyText}>Comments</Text>
            <Comments value={postID} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  scrollview: {
    marginBottom: 5,
  },
  container: {
    backgroundColor: global.secondary_color,
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    color: global.dark_gray,
    fontWeight: "bold",
    padding: 10,
    textAlign: "left",
    alignSelf: "center",
  },

  sectionContainer: {
    flexDirection: "column",
    textAlign: "left",
    color: global.primary_color,
    backgroundColor: global.background_color,
    padding: 5,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 7,
    height: "auto",
    justifyContent: "flex-start",
    height: "auto",
    alignContent: "stretch",
  },
  bodyText: {
    fontSize: 20,
    color: global.dark_gray,
    fontWeight: "bold",
  },
  copyText: {
    fontSize: 17,
    color: global.dark_gray,
    textAlign: "left",
  },
});
