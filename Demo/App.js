import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { TouchableHighlight } from "react-native";
import {
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";

// Section2

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Section 2!</Text>
    </SafeAreaView>
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

// // Section1
// export default function App() {
//   const stepInto = () => {
//     console.log("Stepped into");
//   };

//   const stepOver = () => {
//     console.log("Stepped over");
//   };

//   useEffect(() => {
//     console.log("Pause here and step over!");
//     stepOver();
//     stepInto();
//   }, []);

//   const onButtonPress = () => {
//     console.log("Pause here and step over!");
//   };

//   const handlePress = () => {
//     console.log("click text...");
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text numberOfLines={1} onPress={handlePress}>
//         TEXT!
//       </Text>
//       {/* <Image source={require("./assets/icon.png")} /> */}
//       <TouchableHighlight
//         onPress={() => {
//           console.log("click Image...");
//         }}
//       >
//         <Image
//           source={{
//             uri: "https://picsum.photos/200",
//             width: 200,
//             height: 200,
//           }}
//           blurRadius={10}
//         />
//       </TouchableHighlight>
//       <Button
//         color="black"
//         title="Alert.alert Test"
//         onPress={() => {
//           console.log("click button...");
//           Alert.alert("button tapped!", "My message"),
//             [
//               {
//                 text: "Yes",
//                 onPress: () => {
//                   console.log("select YES...");
//                 },
//               },
//               {
//                 text: "No",
//                 onPress: () => {
//                   console.log("select No...");
//                 },
//               },
//             ];
//         }}
//       />
//       <Button
//         color="grey"
//         title="Alert.prompt Test"
//         onPress={() => {
//           Alert.prompt("My Title", "My Message", (text) =>
//             console.log("input text is", text)
//           );
//         }}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
