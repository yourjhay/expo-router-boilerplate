import { Button } from "react-native";
import React from "react";
import { Text } from "@/components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import CenteredView from "@/components/CenteredView";
import { router } from "expo-router";

const Home = () => {
  return (
    <CenteredView>
      <Text>Home</Text>
      <Button title="Go back to first screen in stack" onPress={() => router.back()} />
    </CenteredView>
  );
};

export default Home;
