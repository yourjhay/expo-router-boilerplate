import { View, Text, TextInput as RNTextInput, Pressable } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { InputThemeProps, ThemeProps } from "@/types/theme.types";
import Row from "./Row";
import Colors from "@/constants/Colors";

interface AdditionalProps {
  /**
   * Custom Icon on the right side of the text input
   */
  rightElement?: React.JSX.Element;

  /**
   * Custom Icon on the left side of the text input
   */
  leftElement?: React.JSX.Element;

  /**
   * Callback Function to be called when icon is pressed
   */
  onIconPress?: () => void;

  /**
   * Custom style for the text input container
   */
  containerStyle?: View["props"]["style"];
}

export type TextProps = InputThemeProps & ThemeProps & RNTextInput["props"] & AdditionalProps;

type Ref = React.ForwardedRef<RNTextInput>;

const TextInput = React.forwardRef(({ ...props }: TextProps, ref: Ref) => {
  const { containerStyle, style, lightColor, darkColor, lightTextColor, darkTextColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightTextColor, dark: darkTextColor }, "text");
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return (
    <Row
      alignCenter
      style={[
        {
          backgroundColor,
          borderColor: Colors.inputBorder,
          borderWidth: 1,
          width: "100%",
          borderRadius: 5
        },
        containerStyle
      ]}
    >
      <View>{props.leftElement && <View style={{ paddingHorizontal: 10 }}>{props.leftElement}</View>}</View>
      <RNTextInput
        ref={ref}
        style={[
          {
            color,
            flexGrow: 1,
            flex: 1,
            paddingVertical: 14,
            paddingHorizontal: 8
          },
          style
        ]}
        {...otherProps}
      />
      <Pressable onPress={props.onIconPress}>
        {props.rightElement && <View style={{ paddingHorizontal: 10 }}>{props.rightElement}</View>}
      </Pressable>
    </Row>
  );
});

export default TextInput;
