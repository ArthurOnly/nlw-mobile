import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { View, Text, Image } from "react-native"
import { RectButton } from "react-native-gesture-handler"

import styles from "./styles"

import landingImage from "../../assets/images/landing.png"
import studyIcon from "../../assets/images/icons/study.png"
import giveClassesIcon from "../../assets/images/icons/give-classes.png"
import heartIcon from "../../assets/images/icons/heart.png"

import api from "../../helpers/api"

function Landing() {
  const { navigate } = useNavigation()
  function handleNavigate(route: string) {
    navigate(route)
  }
  const [connections, setConnections] = useState(0)

  useEffect(() => {
    api.get("/connections").then(res => setConnections(res.data.total.total))
  }, [])

  return (
    <View style={styles.container}>
      <Image source={landingImage} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={() => handleNavigate("study")}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          onPress={() => handleNavigate("giveClasses")}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        Total de {connections} conexões já realizadas{"  "}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

export default Landing
