import { StyleSheet } from "react-native";
import { appColors } from "./constants";

export const Styles = StyleSheet.create({
  // Buttons
  smallTextLight: {
    fontSize: 32,
    color: appColors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: appColors.black,
  },
  // Keyboard
  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: appColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 40,
    color: appColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
});
