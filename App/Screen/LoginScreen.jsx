import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Image
        source={require("./../../assets/images/logo.png")}
        style={styles.logoImage}
      />
      <Image
        source={require("./../../assets/images/ev-charging.png")}
        style={styles.loginBGImage}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.headingPrimary}>
          Ultimate EV Charging Finder Application
        </Text>
        <Text style={styles.headingSecondary}>
          Plan your trips with ease, as your EV Finder is here!!
        </Text>
        <TouchableOpacity style={styles.loginBTN} onPress={onPress}>
          <Text style={styles.loginBTNText}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  logoImage: {
    width: 200,
    height: 40,
    objectFit: "contain",
  },
  loginBGImage: {
    width: "100%",
    height: 240,
    marginTop: 20,
    objectFit: "cover",
  },
  headingPrimary: {
    fontSize: 25,
    fontFamily: "Poppins-Medium",
    textAlign: "center",
    marginTop: 20,
  },
  headingSecondary: {
    fontSize: 17,
    fontFamily: "Poppins-Medium",
    marginTop: 15,
    textAlign: "center",
    color: Colors.GREEN,
  },
  loginBTN: {
    backgroundColor: Colors.SECONDARY,
    padding: 16,
    display: "flex",
    borderRadius: 99,
    marginTop: 60,
  },
  loginBTNText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    textAlign: "center",
  },
});
