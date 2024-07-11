import { View, Text, TextInput as RNTextInput, Pressable } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemeProps } from "@/types/theme.types";
import Row from "./Row";

interface AdditionalProps {
  /**
   * Custom Icon on the right side of the text input
   */
  icon?: React.JSX.Element;

  /**
   * Callback Function to be called when icon is pressed
   */
  onIconPress?: () => void;
}

export type TextProps = ThemeProps & RNTextInput["props"] & AdditionalProps;

export function TextInput(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, "inputBorder");

  return (
    <Row
      alignCenter
      style={[
        {
          borderColor,
          borderWidth: 1,
          width: "100%",
          borderRadius: 5
        },
        style
      ]}
    >
      <RNTextInput
        style={[
          {
            color,
            flexGrow: 1,
            flex: 1,
            paddingVertical: 14,
            paddingHorizontal: 8
          }
        ]}
        {...otherProps}
      />
      <Pressable onPress={props.onIconPress}>
        {props.icon && <View style={{ paddingHorizontal: 8 }}>{props.icon}</View>}
      </Pressable>
    </Row>
  );
}
