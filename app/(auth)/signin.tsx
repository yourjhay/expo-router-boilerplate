import { Button } from "react-native";
import React from "react";
import { Text } from "@/components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import CenteredView from "@/components/CenteredView";
import { Link, router } from "expo-router";
import TextInput from "@/components/TextInput";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CenteredView>
        <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 20 }}>
          Toggle your device dark or light mode to see the effect
        </Text>
        <TextInput containerStyle={{ marginVertical: 5 }} placeholder="Text Input" />
        <TextInput
          containerStyle={{ marginBottom: 5 }}
          darkColor="#413f66"
          placeholder="with different background  color  on dark mode"
        />
        <TextInput
          containerStyle={{ marginBottom: 5 }}
          lightColor="#99989c"
          placeholderTextColor={"#c4c3c7"}
          placeholder="with different background  color  on light mode"
        />
        <TextInput
          containerStyle={{ marginBottom: 5 }}
          placeholder="text input with left icon"
          onIconPress={() => console.log("Pressed")}
          leftElement={<FontAwesome size={20} name="envelope" color={"gray"} />}
        />
        <TextInput
          containerStyle={{ marginBottom: 5 }}
          placeholder="Password input with right icon"
          secureTextEntry={showPassword}
          onIconPress={() => setShowPassword(!showPassword)}
          rightElement={<FontAwesome size={20} name={showPassword ? "eye" : "eye-slash"} color={"gray"} />}
        />

        <Button title="Plain button: Login (press me)" onPress={() => router.replace("/home")} />
        <Link href="/signup" style={{ color: "blue" }}>
          Link: Sign up (press me)
        </Link>
      </CenteredView>
    </SafeAreaView>
  );
};

export default SignIn;
