import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function GetStarted() {
  return (
    <ImageBackground
      source={{
        uri: "https://media.istockphoto.com/id/485275948/photo/happy-friends-at-the-rooftop-doing-high-five.jpg?s=2048x2048&w=is&k=20&c=RCZBJ3_mMB9OVoTRPbcXrcuio2P8shQC5mtqzUlXW7U=",
      }} // Replace with your background image URL
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Your center-aligned text */}
        <Text style={styles.centeredText}>COMMUNITY RESOURCE NETWORK</Text>
        <Text style={styles.centeredText}>Bridging the gap to fulfill unment needs </Text>
      </View>

      {/* Getting Started button at the bottom */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Getting Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between", // Align items at the top and bottom
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredText: {
    fontSize: 24,
    color: "blue",
    marginBottom: 20,
    textAlign: "center",
    padding: 4,
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    textAlign : "center",
    borderRadius: 5,
    marginBottom: 20, // Add margin to the bottom
    alignSelf: "stretch", // Make the button stretch horizontally
    marginHorizontal: 20, // Add horizontal margin to the button
    borderRadius :12 , 
  },

  buttonText: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
});
