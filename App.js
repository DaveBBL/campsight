import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import SiteInput from "./components/SiteInput";
import SiteList from "./components/SiteList";

export default function App() {
  const [siteCollection, setSiteCollection] = useState([]);

  function addSiteHandler(passedSiteObject) {
    setSiteCollection((currentSiteCollection) => [
      ...currentSiteCollection,
      passedSiteObject,
    ]);
    console.log(siteCollection);
  }

  return (
    <View style={styles.appContainer}>
      <SiteInput onAddSite={addSiteHandler} />
      <SiteList sites={siteCollection} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
