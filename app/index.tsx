import { StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import View from "@/components/View";
import { Text } from "@/components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import CenteredView from "@/components/CenteredView";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CenteredView>
        <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 20 }}>Welcome</Text>
        <Text>This screen can be serve as onboarding screen.</Text>
        <Text style={{ textAlign: "center" }}>
          On iOS devices, you can slide from left to right to back on previous screen
        </Text>
        <Link href="/signin" style={{ color: "blue" }}>
          Signin
        </Link>
      </CenteredView>
    </SafeAreaView>
  );
};

export default index;
