import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 175,
    backgroundColor: theme.colors.secondary80,
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
    justifyContent: "flex-end",
  },
  viewCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 29,
  },
  title1: {
    color: theme.colors.heading,
    fontSize: 20,
    fontFamily: theme.fonts.title500,
  },
  title2: {
    color: theme.colors.heading,
    fontSize: 20,
    fontFamily: theme.fonts.title700,
  },
  title3: {
    color: theme.colors.primary,
    fontSize: 20,
    fontFamily: theme.fonts.title700,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 26,
    // paddingHorizontal: 40,
  },
  button: {
    width: 160,
    height: 60,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    borderWidth: 1,
  },
  buttonSim: {
    backgroundColor: theme.colors.primary,
  },
  buttonNao: {
    borderColor: theme.colors.secondary50,
  },
  titleButton: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center",
    fontFamily: theme.fonts.text500,
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary30,
    alignSelf: "center",
    marginTop: 13,
  },
});
