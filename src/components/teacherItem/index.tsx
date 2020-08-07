import React from "react"
import { View, Image, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

import styles from "./styles"
import { RectButton } from "react-native-gesture-handler"

import heartOutlinedIcon from "../../assets/images/icons/heart-outline.png"
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png"
import whatsappIcon from "../../assets/images/icons/whatsapp.png"

const TeacherItem: React.FC = ({}) => {
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://avatars2.githubusercontent.com/u/56327949?s=460&u=9ccc56d77e88e38c375b83afb3c8c888e447515f&v=4.png",
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Arthur</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>
      <Text style={styles.bio}>Biogragia de texto</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"   "}
          <Text style={styles.priceValue}>R$ 10,00</Text>{" "}
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            <Image source={heartOutlinedIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem
