import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const { Navigator, Screen } = createBottomTabNavigator()

import TeacherList from "../screens/teacherList"
import Favorites from "../screens/favorites"

function StudyTabs() {
  return (
    <Navigator>
      <Screen name="teacherList" component={TeacherList} />
      <Screen name="favorites" component={Favorites} />
    </Navigator>
  )
}

export default StudyTabs
