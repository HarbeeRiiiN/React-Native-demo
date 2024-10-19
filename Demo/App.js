import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const stepInto = () => {
    console.log("Stepped into");
  };

  const stepOver = () => {
    console.log("Stepped over");
  };

  useEffect(() => {
    console.log("Pause here and step over!");
    stepOver();
    stepInto();
  }, []);

  const onButtonPress = () => {
    console.log("Pause here and step over!");
  };

  return (
    <View style={styles.container}>
      <Button onPress={onButtonPress} title="My Button" />
      <Text>Hello!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
