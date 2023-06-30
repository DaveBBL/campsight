import { useState } from "react"
import { StyleSheet, View, TextInput, Button } from "react-native"

function SiteInput(props) {
  const [siteNumber, setSiteNumber] = useState("")
  const [arrivalDate, setArrivalDate] = useState(Date.now())
  const [stayDays, setStayDays] = useState("1")
  const [verification, setVerification] = useState("")

  function siteNumberInputHandler(enteredSite) {
    setSiteNumber(enteredSite)
  }

  function arrivalDateInputHandler(enteredDate) {
    setArrivalDate(enteredDate)
  }

  function addSiteHandler() {
    props.onAddSite(enteredGoalText)
    setEnteredGoalText("")
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Site Number"
        onChangeText={siteNumberInputHandler}
        value={siteNumber}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Arrival Date"
        onChangeText={arrivalDateInputHandler}
        value={arrivalDate}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Days Staying"
        onChangeText={stayDaysInputHandler}
        value={stayDays}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Verification"
        onChangeText={verificationInputHandler}
        value={verification}
      />

      <Button title="Add Site" onPress={addSiteHandler} />
    </View>
  )
}

export default SiteInput
