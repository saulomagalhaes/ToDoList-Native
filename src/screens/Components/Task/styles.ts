import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#1A1A1A",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#333333",
    borderWidth: 1,
    borderRadius: 8,
    maxHeight: 74,
    marginBottom: 8,
  },
  checkboxAndTitle: {
    flexDirection: "row",
    alignItems: "center",
    width: 235,
  },
  trash: {
    width: 32,
    height: 32,
  },
  text: {
    color: "#F2F2F2",
    lineHeight: 20,
  },
  textDone: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 99,
    borderColor: "#4EA8DE",
    marginRight: 8,
  }
});
