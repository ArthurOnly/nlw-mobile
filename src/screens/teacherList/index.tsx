import React, { useState, useEffect } from "react"
import AsyncStorage from "@react-native-community/async-storage"

import styles from "./styles"
import { View, ScrollView, Text, TextInput } from "react-native"
import { Feather } from "@expo/vector-icons"

import PageHeader from "../../components/pageHeader"
import TeacherItem from "../../components/teacherItem"
import { BorderlessButton, RectButton } from "react-native-gesture-handler"

import api from "../../helpers/api"
import { useFocusEffect } from "@react-navigation/native"

function TeacherList() {
  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState([])
  const [isFiltersVisible, setFiltersVisible] = useState(false)

  const [subject, setSubject] = useState("")
  const [week_day, setDay] = useState("")
  const [time, setTime] = useState("")

  function getFavoreds() {
    AsyncStorage.getItem("favorites").then(res => {
      if (res) {
        const favored = JSON.parse(res)
        const favoredIds = favored.map(teacher => {
          return teacher.id
        })
        setFavorites(favoredIds)
      }
    })
  }

  useFocusEffect(() => getFavoreds())

  async function searchTeachers() {
    getFavoreds()
    const res = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    })

    setTeachers(res.data)
    setFiltersVisible(false)
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton
            onPress={() => setFiltersVisible(!isFiltersVisible)}
          >
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              value={subject}
              onChangeText={text => setSubject(text)}
              style={styles.input}
              placeholderTextColor="#c1bccc"
              placeholder="Qual a matéria?"
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  value={week_day}
                  onChangeText={text => setDay(text)}
                  style={styles.input}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  value={time}
                  onChangeText={text => setTime(text)}
                  style={styles.input}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual horário?"
                />
              </View>
            </View>
            <RectButton style={styles.submitButton} onPress={searchTeachers}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map(teacher => (
          <TeacherItem
            favorited={favorites.includes(teacher.id)}
            teacher={teacher}
            key={teacher.id}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default TeacherList
