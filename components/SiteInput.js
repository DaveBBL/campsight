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
        <TextInput
          style={styles.textInput}
          placeholder="Site Number"
          onChangeText={(newText) => setSiteNumber(newText)}
          value={siteNumber}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Arrival Date"
          onChangeText={(newText) => setArrivalDate(newText)}
          value={arrivalDate}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Days Staying"
          onChangeText={(newText) => setStayDays(newText)}
          value={stayDays}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Verification"
          onChangeText={(newText) => setVerification(newText)}
          value={verification}
        />
      </View>
      <View style={styles.button}>
        <Button title="Add Site" onPress={addSiteHandler} />
      </View>
    </>
  );
}

export default SiteInput;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 12,
  },
  inputContainer: {
    flex: 0,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 4,
    padding: 6,
    backgroundColor: "#336699",
  },
  textLabel: {
    padding: 4,
    marginTop: 5,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "60%",
    margin: 8,
    padding: 6,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#99CCFF",
  },
  button: {
    marginTop: 8,
    marginBottom: 4,
    width: "100%",
    alignItems: "center",
  },
});
