import React, { useState } from "react"
import AsyncStorage from "@react-native-community/async-storage"
import { useFocusEffect } from "@react-navigation/native"

import styles from "./styles"
import { View, ScrollView } from "react-native"
import PageHeader from "../../components/pageHeader"
import TeacherItem from "../../components/teacherItem"

function Favorites() {
  const [favorites, setFavorites] = useState([])
  function getFavoreds() {
    AsyncStorage.getItem("favorites").then(res => {
      if (res) {
        const favored = JSON.parse(res)
        setFavorites(favored)
      }
    })
  }

  useFocusEffect(() => getFavoreds())
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map(teacher => {
          return <TeacherItem favorited teacher={teacher} key={teacher.id} />
        })}
      </ScrollView>
    </View>
  )
}

export default Favorites
