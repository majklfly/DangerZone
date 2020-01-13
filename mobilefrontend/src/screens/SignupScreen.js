import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <View>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Spacer>
        <Text style={styles.title}>SignUp for DangerZone</Text>
      </Spacer>
      <Spacer>
        <Input
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Username"
          leftIcon={
            <Icon
              name="user"
              size={20}
              color="black"
              style={{ paddingRight: 15 }}
            />
          }
          errorStyle={{ color: "red" }}
          errorMessage={state.errorMessage.username}
        />
      </Spacer>
      <Spacer>
        <Input
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Insert your email"
          leftIcon={
            <Icon
              name="at"
              size={20}
              color="black"
              style={{ paddingRight: 15 }}
            />
          }
          errorStyle={{ color: "red" }}
          errorMessage={
            state.errorMessage.email ? state.errorMessage.email : null
          }
        />
      </Spacer>
      <Spacer>
        <Input
          value={password1}
          onChangeText={setPassword1}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          placeholder="Insert your password"
          leftIcon={
            <Icon
              name="unlock"
              size={20}
              color="black"
              style={{ paddingRight: 15 }}
            />
          }
          errorStyle={{ color: "red" }}
          errorMessage={state.errorMessage.password1}
        />
      </Spacer>
      <Spacer>
        <Input
          value={password2}
          onChangeText={setPassword2}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          placeholder="Confirm your password"
          leftIcon={
            <Icon
              name="lock"
              size={20}
              color="black"
              style={{ paddingRight: 15 }}
            />
          }
          errorStyle={{ color: "red" }}
          errorMessage={state.errorMessage.password2}
        />
      </Spacer>
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() => signup({ username, email, password1, password2 })}
        />
      </Spacer>
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text style={styles.link}>
            Already have an account? Sign In instead
          </Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    alignSelf: "center",
    paddingTop: "10%"
  },
  link: {
    color: "blue",
    alignSelf: "center"
  }
});

export default SignupScreen;
