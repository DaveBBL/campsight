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
  }

  function deleteSiteHandler() {}

  return (
    <View style={styles.appContainer}>
      <SiteInput onAddSite={addSiteHandler} />
      <View style={styles.sitesContainer}>
        <FlatList
          data={siteCollection}
          renderItem={(itemData) => {
            return (
              <SiteItem text={itemData.item} onDeleteItem={deleteSiteHandler} />
            )
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  sitesContainer: {
    flex: 5,
  },
})
