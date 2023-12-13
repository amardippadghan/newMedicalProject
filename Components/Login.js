import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText2}>Welcome to CRN </Text>
      <Text style={styles.headerText}>Login in to your account </Text>

      <View style={styles.formContainer}>
        <Text style={{ paddingLeft: 8 }}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />

        <Text style={{ paddingLeft: 8 }}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={{ marginBottom: 10, marginTop: 5, alignItems: "center" }}
      >
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerLink}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  headerText2: {
    fontSize: 24,
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    textAlign: "center",
    borderRadius: 5,
    marginBottom: 20, // Add margin to the bottom
    alignSelf: "stretch", // Make the button stretch horizontally
    marginHorizontal: 20, // Add horizontal margin to the button
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  footerLink: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 0,
    marginBottom: 10,
    borderRadius : 15 ,
    marginTop : 400 , 
    alignSelf: "stretch",
  },
  linkText: {
    color: "blue",
    fontSize: 16,
    textAlign: "center",
  },
});
