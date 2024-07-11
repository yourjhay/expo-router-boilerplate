import { Button } from "react-native";
import React from "react";
import View from "@/components/View";
import { Text } from "@/components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import CenteredView from "@/components/CenteredView";
import { Link, router } from "expo-router";
import { TextInput } from "@/components/TextInput";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SignIn = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CenteredView>
        <TextInput
          placeholder="Email"
          onIconPress={() => console.log("Pressed")}
          icon={<FontAwesome size={28} name="user-circle" color={"red"} />}
        />
        <Text>SignIn</Text>
        <Button title="Login" onPress={() => router.replace("/home")} />
        <Link href="/signup" style={{ color: "blue" }}>
          Sign up
        </Link>
      </CenteredView>
    </SafeAreaView>
  );
};

export default SignIn;
