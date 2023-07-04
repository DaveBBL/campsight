import { useState } from "react"
import { StyleSheet, View, FlatList } from "react-native"
import SiteInput from "./components/SiteInput"
import SiteItem from "./components/SiteItem"

export default function App() {
  const [siteCollection, setSiteCollection] = useState([])

  function addSiteHandler(passedSiteObject) {
    setSiteCollection((currentSiteCollection) => [
      ...currentSiteCollection,
      passedSiteObject,
    ])
    console.log(siteCollection)
  }

  return (
    <View style={styles.appContainer}>
      <SiteInput onAddSite={addSiteHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 2,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  sitesContainer: {
    flex: 5,
  },
})
