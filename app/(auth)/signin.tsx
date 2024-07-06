import {} from "react-native";
import React from "react";
import View from "@/components/View";
import { Text } from "@/components/Text";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>SignIn</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
