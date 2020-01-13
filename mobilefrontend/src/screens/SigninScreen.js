import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Spacer>
        <Text style={styles.title}>Sign In DangerZone</Text>
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
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          placeholder="Insert your password"
          leftIcon={
            <Icon
              name="lock"
              size={20}
              color="black"
              style={{ paddingRight: 15 }}
            />
          }
          errorStyle={{ color: "red" }}
          errorMessage={state.errorMessage.password}
        />
      </Spacer>
      <Spacer>
        <Button
          title="Sign In"
          onPress={() => signin({ username, email, password })}
        />
      </Spacer>
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.link}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: null
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

export default SigninScreen;
