import "react-native-get-random-values";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { uuid } from "../utilities/Uuid";

function SiteInput(props) {
  const [siteNumber, setSiteNumber] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [stayDays, setStayDays] = useState("");
  const [verification, setVerification] = useState("");

  function clearTextInputs() {
    setSiteNumber("");
    setArrivalDate("");
    setStayDays("");
    setVerification("");
  }

  function addSiteHandler() {
    const id = uuid();
    const siteObject = {
      id: id,
      site: siteNumber,
      arrived: arrivalDate,
      stay: stayDays,
      verification: verification,
    };
    console.log(siteObject);
    props.onAddSite(siteObject);
    clearTextInputs();
  }

  return (
    <>
      <Text style={styles.header}>Site Survey</Text>
      <View style={styles.inputContainer}>
        <View style={styles.InputSubContainer}>
          <Text style={styles.textLabel}>Site Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Site Number"
            onChangeText={(newText) => setSiteNumber(newText)}
            value={siteNumber}
          />
          <Text style={styles.textLabel}>Arrival Date</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Arrival Date"
            onChangeText={(newText) => setArrivalDate(newText)}
            value={arrivalDate}
          />
        </View>
        <View style={styles.InputSubContainer}>
          <Text style={styles.textLabel}>Days Staying</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Days Staying"
            onChangeText={(newText) => setStayDays(newText)}
            value={stayDays}
          />
          <Text style={styles.textLabel}>Registration</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Verification"
            onChangeText={(newText) => setVerification(newText)}
            value={verification}
          />
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Add Site" onPress={addSiteHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 12,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 4,
  },
  InputSubContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textLabel: {
    padding: 4,
    marginTop: 5,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "60%",
    marginRight: 8,
    padding: 6,
    textAlign: "center",
  },
  button: {
    marginTop: 8,
    width: "100%",
    alignItems: "center",
  },
});

export default SiteInput;
