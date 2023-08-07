import { Text, View, StyleSheet } from "react-native";

function SiteItem({ item }) {
  return (
    <View style={styles.siteItems}>
      <Text style={styles.siteField}>Site: </Text>
      <Text style={styles.siteField}>{item.site}</Text>
      <Text style={styles.siteField}>Date: </Text>
      <Text style={styles.siteField}>{item.arrived}</Text>
      <Text style={styles.siteField}>Days: </Text>
      <Text style={styles.siteField}>{item.stay}</Text>
      <Text style={styles.siteField}>Reg: </Text>
      <Text style={styles.siteField}>{item.verification}</Text>
    </View>
  );
}

export default SiteItem;

const styles = StyleSheet.create({
  siteItems: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#88CCFF",
    marginTop: 12,
  },
  siteField: {
    flex: 8,
    fontSize: 14,
  },
});
