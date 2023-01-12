import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/theme";
import { appColors } from "../styles/constants";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGray?: boolean;
}

export default function Button({
  title,
  onPress,
  isBlue,
  isGray,
}: ButtonProps) {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={{
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: isBlue
          ? appColors.blue
          : isGray
          ? appColors.btnGray
          : theme === "light"
          ? appColors.white
          : appColors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
      }}
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === "dark"
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
