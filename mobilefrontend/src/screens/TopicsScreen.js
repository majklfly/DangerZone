import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TopicsScreen = () => {
  return (
    <View>
      <Text style={styles.title}>TopicsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48
  }
});

export default TopicsScreen;
