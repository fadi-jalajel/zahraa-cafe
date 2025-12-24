import { ImageBackground } from "expo-image";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const imgURI =
  "https://images.pexels.com/photos/2575830/pexels-photo-2575830.jpeg";

export default function HomeScreen() {
  return (
    <ImageBackground
      contentPosition="center"
      source={{ uri: imgURI }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("/navpoint")}
      >
        <Text style={styles.buttonText}>Browse our special coffee ☕️</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3C3431",
    opacity: 0.9,
    borderRadius: 10,
  },
  buttonText: {
    color: "#F9F6F0",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#F9F6F070",
  },
});
