import { Button } from "react-native";
import React from "react";
import { Text } from "@/components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import CenteredView from "@/components/CenteredView";
import { router } from "expo-router";

const SignUp = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CenteredView>
        <Text>SignUp</Text>
        <Button title="Go back" onPress={() => router.back()} />
      </CenteredView>
    </SafeAreaView>
  );
};

export default SignUp;
