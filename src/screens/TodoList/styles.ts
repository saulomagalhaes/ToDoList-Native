import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  boxBlack: {
    backgroundColor: "#0D0D0D",
    width: "100%",
    height: 173,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 110,
    height: 32,
  },
  container: {
    padding: 24,
    backgroundColor: "#1A1A1A",
    height: "100%",
  },
  addTask: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: -50,
  },
  input: {
    backgroundColor: "#262626",
    color: "#454545",
    paddingStart: 16,
    paddingEnd: 63,
    marginEnd: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "borderWidth",
    flex: 1,
  },
  button: {
    backgroundColor: "#1E6F9F",
    padding: 18,
    borderRadius: 6,
  },
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 20,
    width: "100%",
  },
  box: {
    flexDirection: "row",
  },
  boxText: {
    marginRight: 8,
  },
  boxSpan: {
    backgroundColor: "#333333",
    width: 25,
    borderRadius: 9,
  },
  textCreated: {
    color: "#4EA8DE",
  },
  textFinished: {
    color: "#8284FA",
  },
  span: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});
