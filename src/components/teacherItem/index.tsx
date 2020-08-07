import React, { useState } from "react"
import { View, Image, Text, Linking } from "react-native"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-community/async-storage"

import styles from "./styles"
import { RectButton } from "react-native-gesture-handler"

import heartOutlinedIcon from "../../assets/images/icons/heart-outline.png"
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png"
import whatsappIcon from "../../assets/images/icons/whatsapp.png"

interface Teacher {
  teacher: {
    avatar: string
    bio: string
    cost: Number
    id: Number
    name: string
    subject: string
    user_id: Number
    whatsapp: string
  }
  favorited: boolean
}

const TeacherItem: React.FC<Teacher> = ({ teacher, favorited }) => {
  const [isFavored, setIsFavored] = useState(favorited)

  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites")
    let favoredArray = []
    if (favorites) {
      favoredArray = JSON.parse(favorites)
    }

    if (isFavored) {
      const teacherIndex = favoredArray.findIndex(teacherItem => {
        return teacherItem.id === teacher.id
      })
      favoredArray.splice(teacherIndex, 1)
      setIsFavored(false)
    } else {
      favoredArray.push(teacher)
      setIsFavored(true)
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(favoredArray))
  }
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: teacher.avatar,
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{teacher.bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"   "}
          <Text style={styles.priceValue}>{teacher.cost}</Text>{" "}
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[styles.favoriteButton, isFavored && styles.favorited]}
          >
            <Image source={isFavored ? unfavoriteIcon : heartOutlinedIcon} />
          </RectButton>
          <RectButton
            style={styles.contactButton}
            onPress={handleLinkToWhatsapp}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem
