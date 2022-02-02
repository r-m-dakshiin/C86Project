import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";


export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post : ""
    };
  }
  render() {
      return (
       <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("PostScreen", {
              post: this.props.post
            })
          }
        >
          <View style={styles.cardContainer}>
            <View style = {styles.authorContainer}>
                <View style = {styles.authorImageContainer}>
                    <Image source = {require("../assets/profile_img.png")}
                            style = {styles.profileImage}>
                    </Image>
                </View>
                <View style={styles.authorNameContainer}>
                    <Text style = {styles.authorNameText}>{this.props.post.author}</Text>
                </View>
            </View>
            <Image source = {require("../assets/post.jpeg")} style = {styles.postImage}></Image>
            <View style = {styles.captionContainer}>
                <Text style = {styles.captionText}>
                    {this.props.post.caption}
                </Text>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  postImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontWeight:"bold",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
  profileImage:{
    width:40,
    height:40,
    borderRadius:20,
    marginLeft:10,
    marginTop:10
  },
  captionContainer:{
    alignSelf:"center"
  },
  captionText:{
    fontSize:20,
    color:"white"
  },
  authorNameContainer:{
    alignSelf:"center",
    marginBottom:10
  },
  authorNameText:{
    fontSize:25,
    fontWeight:"bold",
    color:"white"
  }
});