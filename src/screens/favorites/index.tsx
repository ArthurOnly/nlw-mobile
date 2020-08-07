import React from "react"

import styles from "./styles"
import { View, ScrollView } from "react-native"
import PageHeader from "../../components/pageHeader"
import TeacherItem from "../../components/teacherItem"

function Favorites() {
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
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
}

export default Favorites
