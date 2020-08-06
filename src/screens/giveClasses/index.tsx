import React from "react"
import { View, Text, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native"

import styles from "./styles"

import giveClassesBgImage from "../../assets/images/give-classes-background.png"
import { RectButton } from "react-native-gesture-handler"

function GiveClasses() {
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>
      <RectButton onPress={() => navigate("landing")} style={[styles.button]}>
        <Text style={styles.buttonText}>Tudo bem</Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses
