import { StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import View from "@/components/View";
import { Text } from "@/components/Text";

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Link href="signin" style={{ color: "blue" }}>
        Signin
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
