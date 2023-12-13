import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Text style={styles.title}>Forgot Password</Text>

        <View style={styles.formContainer}>
          <Text style={{paddingLeft : 8 }}>Email</Text>
          <TextInput style={styles.input} placeholder="Enter your email" />

          <Text style={styles.additionalText}>
            To reset your password, type in the email address you have
            associated with this site.
           
            A temporary password will be emailed to
            you.
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end", // Align content to the bottom
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
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
  additionalText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    alignSelf: "stretch",
  },
  resetButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
